# 蓝天云 1.6.4 Linux 移植

> 本项目仅用于个人开发、学习与技术分享，无商业用途，禁止商业分发或销售。

本项目记录并实现原 1.6.4 Windows Electron 分发在 Debian x86_64 上的 Linux 移植。仓库不包含账号、密码、订阅链接或本机日志。

## 移植内容

- 使用 Electron 20.3.12 Linux x64 运行时重新打包。
- 集成 Mihomo Meta 1.19.34 Linux amd64 内核。
- 适配 Linux 二进制路径、权限和用户配置目录。
- 将原加密配置转换为标准 Mihomo YAML，兼容 Linux 内核读取。
- 增加 GNOME、Cinnamon、MATE 和 KDE Plasma 系统代理切换。
- 增加基于 systemd 和 polkit 的 TUN 模式安装、更新与卸载。
- 增加 Linux 自启动文件管理。
- 增加 Linux 窗口控制回退和透明圆角窗口，保证最小化和关闭入口可见。
- 修复公开 Mihomo 内核缺少自定义 `/heartbeat` 接口导致的登录前异常循环。
- 持久化登录令牌，并在有已保存凭据时自动恢复登录。
- 兼容订阅服务按 User-Agent 返回不同节点集合的行为。
- 生成 Debian `amd64` 安装包与 x86_64 便携包。
- 在 Debian 12 (bookworm) 和 Debian 13 (trixie) 中完成安装、界面启动和内核运行验证。

详细测试结果见 [TEST_REPORT.md](TEST_REPORT.md)。

## 下载

编译产物通过 GitHub Releases 发布：

[前往 Releases](https://github.com/DylanWalker933/lantianyun-linux-port/releases/latest)

推荐安装 `.deb`：

```bash
sudo apt install ./lantianyun_1.6.4-linux.6_amd64.deb
```

便携包：

```bash
tar -xzf lantianyun-linux-x86_64-1.6.4.tar.gz
cd lantianyun-linux-x86_64
./run-lantianyun
```

## 构建

需要 Node.js、npm 和 Python 3：

```bash
python build_linux.py
```

构建脚本会下载固定版本的 Electron 和 Mihomo，并把结果写入 `artifacts/`。

## 目录

```text
app/                 重打包后的 Electron 应用资源
packaging/           Linux 启动、代理与 systemd 辅助脚本
vendor/              移植必要的静态资源和地理数据
build_linux.py       自动构建、打包与校验脚本
README-Debian.md     安装和运行说明
TEST_REPORT.md       Debian 实机容器测试记录
```

## 说明

- 原应用名称、界面和第三方素材的权利归各自权利人所有，本项目不代表官方。
- Electron 与 Mihomo 的许可证信息见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
- 当前移植产物适用于 Debian x86_64/amd64。
