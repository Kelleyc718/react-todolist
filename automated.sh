#!/usr/bin/env bash

sudo setenforce 0
sudo yum update -y
sudo yum install -y git docker-engine
sudo systemctl start docker
sudo usermod -aG docker opc
sudo su opc
sudo curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/bin/docker-compose
sudo chmod +x /usr/bin/docker-compose
# git clone <url of your git repo>
# cd react-todolist
# docker-compose up -d