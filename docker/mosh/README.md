
(Programming with Mosh)[https://www.youtube.com/c/programmingwithmosh]

(Docker Tutorial)[https://www.youtube.com/watch?v=pTFZFxd4hOI]

Long time user of XAMPP, MAMP for general LAMP stack development but it's time to move over to the new kid on the block - (Docker)[https://www.docker.com/get-started/], for containerized apps.

### Outline
- What is Docker?
- Virtual Machines vs Containers
- Architecture of Docker
- Installing Docker
- Development Workflow

### Reasons
- One or files missing while deployed
- Target machine software version mismatch
- Different config settings 

Build -> run -> ship

#### Dependency management

``` $ docker-compose up ```

``` $ docker-compose down --rmi all ```

### Virtual Machine vs Container 

#### Virtual Machine (Hypervisor), VirtualBox, VMware, Hyper-v (Windows only)
- run applications in isolations
- each VM needs a full blown OS
- slow to start
- resource intensive

#### Container - An isolated environment for running an application
- Allowing running multiple apps in isolation
- Are lightweight
- Use OS of the host
- Start quickly
- Need less hardware resources







