# Copyright (c) 2017 StackHPC Ltd.
#
# Licensed under the Apache License, Version 2.0 (the "License"); you may
# not use this file except in compliance with the License. You may obtain
# a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.

import json
import sys

from cliff.command import Command

from kayobe import ansible
from kayobe import kolla_ansible
from kayobe import utils
from kayobe import vault


def _build_playbook_list(*playbooks):
    """Return a list of names of playbook files given their basenames."""
    return [
        _get_playbook_path(playbook)
        for playbook in playbooks
    ]


def _get_playbook_path(playbook):
    """Return the absolute path of a playbook"""
    return utils.get_data_files_path("ansible", "%s.yml" % playbook)


class VaultMixin(object):
    """Mixin class for commands requiring Ansible vault."""

    def get_parser(self, prog_name):
        parser = super(VaultMixin, self).get_parser(prog_name)
        group = parser.add_argument_group("Ansible vault")
        vault.add_args(group)
        return parser


class KayobeAnsibleMixin(object):
    """Mixin class for commands running Kayobe Ansible playbooks."""

    def get_parser(self, prog_name):
        parser = super(KayobeAnsibleMixin, self).get_parser(prog_name)
        group = parser.add_argument_group("Kayobe Ansible")
        self.add_kayobe_ansible_args(group)
        return parser

    def add_kayobe_ansible_args(self, group):
        ansible.add_args(group)

    def _get_verbosity_args(self):
        """Add quietness and verbosity level arguments."""
        # Cliff's default verbosity level is 1, 0 means quiet.
        verbosity_args = {}
        if self.app.options.verbose_level:
            ansible_verbose_level = self.app.options.verbose_level - 1
            verbosity_args["verbose_level"] = ansible_verbose_level
        else:
            verbosity_args["quiet"] = True
        return verbosity_args

    def run_kayobe_playbooks(self, parsed_args, *args, **kwargs):
        kwargs.update(self._get_verbosity_args())
        return ansible.run_playbooks(parsed_args, *args, **kwargs)

    def run_kayobe_playbook(self, parsed_args, *args, **kwargs):
        kwargs.update(self._get_verbosity_args())
        return ansible.run_playbook(parsed_args, *args, **kwargs)

    def run_kayobe_config_dump(self, parsed_args, *args, **kwargs):
        kwargs.update(self._get_verbosity_args())
        return ansible.config_dump(parsed_args, *args, **kwargs)

    def generate_kolla_ansible_config(self, parsed_args, install=False,
                                      service_config=True,
                                      bifrost_config=False):
        """Generate configuration for kolla-ansible.

        :param install: If True, also install kolla-ansible.
        :param service_config: If True, generate service configuration.
        :param bifrost_config: If True, generate bifrost configuration.
        """
        # We use ignore_limit here because all of these plays execute against
        # localhost, and are typically necessary for kolla-ansible to function
        # correctly. Previously a number of people were caught out by using
        # --limit and having these plays skipped.
        tags = None if install else "config"
        playbooks = _build_playbook_list("kolla-ansible")
        self.run_kayobe_playbooks(parsed_args, playbooks, tags=tags,
                                  ignore_limit=True)
        if service_config:
            playbooks = _build_playbook_list("kolla-openstack")
            self.run_kayobe_playbooks(parsed_args, playbooks,
                                      ignore_limit=True)
        if bifrost_config:
            playbooks = _build_playbook_list("kolla-bifrost")
            self.run_kayobe_playbooks(parsed_args, playbooks,
                                      ignore_limit=True)


class KollaAnsibleMixin(object):
    """Mixin class for commands running Kolla Ansible."""

    def get_parser(self, prog_name):
        parser = super(KollaAnsibleMixin, self).get_parser(prog_name)
        group = parser.add_argument_group("Kolla Ansible")
        self.add_kolla_ansible_args(group)
        return parser

    def add_kolla_ansible_args(self, group):
        kolla_ansible.add_args(group)

    def _get_verbosity_args(self):
        """Add quietness and verbosity level arguments."""
        # Cliff's default verbosity level is 1, 0 means quiet.
        verbosity_args = {}
        if self.app.options.verbose_level:
            ansible_verbose_level = self.app.options.verbose_level - 1
            verbosity_args["verbose_level"] = ansible_verbose_level
        else:
            verbosity_args["quiet"] = True
        return verbosity_args

    def run_kolla_ansible(self, *args, **kwargs):
        kwargs.update(self._get_verbosity_args())
        return kolla_ansible.run(*args, **kwargs)

    def run_kolla_ansible_overcloud(self, *args, **kwargs):
        kwargs.update(self._get_verbosity_args())
        return kolla_ansible.run_overcloud(*args, **kwargs)

    def run_kolla_ansible_seed(self, *args, **kwargs):
        kwargs.update(self._get_verbosity_args())
        return kolla_ansible.run_seed(*args, **kwargs)


class ControlHostBootstrap(KayobeAnsibleMixin, KollaAnsibleMixin, VaultMixin,
                           Command):
    """Bootstrap the Kayobe control environment.

    * Downloads and installs Ansible roles from Galaxy.
    * Generates an SSH key for the Ansible control host, if one does not exist.
    * Installs kolla-ansible on the Ansible control host.
    * Generates admin-openrc.sh and public-openrc.sh files when passwords.yml
      exists.
    """

    def take_action(self, parsed_args):
        self.app.LOG.debug("Bootstrapping Kayobe Ansible control host")
        ansible.install_galaxy_roles(parsed_args)
        playbooks = _build_playbook_list("bootstrap")
        self.run_kayobe_playbooks(parsed_args, playbooks, ignore_limit=True)

        passwords_exist = ansible.passwords_yml_exists(parsed_args)
        if passwords_exist:
            # Install and generate configuration - necessary for post-deploy.
            ka_tags = None
        else:
            ka_tags = "install"
        playbooks = _build_playbook_list("kolla-ansible")
        self.run_kayobe_playbooks(parsed_args, playbooks, tags=ka_tags,
                                  ignore_limit=True)

        if passwords_exist:
            # If we are bootstrapping a control host for an existing
            # environment, we should also generate the admin-openrc.sh and
            # public-openrc.sh scripts that provide admin credentials.

            self.run_kolla_ansible_overcloud(parsed_args, "post-deploy")
            # Create an environment file for accessing the public API as the
            # admin user.
            playbooks = _build_playbook_list("public-openrc")
            self.run_kayobe_playbooks(parsed_args, playbooks,
                                      ignore_limit=True)


class ControlHostUpgrade(KayobeAnsibleMixin, VaultMixin, Command):
    """Upgrade the Kayobe control environment.

    * Downloads and installs updated Ansible roles from Galaxy.
    * Generates an SSH key for the Ansible control host, if one does not exist.
    * Updates kolla-ansible on the Ansible control host.
    """

    def take_action(self, parsed_args):
        self.app.LOG.debug("Upgrading Kayobe Ansible control host")
        # Remove roles that are no longer used. Do this before installing new
        # ones, just in case a custom role dependency includes any.
        ansible.prune_galaxy_roles(parsed_args)
        # Use force to upgrade roles.
        ansible.install_galaxy_roles(parsed_args, force=True)
        playbooks = _build_playbook_list("bootstrap")
        self.run_kayobe_playbooks(parsed_args, playbooks, ignore_limit=True)
        playbooks = _build_playbook_list("kolla-ansible")
        self.run_kayobe_playbooks(parsed_args, playbooks, tags="install",
                                  ignore_limit=True)


class ConfigurationDump(KayobeAnsibleMixin, VaultMixin, Command):
    """Dump Kayobe configuration.

    Dumps kayobe Ansible host variables to standard output. The output may be
    filtered by selecting one or more hosts, or a specific variable.
    """

    def get_parser(self, prog_name):
        parser = super(ConfigurationDump, self).get_parser(prog_name)
        group = parser.add_argument_group("Configuration Dump")
        group.add_argument("--dump-facts", default=False,
                           help="whether to gather and dump host facts")
        group.add_argument("--host",
                           help="name of a host to dump config for")
        group.add_argument("--hosts",
                           help="name of hosts and/or groups to dump config "
                                "for")
        group.add_argument("--var-name",
                           help="name of a variable to dump")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Dumping Ansible configuration")
        hostvars = self.run_kayobe_config_dump(
            parsed_args, host=parsed_args.host, hosts=parsed_args.hosts,
            facts=parsed_args.dump_facts, var_name=parsed_args.var_name)
        try:
            json.dump(hostvars, sys.stdout, sort_keys=True, indent=4)
        except TypeError as e:
            self.app.LOG.error("Failed to JSON encode configuration: %s",
                               repr(e))
            sys.exit(1)


class PlaybookRun(KayobeAnsibleMixin, VaultMixin, Command):
    """Run a Kayobe Ansible playbook.

    Allows a single Kayobe ansible playbook to be run. For advanced users only.
    """

    def add_kayobe_ansible_args(self, group):
        super(PlaybookRun, self).add_kayobe_ansible_args(group)
        group.add_argument("playbook", nargs="+",
                           help="name of the playbook(s) to run")

    def take_action(self, parsed_args):
        self.app.LOG.debug("Running Kayobe playbook(s)")
        self.run_kayobe_playbooks(parsed_args, parsed_args.playbook)


class KollaAnsibleRun(KollaAnsibleMixin, VaultMixin, Command):
    """Run a Kolla Ansible command.

    Allows a single kolla-ansible command to be run. For advanced users only.
    """

    def add_kolla_ansible_args(self, group):
        super(KollaAnsibleRun, self).add_kolla_ansible_args(group)
        group.add_argument("--kolla-inventory-filename", default="overcloud",
                           choices=["seed", "overcloud"],
                           help="name of the kolla-ansible inventory file, "
                                "one of seed or overcloud (default "
                                "overcloud)")
        group.add_argument("command",
                           help="name of the kolla-ansible command to run")

    def take_action(self, parsed_args):
        self.app.LOG.debug("Running Kolla Ansible command")
        self.run_kolla_ansible(parsed_args, parsed_args.command,
                               parsed_args.kolla_inventory_filename)


class PhysicalNetworkConfigure(KayobeAnsibleMixin, VaultMixin, Command):
    """Configure a set of physical network devices."""

    def get_parser(self, prog_name):
        parser = super(PhysicalNetworkConfigure, self).get_parser(
            prog_name)
        group = parser.add_argument_group("Physical Networking")
        group.add_argument("--group", required=True,
                           help="the Ansible group to apply configuration to")
        group.add_argument("--display", action="store_true",
                           help="display the candidate configuration and exit "
                                "without applying it")
        group.add_argument("--interface-limit",
                           help="limit the switch interfaces to be configured "
                                "by interface name")
        group.add_argument("--interface-description-limit",
                           help="limit the switch interfaces to be configured "
                                "by interface description")
        discovery = parser.add_mutually_exclusive_group()
        discovery.add_argument("--enable-discovery", action="store_true",
                               help="configure the network for hardware "
                                    "discovery")
        discovery.add_argument("--disable-discovery", action="store_true",
                               help="deconfigure the network for hardware "
                                    "discovery")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Configuring a physical network")
        extra_vars = {}
        extra_vars["physical_network_display"] = parsed_args.display
        if parsed_args.enable_discovery:
            extra_vars["physical_network_enable_discovery"] = True
        if parsed_args.disable_discovery:
            extra_vars["physical_network_disable_discovery"] = True
        if parsed_args.interface_limit:
            extra_vars["physical_network_interface_limit"] = (
                parsed_args.interface_limit)
        if parsed_args.interface_description_limit:
            extra_vars["physical_network_interface_description_limit"] = (
                parsed_args.interface_description_limit)
        self.run_kayobe_playbook(parsed_args,
                                 _get_playbook_path('physical-network'),
                                 limit=parsed_args.group,
                                 extra_vars=extra_vars)


class SeedHypervisorHostConfigure(KollaAnsibleMixin, KayobeAnsibleMixin,
                                  VaultMixin, Command):
    """Configure the seed hypervisor node host OS and services.

    * Allocate IP addresses for all configured networks.
    * Add the host to SSH known hosts.
    * Configure a user account for use by kayobe for SSH access.
    * Optionally, create a virtualenv for remote target hosts.
    * Optionally, wipe unmounted disk partitions (--wipe-disks).
    * Configure user accounts, group associations, and authorised SSH keys.
    * Configure a PyPI mirror.
    * Configure Yum repos.
    * Configure the host's network interfaces.
    * Set sysctl parameters.
    * Configure NTP.
    * Optionally, configure software RAID arrays.
    * Configure LVM volumes.
    * Configure the host as a libvirt hypervisor.
    """

    def get_parser(self, prog_name):
        parser = super(SeedHypervisorHostConfigure, self).get_parser(prog_name)
        group = parser.add_argument_group("Host Configuration")
        group.add_argument("--wipe-disks", action='store_true',
                           help="wipe partition and LVM data from all disks "
                                "that are not mounted. Warning: this can "
                                "result in the loss of data")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Configuring seed hypervisor host OS")
        # Explicitly request the dump-config tag to ensure this play runs even
        # if the user specified tags.
        ansible_user = self.run_kayobe_config_dump(
            parsed_args, host="seed-hypervisor",
            var_name="kayobe_ansible_user", tags="dump-config")
        if not ansible_user:
            self.app.LOG.error("Could not determine kayobe_ansible_user "
                               "variable for seed hypervisor host")
            sys.exit(1)

        # Allocate IP addresses.
        playbooks = _build_playbook_list("ip-allocation")
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  limit="seed-hypervisor")

        playbooks = _build_playbook_list(
            "ssh-known-host", "kayobe-ansible-user",
            "pip", "kayobe-target-venv")
        if parsed_args.wipe_disks:
            playbooks += _build_playbook_list("wipe-disks")
        playbooks += _build_playbook_list(
            "users", "yum", "dnf", "dev-tools", "network", "sysctl", "ntp",
            "mdadm", "lvm", "seed-hypervisor-libvirt-host")
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  limit="seed-hypervisor")


class SeedHypervisorHostPackageUpdate(KayobeAnsibleMixin, VaultMixin, Command):
    """Update packages on the seed hypervisor host."""

    def get_parser(self, prog_name):
        parser = super(SeedHypervisorHostPackageUpdate, self).get_parser(
            prog_name)
        group = parser.add_argument_group("Host Package Updates")
        group.add_argument("--packages", required=True,
                           help="List of packages to update. Use '*' to "
                                "update all packages.")
        group.add_argument("--security", action='store_true',
                           help="Only install updates that have been marked "
                                "security related.")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Updating seed hypervisor host packages")
        extra_vars = {
            "host_package_update_packages": parsed_args.packages,
            "host_package_update_security": parsed_args.security,
        }
        playbooks = _build_playbook_list("host-package-update")
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  limit="seed-hypervisor",
                                  extra_vars=extra_vars)


class SeedHypervisorHostCommandRun(KayobeAnsibleMixin, VaultMixin, Command):
    """Run command on the seed hypervisor host."""

    def get_parser(self, prog_name):
        parser = super(SeedHypervisorHostCommandRun, self).get_parser(
            prog_name)
        group = parser.add_argument_group("Host Command Run")
        group.add_argument("--command", required=True,
                           help="Command to run (required).")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Run command on seed hypervisor host")
        extra_vars = {
            "host_command_to_run": utils.escape_jinja(parsed_args.command)}
        playbooks = _build_playbook_list("host-command-run")
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  limit="seed-hypervisor",
                                  extra_vars=extra_vars)


class SeedHypervisorHostUpgrade(KayobeAnsibleMixin, VaultMixin, Command):
    """Upgrade the seed hypervisor host services.

    Performs the changes necessary to make the host services suitable for the
    configured OpenStack release.
    """

    def take_action(self, parsed_args):
        self.app.LOG.debug("Upgrading seed hypervisor host services")
        playbooks = _build_playbook_list("kayobe-target-venv")
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  limit="seed-hypervisor")


class SeedVMProvision(KollaAnsibleMixin, KayobeAnsibleMixin, VaultMixin,
                      Command):
    """Provision the seed VM.

    * Allocate IP addresses for all configured networks.
    * Provision a virtual machine using libvirt.
    * Configure the kolla-ansible inventory for the seed VM.
    """

    def take_action(self, parsed_args):
        self.app.LOG.debug("Provisioning seed VM")
        self.run_kayobe_playbook(parsed_args,
                                 _get_playbook_path("ip-allocation"),
                                 limit="seed")
        self.run_kayobe_playbook(parsed_args,
                                 _get_playbook_path("seed-vm-provision"))
        # Now populate the Kolla Ansible inventory.
        self.generate_kolla_ansible_config(parsed_args, service_config=False)


class SeedVMDeprovision(KollaAnsibleMixin, KayobeAnsibleMixin, VaultMixin,
                        Command):
    """Deprovision the seed VM.

    This will destroy the seed VM and all associated volumes.
    """

    def take_action(self, parsed_args):
        self.app.LOG.debug("Deprovisioning seed VM")
        self.run_kayobe_playbook(parsed_args,
                                 _get_playbook_path("seed-vm-deprovision"))


class SeedHostConfigure(KollaAnsibleMixin, KayobeAnsibleMixin, VaultMixin,
                        Command):
    """Configure the seed node host OS and services.

    * Allocate IP addresses for all configured networks.
    * Add the host to SSH known hosts.
    * Configure a user account for use by kayobe for SSH access.
    * Optionally, create a virtualenv for remote target hosts.
    * Optionally, wipe unmounted disk partitions (--wipe-disks).
    * Configure user accounts, group associations, and authorised SSH keys.
    * Configure a PyPI mirror.
    * Configure Yum repos.
    * Disable SELinux.
    * Configure the host's network interfaces.
    * Set sysctl parameters.
    * Configure IP routing and source NAT.
    * Disable bootstrap interface configuration.
    * Configure NTP.
    * Optionally, configure software RAID arrays.
    * Configure LVM volumes.
    * Optionally, create a virtualenv for kolla-ansible.
    * Configure a user account for kolla-ansible.
    * Configure Docker engine.
    * Optionally, deploy a Docker Registry.
    """

    def get_parser(self, prog_name):
        parser = super(SeedHostConfigure, self).get_parser(prog_name)
        group = parser.add_argument_group("Host Configuration")
        group.add_argument("--wipe-disks", action='store_true',
                           help="wipe partition and LVM data from all disks "
                                "that are not mounted. Warning: this can "
                                "result in the loss of data")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Configuring seed host OS")

        # Query some kayobe ansible variables.
        # Explicitly request the dump-config tag to ensure this play runs even
        # if the user specified tags.
        hostvars = self.run_kayobe_config_dump(parsed_args, hosts="seed",
                                               tags="dump-config")
        if not hostvars:
            self.app.LOG.error("No hosts in the seed group")
            sys.exit(1)
        hostvars = list(hostvars.values())[0]
        ansible_user = hostvars.get("kayobe_ansible_user")
        if not ansible_user:
            self.app.LOG.error("Could not determine kayobe_ansible_user "
                               "variable for seed host")
            sys.exit(1)
        python_interpreter = hostvars.get("ansible_python_interpreter")
        kolla_target_venv = hostvars.get("kolla_ansible_target_venv")

        # Allocate IP addresses.
        playbooks = _build_playbook_list("ip-allocation")
        self.run_kayobe_playbooks(parsed_args, playbooks, limit="seed")

        # Run kayobe playbooks.
        playbooks = _build_playbook_list(
            "ssh-known-host", "kayobe-ansible-user",
            "pip", "kayobe-target-venv")
        if parsed_args.wipe_disks:
            playbooks += _build_playbook_list("wipe-disks")
        playbooks += _build_playbook_list(
            "users", "yum", "dnf", "dev-tools", "disable-selinux", "network",
            "sysctl", "ip-routing", "snat", "disable-glean", "ntp", "mdadm",
            "lvm", "docker-devicemapper")
        self.run_kayobe_playbooks(parsed_args, playbooks, limit="seed")

        self.generate_kolla_ansible_config(parsed_args, service_config=False)

        # Run kolla-ansible bootstrap-servers.
        # This command should be run as the kayobe ansible user because at this
        # point the kolla user may not exist.
        extra_vars = {"ansible_user": ansible_user}
        if python_interpreter:
            # Use the kayobe virtualenv, as this is the executing user.
            extra_vars["ansible_python_interpreter"] = python_interpreter
        elif kolla_target_venv:
            # Override the kolla-ansible virtualenv, use the system python
            # instead.
            extra_vars["ansible_python_interpreter"] = "/usr/bin/python"
        if kolla_target_venv:
            # Specify a virtualenv in which to install python packages.
            extra_vars["virtualenv"] = kolla_target_venv
        self.run_kolla_ansible_seed(parsed_args, "bootstrap-servers",
                                    extra_vars=extra_vars)

        # Re-run the Pip role after we've bootstrapped the Kolla user
        extra_vars = {}
        kolla_ansible_user = hostvars.get("kolla_ansible_user")
        extra_vars["pip_applicable_users"] = [kolla_ansible_user]

        # Run final kayobe playbooks.
        playbooks = _build_playbook_list(
            "pip", "kolla-target-venv", "kolla-host", "docker")
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars, limit="seed")

        # Optionally, deploy a Docker Registry.
        playbooks = _build_playbook_list("docker-registry")
        extra_vars = {"kayobe_action": "deploy"}
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars, limit="seed")


class SeedHostPackageUpdate(KayobeAnsibleMixin, VaultMixin, Command):
    """Update packages on the seed host."""

    def get_parser(self, prog_name):
        parser = super(SeedHostPackageUpdate, self).get_parser(prog_name)
        group = parser.add_argument_group("Host Package Updates")
        group.add_argument("--packages", required=True,
                           help="List of packages to update. Use '*' to "
                                "update all packages.")
        group.add_argument("--security", action='store_true',
                           help="Only install updates that have been marked "
                                "security related.")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Updating seed host packages")
        extra_vars = {
            "host_package_update_packages": parsed_args.packages,
            "host_package_update_security": parsed_args.security,
        }
        playbooks = _build_playbook_list("host-package-update")
        self.run_kayobe_playbooks(parsed_args, playbooks, limit="seed",
                                  extra_vars=extra_vars)


class SeedHostCommandRun(KayobeAnsibleMixin, VaultMixin, Command):
    """Run command on the seed host."""

    def get_parser(self, prog_name):
        parser = super(SeedHostCommandRun, self).get_parser(prog_name)
        group = parser.add_argument_group("Host Command Run")
        group.add_argument("--command", required=True,
                           help="Command to run (required).")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Run command on seed host")
        extra_vars = {
            "host_command_to_run": utils.escape_jinja(parsed_args.command)}
        playbooks = _build_playbook_list("host-command-run")
        self.run_kayobe_playbooks(parsed_args, playbooks, limit="seed",
                                  extra_vars=extra_vars)


class SeedHostUpgrade(KollaAnsibleMixin, KayobeAnsibleMixin, VaultMixin,
                      Command):
    """Upgrade the seed host services.

    Performs the changes necessary to make the host services suitable for the
    configured OpenStack release.
    """

    def take_action(self, parsed_args):
        self.app.LOG.debug("Upgrading seed host services")
        playbooks = _build_playbook_list(
            "kayobe-target-venv", "kolla-target-venv")
        self.run_kayobe_playbooks(parsed_args, playbooks, limit="seed")


class SeedServiceDeploy(KollaAnsibleMixin, KayobeAnsibleMixin, VaultMixin,
                        Command):
    """Deploy the seed services.

    * Configures kolla-ansible.
    * Configures the bifrost service.
    * Deploys the bifrost container using kolla-ansible.
    * Builds disk images for the overcloud hosts using Diskimage Builder (DIB).
    * Performs a workaround in the overcloud host image to fix resolv.conf.
    * Performs a workaround in the overcloud host image to update cloud-init
    * Configures ironic inspector introspection rules in the bifrost inspector
      service.
    * When enabled, configures a Bare Metal Provisioning (BMP) environment for
      Dell Force10 switches, hosted by the bifrost dnsmasq and nginx services.
    """

    def take_action(self, parsed_args):
        self.app.LOG.debug("Deploying seed services")
        self.generate_kolla_ansible_config(parsed_args, service_config=False,
                                           bifrost_config=True)

        self.run_kolla_ansible_seed(parsed_args, "deploy-bifrost")
        playbooks = _build_playbook_list(
            "overcloud-host-image-workaround-resolv",
            "overcloud-host-image-workaround-cloud-init",
            "seed-introspection-rules",
            "dell-switch-bmp")
        self.run_kayobe_playbooks(parsed_args, playbooks)


class SeedServiceUpgrade(KollaAnsibleMixin, KayobeAnsibleMixin, VaultMixin,
                         Command):
    """Upgrade the seed services.

    * Configures kolla-ansible.
    * Configures the bifrost service.
    * Prepares the bifrost service for an upgrade.
    * Deploys the bifrost container using kolla-ansible.
    * Builds disk images for the overcloud hosts using Diskimage Builder (DIB).
    * Performs a workaround in the overcloud host image to fix resolv.conf.
    * Performs a workaround in the overcloud host image to update cloud-init
    * Configures ironic inspector introspection rules in the bifrost inspector
      service.
    * When enabled, configures a Bare Metal Provisioning (BMP) environment for
      Dell Force10 switches, hosted by the bifrost dnsmasq and nginx services.
    """

    def take_action(self, parsed_args):
        self.app.LOG.debug("Upgrading seed services")
        self.generate_kolla_ansible_config(parsed_args, service_config=False,
                                           bifrost_config=True)

        playbooks = _build_playbook_list(
            "seed-service-upgrade-prep")
        self.run_kayobe_playbooks(parsed_args, playbooks)
        self.run_kolla_ansible_seed(parsed_args, "upgrade-bifrost")
        playbooks = _build_playbook_list(
            "overcloud-host-image-workaround-resolv",
            "overcloud-host-image-workaround-cloud-init",
            "seed-introspection-rules",
            "dell-switch-bmp")
        self.run_kayobe_playbooks(parsed_args, playbooks)


class SeedContainerImageBuild(KayobeAnsibleMixin, VaultMixin, Command):
    """Build the seed container images.

    * Installs and configures kolla build environment on the seed.
    * Builds container images for the seed services.
    """

    def get_parser(self, prog_name):
        parser = super(SeedContainerImageBuild, self).get_parser(
            prog_name)
        group = parser.add_argument_group("Container Image Build")
        group.add_argument("--push", action="store_true",
                           help="whether to push images to a registry after "
                                "building")
        group.add_argument("regex", nargs='*',
                           help="regular expression matching names of images "
                                "to build. Builds all images if unspecified")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Building seed container images")
        playbooks = _build_playbook_list(
            "container-image-builders-check", "kolla-build",
            "container-image-build")
        extra_vars = {"push_images": parsed_args.push}
        if parsed_args.regex:
            regexes = " ".join(parsed_args.regex)
            extra_vars["container_image_regexes"] = regexes
        else:
            extra_vars["container_image_sets"] = (
                "{{ seed_container_image_sets }}")
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars)


class SeedDeploymentImageBuild(KayobeAnsibleMixin, VaultMixin, Command):
    """Build the seed deployment kernel and ramdisk images.

    Builds Ironic Python Agent (IPA) deployment images using Diskimage Builder
    (DIB) for use when provisioning and inspecting the overcloud hosts.
    """

    def get_parser(self, prog_name):
        parser = super(SeedDeploymentImageBuild, self).get_parser(
            prog_name)
        group = parser.add_argument_group("Deployment Image Build")
        group.add_argument("--force-rebuild", action="store_true",
                           help="whether to force rebuilding the images")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Building seed deployment images")
        playbooks = _build_playbook_list("seed-ipa-build")
        extra_vars = {}
        if parsed_args.force_rebuild:
            extra_vars["ipa_image_force_rebuild"] = True
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars)


class OvercloudInventoryDiscover(KayobeAnsibleMixin, VaultMixin, Command):
    """Discover the overcloud inventory from the seed's Ironic service.

    * Query the ironic inventory on the seed, and use this to populate kayobe's
      ansible inventory.
    * Allocate IP addresses for all configured networks.
    * Update the kolla-ansible configuration for the new overcloud hosts.
    """

    def take_action(self, parsed_args):
        self.app.LOG.debug("Discovering overcloud inventory")
        # Run the inventory discovery playbook separately, else the discovered
        # hosts will not be present in the following playbooks in which they
        # are used to populate other inventories.
        self.run_kayobe_playbook(parsed_args,
                                 _get_playbook_path(
                                     "overcloud-inventory-discover"))
        # If necessary, allocate IP addresses for the discovered hosts.
        self.run_kayobe_playbook(parsed_args,
                                 _get_playbook_path("ip-allocation"))
        # Now populate the Kolla Ansible inventory.
        self.generate_kolla_ansible_config(parsed_args, service_config=False)


class OvercloudIntrospectionDataSave(KayobeAnsibleMixin, VaultMixin, Command):
    """Save hardware introspection data for the overcloud.

    Save hardware introspection data from the seed's ironic inspector service
    to the Ansible control host.
    """

    def get_parser(self, prog_name):
        parser = super(OvercloudIntrospectionDataSave, self).get_parser(
            prog_name)
        group = parser.add_argument_group("Introspection data")
        # Defaults for these are applied in the playbook.
        group.add_argument("--output-dir", type=str,
                           help="Path to directory in which to save "
                                "introspection data. Default: "
                                "$PWD/overcloud-introspection-data")
        group.add_argument("--output-format", type=str,
                           help="Format in which to save output data. One of "
                                "JSON or YAML. Default: JSON",
                           choices=["JSON", "YAML"])
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Saving introspection data")
        extra_vars = {}
        if parsed_args.output_dir:
            extra_vars['output_dir'] = parsed_args.output_dir
        if parsed_args.output_format:
            extra_vars['output_format'] = parsed_args.output_format
        playbooks = _build_playbook_list("kolla-bifrost-hostvars",
                                         "overcloud-introspection-data-save")
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars)


class OvercloudBIOSRAIDConfigure(KayobeAnsibleMixin, VaultMixin, Command):
    """Configure BIOS and RAID for the overcloud hosts."""

    def take_action(self, parsed_args):
        self.app.LOG.debug("Configure overcloud BIOS and RAID")
        playbooks = _build_playbook_list("overcloud-bios-raid")
        self.run_kayobe_playbooks(parsed_args, playbooks)


class OvercloudHardwareInspect(KayobeAnsibleMixin, VaultMixin, Command):
    """Inspect the overcloud hardware using ironic inspector.

    Perform hardware inspection of existing ironic nodes in the seed's
    ironic inventory.
    """

    def take_action(self, parsed_args):
        self.app.LOG.debug("Inspecting overcloud")
        playbooks = _build_playbook_list("kolla-bifrost-hostvars",
                                         "overcloud-hardware-inspect")
        self.run_kayobe_playbooks(parsed_args, playbooks)


class OvercloudProvision(KayobeAnsibleMixin, VaultMixin, Command):
    """Provision the overcloud.

    Provision the overcloud hosts using the seed host's bifrost service. This
    will image the hosts and perform some minimal network configuration using
    glean/simple-init.
    """

    def take_action(self, parsed_args):
        self.app.LOG.debug("Provisioning overcloud")
        playbooks = _build_playbook_list("kolla-bifrost-hostvars",
                                         "overcloud-provision")
        self.run_kayobe_playbooks(parsed_args, playbooks)


class OvercloudDeprovision(KayobeAnsibleMixin, VaultMixin, Command):
    """Deprovision the overcloud.

    Deprovision the overcloud hosts using the seed host's bifrost service. This
    will clear the instance state of the nodes from the seed's ironic service
    and power them off.
    """

    def take_action(self, parsed_args):
        self.app.LOG.debug("Deprovisioning overcloud")
        playbooks = _build_playbook_list("overcloud-deprovision")
        self.run_kayobe_playbooks(parsed_args, playbooks)


class OvercloudHostConfigure(KollaAnsibleMixin, KayobeAnsibleMixin, VaultMixin,
                             Command):
    """Configure the overcloud host OS and services.

    * Allocate IP addresses for all configured networks.
    * Add the host to SSH known hosts.
    * Configure a user account for use by kayobe for SSH access.
    * Optionally, create a virtualenv for remote target hosts.
    * Optionally, wipe unmounted disk partitions (--wipe-disks).
    * Configure user accounts, group associations, and authorised SSH keys.
    * Configure a PyPI mirror.
    * Configure Yum repos.
    * Disable SELinux.
    * Configure the host's network interfaces.
    * Set sysctl parameters.
    * Disable bootstrap interface configuration.
    * Configure NTP.
    * Optionally, configure software RAID arrays.
    * Configure LVM volumes.
    * Optionally, create a virtualenv for kolla-ansible.
    * Configure a user account for kolla-ansible.
    * Configure Docker engine.
    """

    def get_parser(self, prog_name):
        parser = super(OvercloudHostConfigure, self).get_parser(prog_name)
        group = parser.add_argument_group("Host Configuration")
        group.add_argument("--wipe-disks", action='store_true',
                           help="wipe partition and LVM data from all disks "
                                "that are not mounted. Warning: this can "
                                "result in the loss of data")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Configuring overcloud host OS")

        # Query some kayobe ansible variables.
        # Explicitly request the dump-config tag to ensure this play runs even
        # if the user specified tags.
        hostvars = self.run_kayobe_config_dump(parsed_args, hosts="overcloud",
                                               tags="dump-config")
        if not hostvars:
            self.app.LOG.error("No hosts in the overcloud group")
            sys.exit(1)
        hostvars = list(hostvars.values())[0]
        ansible_user = hostvars.get("kayobe_ansible_user")
        if not ansible_user:
            self.app.LOG.error("Could not determine kayobe_ansible_user "
                               "variable for overcloud hosts")
            sys.exit(1)
        python_interpreter = hostvars.get("ansible_python_interpreter")
        kolla_target_venv = hostvars.get("kolla_ansible_target_venv")

        # Allocate IP addresses.
        playbooks = _build_playbook_list("ip-allocation")
        self.run_kayobe_playbooks(parsed_args, playbooks, limit="overcloud")

        # Kayobe playbooks.
        playbooks = _build_playbook_list(
            "ssh-known-host", "kayobe-ansible-user",
            "pip", "kayobe-target-venv")
        if parsed_args.wipe_disks:
            playbooks += _build_playbook_list("wipe-disks")
        playbooks += _build_playbook_list(
            "users", "yum", "dnf", "dev-tools", "disable-selinux", "network",
            "sysctl", "disable-glean", "disable-cloud-init", "ntp", "mdadm",
            "lvm", "docker-devicemapper")
        self.run_kayobe_playbooks(parsed_args, playbooks, limit="overcloud")

        self.generate_kolla_ansible_config(parsed_args, service_config=False)

        # Kolla-ansible bootstrap-servers.
        # The kolla-ansible bootstrap-servers command should be run as the
        # kayobe ansible user because at this point the kolla user may not
        # exist.
        extra_vars = {"ansible_user": ansible_user}
        if python_interpreter:
            # Use the kayobe virtualenv, as this is the executing user.
            extra_vars["ansible_python_interpreter"] = python_interpreter
        elif kolla_target_venv:
            # Override the kolla-ansible virtualenv, use the system python
            # instead.
            extra_vars["ansible_python_interpreter"] = "/usr/bin/python"
        if kolla_target_venv:
            # Specify a virtualenv in which to install python packages.
            extra_vars["virtualenv"] = kolla_target_venv
        self.run_kolla_ansible_overcloud(parsed_args, "bootstrap-servers",
                                         extra_vars=extra_vars)

        # Re-run the Pip role after we've bootstrapped the Kolla user
        extra_vars = {}
        kolla_ansible_user = hostvars.get("kolla_ansible_user")
        extra_vars["pip_applicable_users"] = [kolla_ansible_user]

        # Further kayobe playbooks.
        playbooks = _build_playbook_list(
            "pip", "kolla-target-venv", "kolla-host",
            "docker", "ceph-block-devices", "swift-block-devices")
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars, limit="overcloud")


class OvercloudHostPackageUpdate(KayobeAnsibleMixin, VaultMixin, Command):
    """Update packages on the overcloud hosts."""

    def get_parser(self, prog_name):
        parser = super(OvercloudHostPackageUpdate, self).get_parser(prog_name)
        group = parser.add_argument_group("Host Package Updates")
        group.add_argument("--packages", required=True,
                           help="List of packages to update. Use '*' to "
                                "update all packages.")
        group.add_argument("--security", action='store_true',
                           help="Only install updates that have been marked "
                                "security related.")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Updating overcloud host packages")
        extra_vars = {
            "host_package_update_packages": parsed_args.packages,
            "host_package_update_security": parsed_args.security,
        }
        playbooks = _build_playbook_list("host-package-update")
        self.run_kayobe_playbooks(parsed_args, playbooks, limit="overcloud",
                                  extra_vars=extra_vars)


class OvercloudHostCommandRun(KayobeAnsibleMixin, VaultMixin, Command):
    """Run command on the overcloud host."""

    def get_parser(self, prog_name):
        parser = super(OvercloudHostCommandRun, self).get_parser(prog_name)
        group = parser.add_argument_group("Host Command Run")
        group.add_argument("--command", required=True,
                           help="Command to run (required).")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Run command on overcloud host")
        extra_vars = {
            "host_command_to_run": utils.escape_jinja(parsed_args.command)}
        playbooks = _build_playbook_list("host-command-run")
        self.run_kayobe_playbooks(parsed_args, playbooks, limit="overcloud",
                                  extra_vars=extra_vars)


class OvercloudHostUpgrade(KayobeAnsibleMixin, VaultMixin, Command):
    """Upgrade the overcloud host services.

    Performs the changes necessary to make the host services suitable for the
    configured OpenStack release.
    """

    def take_action(self, parsed_args):
        self.app.LOG.debug("Upgrading overcloud host services")
        playbooks = _build_playbook_list(
            "kayobe-target-venv", "kolla-target-venv",
            "overcloud-docker-sdk-upgrade", "overcloud-etc-hosts-fixup")
        self.run_kayobe_playbooks(parsed_args, playbooks, limit="overcloud")


class OvercloudDatabaseBackup(KollaAnsibleMixin, VaultMixin, Command):
    """Backup the overcloud database."""

    def get_parser(self, prog_name):
        parser = super(OvercloudDatabaseBackup, self).get_parser(prog_name)
        group = parser.add_argument_group("Overcloud Database Backup")
        group.add_argument("--incremental", action='store_true',
                           help="Whether to perform an incremental database "
                                "backup. Default is false.")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Performing overcloud database backup")
        extra_args = []
        if parsed_args.incremental:
            extra_args.append('--incremental')
        self.run_kolla_ansible_overcloud(parsed_args, "mariadb_backup",
                                         extra_args=extra_args)


class OvercloudDatabaseRecover(KollaAnsibleMixin, VaultMixin, Command):
    """Recover the overcloud database."""

    def get_parser(self, prog_name):
        parser = super(OvercloudDatabaseRecover, self).get_parser(prog_name)
        group = parser.add_argument_group("Overcloud Database Recovery")
        group.add_argument("--force-recovery-host",
                           help="Name of a host to use to perform the "
                                "recovery. By default kolla-ansible will "
                                "automatically determine which host to use, "
                                "and this option should not be used.")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Performing overcloud database recovery")
        extra_vars = {}
        if parsed_args.force_recovery_host:
            extra_vars['mariadb_recover_inventory_name'] = (
                parsed_args.force_recovery_host)
        self.run_kolla_ansible_overcloud(parsed_args, "mariadb_recovery",
                                         extra_vars=extra_vars)


class OvercloudServiceConfigurationGenerate(KayobeAnsibleMixin,
                                            KollaAnsibleMixin, VaultMixin,
                                            Command):
    """Generate the overcloud service configuration files.

    Generates kolla-ansible configuration for the OpenStack control plane
    services, without pushing that configuration to the running containers.
    This can be used to generate a candidate configuration set for comparison
    with the existing configuration. It is recommended to use a directory other
    than /etc/kolla for --node-config-dir, to ensure that the running
    containers are not affected.
    """

    def get_parser(self, prog_name):
        parser = super(OvercloudServiceConfigurationGenerate,
                       self).get_parser(prog_name)
        group = parser.add_argument_group("Service Configuration")
        group.add_argument("--node-config-dir", required=True,
                           help="the directory to store the config files on "
                                "the remote node (required)")
        group.add_argument("--skip-prechecks", action='store_true',
                           help="skip the kolla-ansible prechecks command")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Generating overcloud service configuration")

        # First prepare configuration.
        self.generate_kolla_ansible_config(parsed_args)

        # Run kolla-ansible prechecks before deployment.
        if not parsed_args.skip_prechecks:
            self.run_kolla_ansible_overcloud(parsed_args, "prechecks")

        # Generate the configuration.
        extra_vars = {}
        if parsed_args.node_config_dir:
            extra_vars["node_config_directory"] = parsed_args.node_config_dir
        self.run_kolla_ansible_overcloud(parsed_args, "genconfig",
                                         extra_vars=extra_vars)


class OvercloudServiceConfigurationSave(KayobeAnsibleMixin, VaultMixin,
                                        Command):
    """Gather and save the overcloud service configuration files.

    This can be used to collect the running configuration for inspection (the
    default) or a candidate configuration generated via 'kayobe overcloud
    service configuration generate', for comparision with another configuration
    set.
    """

    def get_parser(self, prog_name):
        parser = super(OvercloudServiceConfigurationSave, self).get_parser(
            prog_name)
        group = parser.add_argument_group("Service configuration")
        group.add_argument("--exclude",
                           help="optional comma-separated list of patterns "
                                "matching filenames to exclude")
        group.add_argument("--include",
                           help="optional comma-separated list of patterns "
                                "matching filenames to include")
        group.add_argument("--node-config-dir",
                           help="the directory to store the config files on "
                                "the remote node (default /etc/kolla)")
        group.add_argument("--output-dir",
                           help="path to a directory in which to save "
                                "configuration")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Saving overcloud service configuration")
        playbooks = _build_playbook_list("overcloud-service-config-save")
        extra_vars = {}
        if parsed_args.exclude:
            extra_vars["exclude_patterns"] = parsed_args.exclude
        if parsed_args.include:
            extra_vars["include_patterns"] = parsed_args.include
        if parsed_args.output_dir:
            extra_vars["config_save_path"] = parsed_args.output_dir
        if parsed_args.node_config_dir:
            extra_vars["node_config_directory"] = parsed_args.node_config_dir
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars)


class OvercloudServiceDeploy(KollaAnsibleMixin, KayobeAnsibleMixin, VaultMixin,
                             Command):
    """Deploy the overcloud services.

    * Configure kolla-ansible.
    * Configure overcloud services in kolla-ansible.
    * Perform kolla-ansible prechecks to verify the system state for
      deployment.
    * Perform a kolla-ansible deployment of the overcloud services.
    * Configure and deploy kayobe extra services.
    * Generate openrc files for the admin user.

    This can be used in conjunction with the --tags and --kolla-tags arguments
    to deploy specific services.
    """

    def get_parser(self, prog_name):
        parser = super(OvercloudServiceDeploy, self).get_parser(prog_name)
        group = parser.add_argument_group("Service Deployment")
        group.add_argument("--skip-prechecks", action='store_true',
                           help="skip the kolla-ansible prechecks command")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Deploying overcloud services")

        # First prepare configuration.
        self.generate_kolla_ansible_config(parsed_args)

        # Run kolla-ansible prechecks before deployment.
        if not parsed_args.skip_prechecks:
            self.run_kolla_ansible_overcloud(parsed_args, "prechecks")

        # Perform the kolla-ansible deployment.
        self.run_kolla_ansible_overcloud(parsed_args, "deploy")

        # Deploy kayobe extra services.
        playbooks = _build_playbook_list("overcloud-extras")
        extra_vars = {"kayobe_action": "deploy"}
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars, limit="overcloud")

        # Post-deployment configuration.
        self.run_kolla_ansible_overcloud(parsed_args, "post-deploy")
        # Create an environment file for accessing the public API as the admin
        # user.
        playbooks = _build_playbook_list("public-openrc")
        self.run_kayobe_playbooks(parsed_args, playbooks, ignore_limit=True)


class OvercloudServiceDeployContainers(KollaAnsibleMixin, KayobeAnsibleMixin,
                                       VaultMixin, Command):
    """Deploy the overcloud services without updating configuration.

    * Configure kolla-ansible.
    * Configure overcloud services in kolla-ansible.
    * Perform kolla-ansible prechecks to verify the system state for
      deployment.
    * Perform a kolla-ansible deployment of the overcloud service containers.
    * Configure and deploy kayobe extra services.

    This can be used in conjunction with the --tags and --kolla-tags arguments
    to deploy specific services.
    """

    def get_parser(self, prog_name):
        parser = super(OvercloudServiceDeployContainers, self).get_parser(
            prog_name)
        group = parser.add_argument_group("Service Deployment")
        group.add_argument("--skip-prechecks", action='store_true',
                           help="skip the kolla-ansible prechecks command")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Deploying overcloud services (containers only)")

        # First prepare configuration.
        self.generate_kolla_ansible_config(parsed_args)

        # Run kolla-ansible prechecks before deployment.
        if not parsed_args.skip_prechecks:
            self.run_kolla_ansible_overcloud(parsed_args, "prechecks")

        # Perform the kolla-ansible deployment.
        self.run_kolla_ansible_overcloud(parsed_args, "deploy-containers")

        # Deploy kayobe extra services.
        playbooks = _build_playbook_list("overcloud-extras")
        extra_vars = {"kayobe_action": "deploy"}
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars, limit="overcloud")


class OvercloudServiceReconfigure(KollaAnsibleMixin, KayobeAnsibleMixin,
                                  VaultMixin, Command):
    """Reconfigure the overcloud services.

    * Configure kolla-ansible.
    * Configure overcloud services in kolla-ansible.
    * Perform kolla-ansible prechecks to verify the system state for
      deployment.
    * Perform a kolla-ansible reconfiguration of the overcloud services.
    * Configure and deploy kayobe extra services.
    * Generate openrc files for the admin user.

    This can be used in conjunction with the --tags and --kolla-tags arguments
    to reconfigure specific services.
    """

    def get_parser(self, prog_name):
        parser = super(OvercloudServiceReconfigure, self).get_parser(prog_name)
        group = parser.add_argument_group("Service Reconfiguration")
        group.add_argument("--skip-prechecks", action='store_true',
                           help="skip the kolla-ansible prechecks command")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Reconfiguring overcloud services")

        # First prepare configuration.
        self.generate_kolla_ansible_config(parsed_args)

        # Run kolla-ansible prechecks before reconfiguration.
        if not parsed_args.skip_prechecks:
            self.run_kolla_ansible_overcloud(parsed_args, "prechecks")

        # Perform the kolla-ansible reconfiguration.
        self.run_kolla_ansible_overcloud(parsed_args, "reconfigure")

        # Reconfigure kayobe extra services.
        playbooks = _build_playbook_list("overcloud-extras")
        extra_vars = {"kayobe_action": "reconfigure"}
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars, limit="overcloud")

        # Post-deployment configuration.
        self.run_kolla_ansible_overcloud(parsed_args, "post-deploy")
        # Create an environment file for accessing the public API as the admin
        # user.
        playbooks = _build_playbook_list("public-openrc")
        self.run_kayobe_playbooks(parsed_args, playbooks, ignore_limit=True)


class OvercloudServiceStop(KollaAnsibleMixin, KayobeAnsibleMixin, VaultMixin,
                           Command):
    """Stop the overcloud services.

    * Configure kolla-ansible.
    * Configure overcloud services in kolla-ansible.
    * Perform a kolla-ansible stop of the overcloud services.
    * Stop kayobe extra services.

    This can be used in conjunction with the --tags and --kolla-tags arguments
    to stop specific services.
    """

    def get_parser(self, prog_name):
        parser = super(OvercloudServiceStop, self).get_parser(prog_name)
        group = parser.add_argument_group("Services")
        group.add_argument("--yes-i-really-really-mean-it",
                           action='store_true',
                           help="confirm that you understand that this will "
                                "stop running services.")
        return parser

    def take_action(self, parsed_args):
        if not parsed_args.yes_i_really_really_mean_it:
            self.app.LOG.error("This will stop running services. Specify "
                               "--yes-i-really-really-mean-it to confirm that "
                               "you understand this.")
            sys.exit(1)

        self.app.LOG.debug("Stopping overcloud services")

        # First prepare configuration.
        self.generate_kolla_ansible_config(parsed_args)

        # Perform the kolla-ansible stop.
        extra_args = ["--yes-i-really-really-mean-it"]
        self.run_kolla_ansible_overcloud(parsed_args, "stop",
                                         extra_args=extra_args)

        # Stop kayobe extra services.
        playbooks = _build_playbook_list("overcloud-extras")
        extra_vars = {"kayobe_action": "stop"}
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars, limit="overcloud")


class OvercloudServiceUpgrade(KollaAnsibleMixin, KayobeAnsibleMixin,
                              VaultMixin, Command):
    """Upgrade the overcloud services.

    * Configure kolla-ansible.
    * Configure overcloud services in kolla-ansible.
    * Perform kolla-ansible prechecks to verify the system state for
      deployment.
    * Perform a kolla-ansible upgrade of the overcloud services.
    * Configure and upgrade kayobe extra services.

    This can be used in conjunction with the --tags and --kolla-tags arguments
    to upgrade specific services.
    """

    def get_parser(self, prog_name):
        parser = super(OvercloudServiceUpgrade, self).get_parser(prog_name)
        group = parser.add_argument_group("Service Upgrade")
        group.add_argument("--skip-prechecks", action='store_true',
                           help="skip the kolla-ansible prechecks command")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Upgrading overcloud services")

        # First prepare configuration.
        self.generate_kolla_ansible_config(parsed_args, install=True)

        # Run kolla-ansible prechecks before upgrade.
        if not parsed_args.skip_prechecks:
            self.run_kolla_ansible_overcloud(parsed_args, "prechecks")

        # Perform the kolla-ansible upgrade.
        self.run_kolla_ansible_overcloud(parsed_args, "upgrade")

        # Upgrade kayobe extra services.
        playbooks = _build_playbook_list("overcloud-extras")
        extra_vars = {"kayobe_action": "upgrade"}
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars, limit="overcloud")


class OvercloudServiceDestroy(KollaAnsibleMixin, KayobeAnsibleMixin,
                              VaultMixin, Command):
    """Destroy the overcloud services.

    Permanently destroy the overcloud containers, container images, and
    container volumes.
    """

    def get_parser(self, prog_name):
        parser = super(OvercloudServiceDestroy, self).get_parser(prog_name)
        group = parser.add_argument_group("Services")
        group.add_argument("--yes-i-really-really-mean-it",
                           action='store_true',
                           help="confirm that you understand that this will "
                                "permantently destroy all services and data.")
        return parser

    def take_action(self, parsed_args):
        if not parsed_args.yes_i_really_really_mean_it:
            self.app.LOG.error("This will permanently destroy all services "
                               "and data. Specify "
                               "--yes-i-really-really-mean-it to confirm that "
                               "you understand this.")
            sys.exit(1)

        self.app.LOG.debug("Destroying overcloud services")

        # First prepare configuration.
        self.generate_kolla_ansible_config(parsed_args)

        # Run kolla-ansible destroy.
        extra_args = ["--yes-i-really-really-mean-it"]
        self.run_kolla_ansible_overcloud(parsed_args, "destroy",
                                         extra_args=extra_args)

        # Destroy kayobe extra services.
        playbooks = _build_playbook_list("overcloud-extras")
        extra_vars = {"kayobe_action": "destroy"}
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars, limit="overcloud")


class OvercloudContainerImagePull(KayobeAnsibleMixin, KollaAnsibleMixin,
                                  VaultMixin, Command):
    """Pull the overcloud container images from a registry."""

    def take_action(self, parsed_args):
        self.app.LOG.debug("Pulling overcloud container images")

        # First prepare configuration.
        self.generate_kolla_ansible_config(parsed_args, service_config=False)

        # Pull updated kolla container images.
        self.run_kolla_ansible_overcloud(parsed_args, "pull")

        # Pull container images for kayobe extra services.
        playbooks = _build_playbook_list("overcloud-extras")
        extra_vars = {"kayobe_action": "pull"}
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars, limit="overcloud")


class OvercloudContainerImageBuild(KayobeAnsibleMixin, VaultMixin, Command):
    """Build the overcloud container images."""

    def get_parser(self, prog_name):
        parser = super(OvercloudContainerImageBuild, self).get_parser(
            prog_name)
        group = parser.add_argument_group("Container Image Build")
        group.add_argument("--push", action="store_true",
                           help="whether to push images to a registry after "
                                "building")
        group.add_argument("regex", nargs='*',
                           help="regular expression matching names of images "
                                "to build. Builds all images if unspecified")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Building overcloud container images")
        playbooks = _build_playbook_list(
            "container-image-builders-check", "kolla-build",
            "container-image-build")
        extra_vars = {"push_images": parsed_args.push}
        if parsed_args.regex:
            regexes = " ".join(parsed_args.regex)
            extra_vars["container_image_regexes"] = regexes
        else:
            extra_vars["container_image_sets"] = (
                "{{ overcloud_container_image_sets }}")
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars)


class OvercloudDeploymentImageBuild(KayobeAnsibleMixin, VaultMixin, Command):
    """Build the overcloud deployment kernel and ramdisk images."""

    def get_parser(self, prog_name):
        parser = super(OvercloudDeploymentImageBuild, self).get_parser(
            prog_name)
        group = parser.add_argument_group("Deployment Image Build")
        group.add_argument("--force-rebuild", action="store_true",
                           help="whether to force rebuilding the images")
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug("Building overcloud deployment images")
        playbooks = _build_playbook_list("overcloud-ipa-build")
        extra_vars = {}
        if parsed_args.force_rebuild:
            extra_vars["ipa_image_force_rebuild"] = True
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars)


class OvercloudPostConfigure(KayobeAnsibleMixin, VaultMixin, Command):
    """Perform post-deployment configuration.

    * Register Ironic Python Agent (IPA) deployment images using Diskimage
      Builder (DIB), if building deployment images locally.
    * Register ironic inspector introspection rules with the overcloud
      inspector service.
    * Register a provisioning network with glance.
    * Configure Grafana for control plane.
    * Configure serial consoles for the ironic nodes
    """

    def take_action(self, parsed_args):
        self.app.LOG.debug("Performing post-deployment configuration")
        playbooks = _build_playbook_list(
            "overcloud-ipa-images", "overcloud-introspection-rules",
            "overcloud-introspection-rules-dell-lldp-workaround",
            "provision-net", "overcloud-grafana-configure",
            "baremetal-compute-serial-console-post-config")
        self.run_kayobe_playbooks(parsed_args, playbooks)


class OvercloudSwiftRingsGenerate(KayobeAnsibleMixin, VaultMixin, Command):
    """Generate Swift rings."""

    def take_action(self, parsed_args):
        self.app.LOG.debug("Generating Swift rings")
        playbooks = _build_playbook_list("swift-rings")
        self.run_kayobe_playbooks(parsed_args, playbooks)


class NetworkConnectivityCheck(KayobeAnsibleMixin, VaultMixin, Command):
    """Check network connectivity between hosts in the control plane.

    Checks for access to an external IP address, an external hostname, any
    configured gateways, and between hosts on the same subnets. The MTU of
    each network is validated by sending ping packets of maximum size.
    """

    def take_action(self, parsed_args):
        self.app.LOG.debug("Performing network connectivity check")
        playbooks = _build_playbook_list("network-connectivity")
        self.run_kayobe_playbooks(parsed_args, playbooks)


class BaremetalComputeInspect(KayobeAnsibleMixin, VaultMixin, Command):
    """Perform hardware inspection on baremetal compute nodes."""

    def take_action(self, parsed_args):
        self.app.LOG.debug("Performing hardware inspection on baremetal "
                           "compute nodes")
        playbooks = _build_playbook_list("baremetal-compute-inspect")
        self.run_kayobe_playbooks(parsed_args, playbooks)


class BaremetalComputeManage(KayobeAnsibleMixin, VaultMixin, Command):
    """Put baremetal compute nodes into the manageable provision state."""

    def take_action(self, parsed_args):
        self.app.LOG.debug("Making baremetal compute nodes manageable")
        playbooks = _build_playbook_list("baremetal-compute-manage")
        self.run_kayobe_playbooks(parsed_args, playbooks)


class BaremetalComputeProvide(KayobeAnsibleMixin, VaultMixin, Command):
    """Put baremetal compute nodes into the available provision state."""

    def take_action(self, parsed_args):
        self.app.LOG.debug("Making baremetal compute nodes available")
        playbooks = _build_playbook_list("baremetal-compute-provide")
        self.run_kayobe_playbooks(parsed_args, playbooks)


class BaremetalComputeRename(KayobeAnsibleMixin, VaultMixin, Command):
    """Rename baremetal compute nodes to match inventory hostname"""

    def take_action(self, parsed_args):
        self.app.LOG.debug("Renaming baremetal compute nodes")
        playbooks = _build_playbook_list("baremetal-compute-rename")
        self.run_kayobe_playbooks(parsed_args, playbooks)


class BaremetalComputeSerialConsoleBase(KayobeAnsibleMixin, VaultMixin,
                                        Command):

    """Base class for the baremetal serial console commands"""

    @staticmethod
    def process_limit(parsed_args, extra_vars):
        if parsed_args.baremetal_compute_limit:
            extra_vars["console_compute_node_limit"] = (
                parsed_args.baremetal_compute_limit
            )

    def get_parser(self, prog_name):
        parser = super(BaremetalComputeSerialConsoleBase, self).get_parser(
            prog_name)
        group = parser.add_argument_group("Baremetal Serial Consoles")
        group.add_argument("--baremetal-compute-limit",
                           help="Limit the change to the hosts specified in "
                                "this limit"
                           )
        return parser


class BaremetalComputeSerialConsoleEnable(BaremetalComputeSerialConsoleBase):
    """Enable Serial Console for Baremetal Compute Nodes"""

    def take_action(self, parsed_args):
        self.app.LOG.debug("Enabling serial console for ironic nodes")
        extra_vars = {}
        BaremetalComputeSerialConsoleBase.process_limit(parsed_args,
                                                        extra_vars)
        extra_vars["cmd"] = "enable"
        playbooks = _build_playbook_list("baremetal-compute-serial-console")
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars)


class BaremetalComputeSerialConsoleDisable(BaremetalComputeSerialConsoleBase):
    """Disable Serial Console for Baremetal Compute Nodes"""

    def take_action(self, parsed_args):
        self.app.LOG.debug("Disable serial console for ironic nodes")
        extra_vars = {}
        BaremetalComputeSerialConsoleBase.process_limit(parsed_args,
                                                        extra_vars)
        extra_vars["cmd"] = "disable"
        playbooks = _build_playbook_list("baremetal-compute-serial-console")
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars)


class BaremetalComputeUpdateDeploymentImage(KayobeAnsibleMixin, VaultMixin,
                                            Command):
    """Update the Ironic nodes to use the new  kernel and ramdisk images."""

    def get_parser(self, prog_name):
        parser = super(BaremetalComputeUpdateDeploymentImage, self).get_parser(
            prog_name)
        group = parser.add_argument_group("Baremetal Compute Update")
        group.add_argument("--baremetal-compute-limit",
                           help="Limit the upgrade to the hosts specified in "
                                "this limit"
                           )
        return parser

    def take_action(self, parsed_args):
        self.app.LOG.debug(
            "Upgrading the ironic nodes to use the latest  deployment images")
        playbooks = _build_playbook_list("overcloud-ipa-images")
        extra_vars = {}
        extra_vars["ipa_images_update_ironic_nodes"] = True
        if parsed_args.baremetal_compute_limit:
            extra_vars["ipa_images_compute_node_limit"] = (
                parsed_args.baremetal_compute_limit
            )
        self.run_kayobe_playbooks(parsed_args, playbooks,
                                  extra_vars=extra_vars)
