# Debian 兼容包测试报告

## 结论

- Debian 12 (bookworm) x86_64：通过
- Debian 13 (trixie) x86_64：通过
- `.deb` 安装、桌面入口、Electron 主界面、Mihomo 内核启动：通过
- GNOME/Cinnamon/MATE 系统代理命令流程：通过（使用命令桩验证）
- KDE Plasma 系统代理命令流程：通过（使用命令桩验证）
- TUN systemd 单元生成、`systemd-analyze verify`、卸载流程：通过

## 主要测试结果

```text
Package: lantianyun
Version: 1.6.4-linux.1
Status: install ok installed

Clash Meta v1.10.0 linux amd64 with go1.18
```

Electron 在无显示器测试环境中通过 Xvfb 启动，检测到两个页面：

- 主窗口：`index.html`
- 仪表盘：`index.html#/dashboard`

内核进程保持运行：

```text
com.vortex.helper -d ~/.config/com.vortex.helper -ext-ctl 127.0.0.1:39797
```

Linux 版会把原 Windows 客户端的加密配置迁移为标准 Mihomo YAML，Linux 内核才能直接读取。

## 未覆盖

- 未使用真实订阅账号做联网节点测速。
- Docker 测试环境没有真实 GNOME/KDE 会话和 TUN 设备，因此系统代理和 TUN 使用命令级验证；实际登录、节点切换与网络连通性仍应在用户的 Debian 桌面上确认。
