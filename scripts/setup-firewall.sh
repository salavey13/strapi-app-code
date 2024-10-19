#!/bin/bash

# Enable UFW
sudo ufw enable

# Allow SSH (adjust port if needed)
sudo ufw allow 22/tcp

# Allow HTTP and HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Deny all other incoming traffic
sudo ufw default deny incoming

# Allow all outgoing traffic
sudo ufw default allow outgoing

# Enable logging
sudo ufw logging on

# Reload UFW
sudo ufw reload

echo "Firewall setup complete. Current status:"
sudo ufw status verbose