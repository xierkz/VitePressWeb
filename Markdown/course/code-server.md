# code-server

## 1. 下载

```html
# 自选链接
https://github.com/coder/code-server/releases

https://github.com/coder/code-server/releases/download/v4.89.1/code-server-4.89.1-linux-amd64.tar.gz
```

## 2. 安装

```shell
wget https://github.com/coder/code-server/releases/download/v4.89.1/code-server-4.89.1-linux-amd64.tar.gz
tar -zxvf code-server-4.89.1-linux-amd64.tar.gz
mv code-server-4.89.1-linux-amd64 /opt/vsc
cd /opt/vsc/bin
export PASSWORD="输入密码"   # 例如：123456
./code-server --port 8080 --host 127.0.0.1 --auth password
# http://127.0.0.1:8080
# ctrl + Z
cd   # 返回到用户根目录（此处为root下）
ll   # 找到./config/code-server/config.yaml
# **默认会vi编辑指令**
# 第一行将127.0.0.1改为0.0.0.0；端口号改为自定义，例如：61978
# 第三行password将其改为自定义，例如：123456
# cert待定，最好将其开启https


# 一种在后台运行服务的方法

sudo apt install -y tmux
tmux new -s vscode_online
cd /opt/vsc/bin
./code_server --port 61978 --host 0.0.0.0 --auth password
# 新建ssh会话
# **去服务器安全组开通`61978`端口**，不做展示
# 下面是物理机上开放
firewall-cmd --zone=public --add-port=61978/tcp --permanent
# **附赠删除开放`61978`端口**
firewall-cmd --zone=public --remove-port=61978/tcp --permanent
# 在新ssh会话上操作
tmux a -t vscode_online   # 介入会话
tmux kill-session -t vscode_online   # 结束会话
ps -aux | grep code-server
```

## 3.code-server.serive

```shell
vi /etc/systemd/system/code-server.service

[Uni]
Description=code-server
After=network.target

[Service]
Type=simple
User=root
ExecStart=/opt/vsc/bin/code-server --host 0.0.0.0 --port 61978 --auth password
Restart=on-failure

[Install]
WantedBy=multi-user.target

sudo systemctl daemon-reload
sudo systemctl enable code-server.service
sudo systemctl status code-server
sudo systemctl start code-server
```

## 4. 访问

+ 沿用上述例如：`http://ip:61978`，输入密码：123456后就可以进入web版VCcode
+ 注意：/root/.config/code-server/config.yaml配置路径
