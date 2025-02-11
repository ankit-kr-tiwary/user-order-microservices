## Microservices: User & Order Services

Overview

This project uses Flask (User Service) on a Linux VM and Express.js (Order Service) on a Windows VM, communicating over a VirtualBox network.

Technologies

Flask (Python) - User management

Express.js (Node.js) - Order processing

VirtualBox - VM setup

REST API - Service communication

Setup

Linux VM (User Service)

sudo apt update && sudo apt install -y python3 python3-pip
pip install flask
python3 user.py  # Runs on port 5001

Windows VM (Order Service)

npm install express
node order.js  # Runs on port 3000

API Endpoints

User Service

POST /users        # Create user
GET /users/<id>    # Get user by ID
GET /users         # Get all users

Order Service

POST /create-order  # Create order
GET /               # View orders (UI)

Future Enhancements

Add database storage

Implement Docker

Introduce authentication

Deploy to cloud platforms

License

This project is MIT licensed.




