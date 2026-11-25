# 蓝天云 Debian 版

> 本项目仅用于个人开发、学习与技术分享，无商业用途，禁止商业分发或销售。

这是根据本机 1.6.4 版 Electron 应用和 Mihomo Meta 1.19.34 内核制作的非官方 Debian 兼容版本，已在 Debian 12 和 Debian 13 的 x86_64 桌面环境验证。

## 安装

推荐安装 `.deb`：

```bash
sudo apt install ./lantianyun_1.6.4-linux.6_amd64.deb
```

安装后从应用菜单启动“蓝天云”。首次打开时沿用原来的账号登录和使用方式。

如果系统提示缺少依赖，可执行：

```bash
sudo apt --fix-broken install
```

## 便携版

```bash
tar -xzf lantianyun-linux-x86_64-1.6.4.tar.gz
cd lantianyun-linux-x86_64
./run-lantianyun
```

便携版没有 root 权限来安装 Chromium 的 setuid 沙箱，因此启动脚本会使用 `--no-sandbox`。日常使用建议安装 `.deb` 版本。

## 系统代理与 TUN

- 系统代理支持 GNOME、Cinnamon、MATE 和 KDE Plasma。连接时会备份原有代理设置，断开时恢复。
- TUN 模式通过 systemd 服务 `com.vortex.helper.service` 运行，启用时会出现一次 polkit 管理员授权提示。
- TUN 需要 `/dev/net/tun`。在容器或没有 TUN 设备的系统中不可用。
- Linux 版将代理配置保存为标准 Mihomo YAML，便于内核直接读取。
- Linux 版使用透明圆角窗口，并在界面左上角提供最小化和关闭按钮。

## 数据位置

- 应用设置：`~/.config/lantianyun/vortex.json`
- 登录令牌：`~/.config/lantianyun/linux-auth.json`，权限为 `0600`
- 代理配置：`~/.config/com.vortex.helper/config.yaml`
- 内核日志：`~/.config/com.vortex.helper/log/`
- TUN 服务：`/etc/systemd/system/com.vortex.helper.service`

原来的 Windows 安装目录不会被修改。
