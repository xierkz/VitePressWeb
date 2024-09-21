# Teamspeak Server Setup

## 1、准备工作
```textile
# 开放部署服务器上的端口
  TCP：30033
  UDP：9987
```

## 2、部署
```shell
sudo apt update -y
sudo apt install -y wget git unzip apt-transport-https screen ca-certificates dialog
useradd teamspeak
cd /opt
sudo wget https://files.teamspeak-services.com/releases/server/3.13.7/teamspeak3-server_linux_amd64-3.13.7.tar.bz2
sudo tar -jxvf https://files.teamspeak-services.com/releases/server/3.13.7/teamspeak3-server_linux_amd64-3.13.7.tar.bz2
sudo rm -rf https://files.teamspeak-services.com/releases/server/3.13.7/teamspeak3-server_linux_amd64-3.13.7.tar.bz2
sudo mv teamspeak3-server_linux_amd64 teamspeak3

chown -R teamspeak:teamspeak teamspeak3 && cd /opt/teamspeak3 && su teamspeak
touch .ts3server_license_accepted
./ts3server_startscript.sh start
```

## 3、重点
```shell
# 记住上面最后一行代码后的信息
cd /usr/lib/systemd/system
vi teamspeak.service
```

## 4、teamspeak.service
```shell
[Unit]
  Description=Teamspeak, The most superior online voice communication solution.
  Wants=network-online.target
  After=syslog.target network.target network-online.target

[Service]
  User=teamspeak
  Group=teamspeak
  WorkingDirectory=/opt/teamspeak3/
  ExecStart=/opt/teamspeak34/ts3server_startscript.sh start
  ExecStop=/opt/teamspeak3/ts3server_startscript.sh stop
  PIDFile=/opt/teamspeak3/ts3server.pid
  Restart=always
  KillMode=none
  RestartSec=10
  PrivateTmp=true
  Type=forking

[Install]
  WantedBy=multi-user.target
```

## 5、执行.service
```shell
sudo systemctl daemon-reload
sudo systemctl enable teamspeak
reboot
sudo systemctl stop teamspeak
sudo systemctl status teamspeak
sudo systemctl start teamspeak
```

## 6、场外支持
[TeamSpeak 服务器搭建方法 | Vigorous Pro](https://www.wevg.org/archives/teamspeak-server-build/)
