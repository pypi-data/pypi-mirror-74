from cleo import Command
from cleo import Application

from . import HomeServerSetup


class MainCommand(Command):
    """Installs bacchus.

    Requires

    - Valid DNS hostname registered in a supported provider
    - NAT or direct exposure of the given machine's openvpn port (1194)

    install
        {dns-domain? : Domain (FQDN) for virtualhosts}
        {username? : Nextcloud first user's username}
        {password? : Nextcloud first user's password}
        {dns-key? : DNS Provider (ghandi) API key}
        {iface? : (Optional) Main network interface name}
        {service? : (Optional) Set up only one service}
    """
    def handle(self):
        """Handle command"""
        setup = HomeServerSetup(domain=self.argument('dns-domain'),
                                nextcloud_username=self.argument('username'),
                                nextcloud_password=self.argument('password'),
                                iface=self.argument('iface'),
                                dns_api_key=self.argument('dns'))

        setup.configure(self.argument('service'))


def main():
    application = Application()
    application.add(MainCommand())
    application.run()
