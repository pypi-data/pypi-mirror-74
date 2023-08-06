===========
KloudBuster
===========

KloudBuster Image
Contains all the packages and files needed to run a universal KloudBuster VM
The same image can run using one of the following roles (Assigned from the user-data python program):

- Server VM for a given traffic type (e.g. http server or tcp/udp server)
- Client VM for a given traffic type (e.g. http client or tcp/udp client)
- Redis server (only 1 instance in the client cloud)

VMs are launched using cloud config and can be access with ssh:

- username: cloud-user
- no password, use key pairs to create the VM
