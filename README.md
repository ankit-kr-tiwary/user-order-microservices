# Microservices: User & Order Services

## Overview

This project demonstrates the setup and deployment of a microservice-based application using VirtualBox. It involves configuring two Virtual Machines (VMs) – one running a Flask-based user service on Linux, and the other running an Express.js-based order service on Windows.

## Objective

*   Create and configure VMs using VirtualBox.
*   Establish network connectivity between the VMs.
*   Deploy a Flask-based user service and an Express.js-based order service.
*   Illustrate the microservices architecture.

## Setup

1.  **VirtualBox Installation:**

    *   Download from [VirtualBox Official Website](https://www.virtualbox.org/).
    *   Install using default options.
    *   Verify with `VBoxManage --version` in your command prompt.
2.  **Create Virtual Machines:**

    *   Create two VMs in VirtualBox: one for Linux (Ubuntu 22.04 LTS) and one for Windows (Windows 10).
    *   Allocate appropriate memory and disk space.
    *   Attach ISO images for OS installation.
3.  **VM Configuration:**

    | Configuration         | VM1 (Linux)        | VM2 (Windows)      |
    | --------------------- | ------------------ | ------------------ |
    | OS                    | Ubuntu 22.04 LTS   | Windows 10         |
    | CPU Cores             | 2                  | 2                  |
    | Disk Space (GB)       | 50                 | 70                 |
    | Network Adapter       | Host-only Ethernet | Host-only Ethernet |
    | Virtualization        | Enabled            | Enabled            |
    | Additional Features | SSH Enabled        | Remote Desktop       |

4.  **Network Configuration:**

    *   Set network adapter to "Host-Only Adapter" in VirtualBox settings for both VMs.
    *   Configure IP addresses and ensure VMs can ping each other.

## Microservices Deployment

1.  **User Service (Linux VM):**

    ```
    sudo apt update
    sudo apt install python3 python3-pip -y
    pip3 install flask
    python3 user.py
    ```

2.  **Order Service (Windows VM):**

    ```
    sudo apt update
    sudo apt install nodejs npm -y
    npm install express
    node orders.js
    ```

## Architecture

*   **User Service:** Flask-based service on Linux VM (port 5001).
*   **Order Service:** Express.js-based service on Windows VM (port 3000).
*   The Order Service may query the User Service to retrieve user details.

## Testing

1.  **User Service:**

    ```
    curl -X POST http://<linux-vm-ip>:5001/users -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john@example.com"}'
    curl http://<linux-vm-ip>:5001/users
    ```

2.  **Order Service:**

    ```
    curl -X POST http://<nodejs-vm-ip>:3000/create-order -H "Content-Type: application/json" -d '{"orderId": 1, "product": "Laptop", "quantity": 2}'
    curl http://<nodejs-vm-ip>:3000/
    ```

## Author

*   Ankit Kumar Tiwary
*   Roll: M23AID022
*   Dept. of AIDE, IITJ
