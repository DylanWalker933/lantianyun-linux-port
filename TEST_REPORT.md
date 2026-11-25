# Debian 兼容包测试报告

## 结论

- Debian 12 (bookworm) x86_64：通过
- Debian 13 (trixie) x86_64：通过，已完成真实账号登录和订阅更新
- `.deb` 安装、桌面入口、Electron 主界面、Mihomo 内核启动：通过
- GNOME/Cinnamon/MATE 系统代理命令流程：通过（使用命令桩验证）
- KDE Plasma 系统代理命令流程：通过（使用命令桩验证）
- TUN systemd 单元生成、`systemd-analyze verify`、卸载流程：通过

## 主要测试结果

```text
Package: lantianyun
Version: 1.6.4-linux.5
Status: install ok installed

Mihomo Meta v1.19.34 linux amd64 with go1.26.11
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

公开的 Mihomo Meta 不提供该私有接口，因此返回：

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

进一步对照原 Windows 核心的空白配置状态后确认：`Command 5`（读取订阅信息）在未登录时应返回 `Status: 403`，而不是通用成功。`1.6.4-linux.3` 已按 heartbeat 命令区分回退结果，首次启动会直接显示用户名、密码、登录和注册界面。

登录按钮还会发送 `Command 2`（账号密码登录）并从 `Command 5` 读取订阅信息。公开 Mihomo 没有这些私有代理接口，因此 `1.6.4-linux.5` 在主进程中兼容实现：

- `Command 1`：读取 `/api/v1/guest/comm/config`
- `Command 2`：调用 `/api/v1/passport/auth/login`
- `Command 5`：携带 `auth_data` 调用 `/api/v1/user/getSubscribe`
- `Command 6`：使用 `clash.meta` User-Agent 下载订阅 YAML
- `Command 11`：携带 `auth_data` 调用 `/api/v1/user/info`
- `Command 27`：调用 Mihomo `/configs` 重新加载配置

对于 Linux 版渲染进程缺少代理状态的问题，增加了本机 Mihomo `/proxies` 回退读取。原客户端交给主进程的配置只保留部分字段，因此 Linux 主进程会合并 `Command 6` 返回的完整节点、策略组和规则后再写入配置。

## 真实登录验证

在 Debian 13 x86_64 的 KDE Wayland 会话中完成：

- 输入真实账号和密码后进入主界面。
- 账号容量、有效期和订阅服务器信息正常显示。
- 订阅下载、Mihomo 配置重载和代理列表刷新正常完成。
- 内核 API 返回 49 个代理/策略项，`GLOBAL` 节点组包含 44 个可选项。
- 登录及手动“更新订阅”后持续观察 10 秒以上，渲染进程无未捕获异常。
- 通过本机 `7897` 代理端口访问 `https://www.gstatic.com/generate_204` 返回 HTTP 204，访问 Cloudflare 测试地址返回 HTTP 200。
- 关闭并重新启动应用后，凭据已自动填充并完成自动登录，无需再次手动输入账密。
- 登录令牌保存在用户配置目录中的 `linux-auth.json`，文件权限为 `0600`。
- Debian 原生窗口标题栏已启用，窗口管理器提供最小化、关闭和拖拽操作。

## 未覆盖

- 未对全部订阅节点逐个进行联网测速。
- Docker 测试环境没有真实 GNOME/KDE 会话和 TUN 设备，因此系统代理和 TUN 使用命令级验证；真实登录与订阅更新已在 Debian 桌面确认。
