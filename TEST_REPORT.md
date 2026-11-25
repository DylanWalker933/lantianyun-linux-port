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
Version: 1.6.4-linux.2
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

## 登录前异常循环修复

首版测试发现，登录前 `get_support_info` 和 `host_ready` 会请求自定义内核接口：

```text
http://127.0.0.1:39797/heartbeat
```

公开的 Mihomo Meta 1.10.0 不提供该私有接口，因此返回：

```text
404 page not found
```

客户端随后把 404 文本按 Base64 密文解密，得到错误数据并无限抛出：

```text
TypeError: Cannot read properties of null (reading 'length')
```

`1.6.4-linux.2` 已增加仅作用于 `/heartbeat` 的兼容回退，使用原 Windows 自定义核心返回的兼容响应：

```json
{"Code":1,"Data":"","Message":"","Status":200}
```

修复后独立测试持续运行超过原崩溃时间点，渲染进程不再产生该异常，内存和 CPU 保持稳定。

## 未覆盖

- 未使用真实订阅账号做联网节点测速。
- Docker 测试环境没有真实 GNOME/KDE 会话和 TUN 设备，因此系统代理和 TUN 使用命令级验证；实际登录、节点切换与网络连通性仍应在用户的 Debian 桌面上确认。
