from __future__ import annotations

import gzip
import hashlib
import io
import os
import shutil
import stat
import subprocess
import sys
import tarfile
import time
import urllib.request
import zipfile
from pathlib import Path


PROJECT = Path(__file__).resolve().parent
APP_SOURCE = PROJECT / "app"
PACKAGING = PROJECT / "packaging"
DOWNLOADS = PROJECT / "downloads"
BUILD = PROJECT / "build"
ARTIFACTS = PROJECT / "artifacts"
VENDOR = PROJECT / "vendor"
INSTALLED_APP = Path(r"D:\app\lantianyun")

APP_VERSION = "1.6.4"
LINUX_VERSION = "1.6.4-linux.5"
ELECTRON_VERSION = "20.3.12"
MIHOMO_VERSION = "1.19.34"
ARCH = "x64"
DEB_ARCH = "amd64"
BUNDLE_NAME = "lantianyun-linux-x86_64"

ELECTRON_URL = (
    f"https://github.com/electron/electron/releases/download/v{ELECTRON_VERSION}/"
    f"electron-v{ELECTRON_VERSION}-linux-x64.zip"
)
MIHOMO_URL = (
    f"https://github.com/MetaCubeX/mihomo/releases/download/v{MIHOMO_VERSION}/"
    f"mihomo-linux-amd64-compatible-v{MIHOMO_VERSION}.gz"
)

EXECUTABLES = {
    "lantianyun",
    "chrome-sandbox",
    "chrome_crashpad_handler",
    "run-lantianyun",
    "resources/binary/linux/x64/core",
    "resources/binary/linux/x64/sysproxy",
    "resources/lantianyun-service-helper",
}


def log(message: str) -> None:
    print(f"[build] {message}", flush=True)


def download(url: str, destination: Path) -> Path:
    destination.parent.mkdir(parents=True, exist_ok=True)
    if destination.exists() and destination.stat().st_size:
        log(f"reuse {destination.name}")
        return destination
    log(f"download {url}")
    request = urllib.request.Request(url, headers={"User-Agent": "lantianyun-linux-builder"})
    temp = destination.with_suffix(destination.suffix + ".part")
    with urllib.request.urlopen(request, timeout=120) as response, temp.open("wb") as output:
        shutil.copyfileobj(response, output)
    temp.replace(destination)
    return destination


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def run(command: list[str], cwd: Path | None = None) -> None:
    log(" ".join(command))
    subprocess.run(command, cwd=cwd, check=True)


def prepare_stage() -> Path:
    if BUILD.exists():
        shutil.rmtree(BUILD)
    stage = BUILD / BUNDLE_NAME
    stage.mkdir(parents=True)

    electron_zip = download(
        ELECTRON_URL,
        DOWNLOADS / f"electron-v{ELECTRON_VERSION}-linux-x64.zip",
    )
    log("extract Electron")
    with zipfile.ZipFile(electron_zip) as archive:
        archive.extractall(stage)

    electron_binary = stage / "electron"
    if not electron_binary.exists():
        raise RuntimeError("Electron archive did not contain the electron executable")
    electron_binary.rename(stage / "lantianyun")

    mihomo_gz = download(
        MIHOMO_URL,
        DOWNLOADS / f"mihomo-linux-amd64-compatible-v{MIHOMO_VERSION}.gz",
    )
    core_path = stage / "resources" / "binary" / "linux" / ARCH / "core"
    core_path.parent.mkdir(parents=True, exist_ok=True)
    log("extract Mihomo")
    with gzip.open(mihomo_gz, "rb") as source, core_path.open("wb") as output:
        shutil.copyfileobj(source, output)

    default_app = stage / "resources" / "default_app.asar"
    if default_app.exists():
        default_app.unlink()

    asar_path = stage / "resources" / "app.asar"
    npx = shutil.which("npx.cmd") or shutil.which("npx")
    if not npx:
        raise RuntimeError("npx was not found; install Node.js first")
    run([npx, "--yes", "@electron/asar", "pack", str(APP_SOURCE), str(asar_path)])

    log("copy application resources")
    asset_source = VENDOR / "assets"
    if not asset_source.exists():
        asset_source = INSTALLED_APP / "resources" / "assets"
    shutil.copytree(asset_source, stage / "resources" / "assets")

    country_source = VENDOR / "config" / "Country.mmdb"
    if not country_source.exists():
        country_source = INSTALLED_APP / "resources" / "binary" / "config" / "Country.mmdb"
    shutil.copytree(
        country_source.parent,
        stage / "resources" / "binary" / "config",
    )
    shutil.copy2(
        asset_source / "icons" / "512x512.png",
        stage / "resources" / "icon.png",
    )
    shutil.copy2(PACKAGING / "sysproxy", stage / "resources" / "binary" / "linux" / ARCH / "sysproxy")
    shutil.copy2(PACKAGING / "lantianyun-service-helper", stage / "resources" / "lantianyun-service-helper")
    shutil.copy2(PACKAGING / "run-lantianyun", stage / "run-lantianyun")
    shutil.copy2(PACKAGING / "lantianyun.desktop", stage / "lantianyun.desktop")
    shutil.copy2(PROJECT / "README-Debian.md", stage / "README.md")
    shutil.copy2(PROJECT / "TEST_REPORT.md", stage / "TEST_REPORT.md")
    shutil.copy2(PROJECT / "LICENSE", stage / "LICENSE")
    shutil.copy2(PROJECT / "THIRD_PARTY_NOTICES.md", stage / "THIRD_PARTY_NOTICES.md")

    for path in stage.rglob("*"):
        if path.is_file():
            path.chmod(0o755 if path.relative_to(stage).as_posix() in EXECUTABLES else 0o644)
        elif path.is_dir():
            path.chmod(0o755)
    return stage


def tar_info(
    source: Path,
    arcname: str,
    mode: int | None = None,
) -> tarfile.TarInfo:
    info = tarfile.TarInfo(arcname)
    info.uid = 0
    info.gid = 0
    info.uname = "root"
    info.gname = "root"
    info.mtime = 1704067200
    if source.is_symlink():
        info.type = tarfile.SYMTYPE
        info.linkname = os.readlink(source)
        info.mode = 0o777
        return info
    if source.is_dir():
        info.type = tarfile.DIRTYPE
        info.mode = 0o755
        return info
    info.type = tarfile.REGTYPE
    info.size = source.stat().st_size
    info.mode = mode if mode is not None else 0o644
    return info


def add_tree(
    archive: tarfile.TarFile,
    source: Path,
    destination: str,
    mode_overrides: dict[str, int] | None = None,
) -> None:
    mode_overrides = mode_overrides or {}
    archive.addfile(tar_info(source, destination + "/"))
    for path in sorted(source.rglob("*")):
        relative = path.relative_to(source).as_posix()
        arcname = f"{destination}/{relative}"
        mode = mode_overrides.get(relative)
        if mode is None and relative in EXECUTABLES:
            mode = 0o755
        info = tar_info(path, arcname, mode)
        if info.isfile():
            with path.open("rb") as stream:
                archive.addfile(info, stream)
        else:
            archive.addfile(info)


def build_portable(stage: Path) -> Path:
    output = ARTIFACTS / f"{BUNDLE_NAME}-{APP_VERSION}.tar.gz"
    log(f"create {output.name}")
    with tarfile.open(output, "w:gz", format=tarfile.PAX_FORMAT) as archive:
        add_tree(archive, stage, BUNDLE_NAME)
    return output


def build_control_tar(destination: Path, installed_size: int, md5sums: str) -> None:
    control = f"""Package: lantianyun
Version: {LINUX_VERSION}
Section: net
Priority: optional
Architecture: {DEB_ARCH}
Maintainer: Local Debian Conversion
Installed-Size: {installed_size}
Depends: libgtk-3-0 | libgtk-3-0t64, libnss3, libxss1, libxtst6, libatspi2.0-0 | libatspi2.0-0t64, libgbm1, libsecret-1-0, libnotify4, libasound2 | libasound2t64, libcups2 | libcups2t64, xdg-utils, pkexec | policykit-1
Recommends: fonts-noto-cjk
Description: 蓝天云代理客户端 Debian 兼容版
 非官方 Debian 兼容构建，复用蓝天云 1.6.4 的界面资源，
 并集成 Mihomo Meta 1.19.34 的 x86_64 Linux 内核。
"""
    mtime = 1704067200
    with tarfile.open(destination, "w:gz", format=tarfile.PAX_FORMAT) as archive:
        entries = {
            "control": control.encode("utf-8"),
            "md5sums": md5sums.encode("utf-8"),
            "postinst": (PACKAGING / "postinst").read_bytes(),
            "postrm": (PACKAGING / "postrm").read_bytes(),
        }
        for name, payload in entries.items():
            info = tarfile.TarInfo(name)
            info.size = len(payload)
            info.mode = 0o755 if name in {"postinst", "postrm"} else 0o644
            info.uid = 0
            info.gid = 0
            info.uname = "root"
            info.gname = "root"
            info.mtime = mtime
            archive.addfile(info, io.BytesIO(payload))


def build_data_tar(destination: Path, stage: Path) -> tuple[int, str]:
    installed_bytes = 0
    md5_lines: list[str] = []
    for path in sorted(stage.rglob("*")):
        if path.is_file():
            relative = path.relative_to(stage).as_posix()
            installed_bytes += path.stat().st_size
            md5_lines.append(f"{hashlib.md5(path.read_bytes()).hexdigest()}  opt/lantianyun/{relative}")

    desktop = PACKAGING / "lantianyun.desktop"
    icon = stage / "resources" / "icon.png"
    md5_lines.append(f"{hashlib.md5(desktop.read_bytes()).hexdigest()}  usr/share/applications/lantianyun.desktop")
    md5_lines.append(f"{hashlib.md5(icon.read_bytes()).hexdigest()}  usr/share/icons/hicolor/512x512/apps/lantianyun.png")

    with tarfile.open(destination, "w:gz", format=tarfile.PAX_FORMAT) as archive:
        add_tree(archive, stage, "./opt/lantianyun")

        for directory in [
            "./usr",
            "./usr/bin",
            "./usr/share",
            "./usr/share/applications",
            "./usr/share/icons",
            "./usr/share/icons/hicolor",
            "./usr/share/icons/hicolor/512x512",
            "./usr/share/icons/hicolor/512x512/apps",
            "./usr/share/doc",
            "./usr/share/doc/lantianyun",
        ]:
            info = tarfile.TarInfo(directory)
            info.type = tarfile.DIRTYPE
            info.mode = 0o755
            info.uid = 0
            info.gid = 0
            info.uname = "root"
            info.gname = "root"
            info.mtime = 1704067200
            archive.addfile(info)

        desktop_info = tarfile.TarInfo("./usr/share/applications/lantianyun.desktop")
        desktop_info.size = desktop.stat().st_size
        desktop_info.mode = 0o644
        desktop_info.mtime = 1704067200
        with desktop.open("rb") as stream:
            archive.addfile(desktop_info, stream)

        icon_info = tarfile.TarInfo("./usr/share/icons/hicolor/512x512/apps/lantianyun.png")
        icon_info.size = icon.stat().st_size
        icon_info.mode = 0o644
        icon_info.mtime = 1704067200
        with icon.open("rb") as stream:
            archive.addfile(icon_info, stream)

        readme_info = tarfile.TarInfo("./usr/share/doc/lantianyun/README.md")
        readme_payload = (PROJECT / "README-Debian.md").read_bytes()
        readme_info.size = len(readme_payload)
        readme_info.mode = 0o644
        readme_info.mtime = 1704067200
        archive.addfile(readme_info, io.BytesIO(readme_payload))

        report_info = tarfile.TarInfo("./usr/share/doc/lantianyun/TEST_REPORT.md")
        report_payload = (PROJECT / "TEST_REPORT.md").read_bytes()
        report_info.size = len(report_payload)
        report_info.mode = 0o644
        report_info.mtime = 1704067200
        archive.addfile(report_info, io.BytesIO(report_payload))

        for filename in ["LICENSE", "THIRD_PARTY_NOTICES.md"]:
            payload = (PROJECT / filename).read_bytes()
            info = tarfile.TarInfo(f"./usr/share/doc/lantianyun/{filename}")
            info.size = len(payload)
            info.mode = 0o644
            info.mtime = 1704067200
            archive.addfile(info, io.BytesIO(payload))

        symlink = tarfile.TarInfo("./usr/bin/lantianyun")
        symlink.type = tarfile.SYMTYPE
        symlink.linkname = "/opt/lantianyun/run-lantianyun"
        symlink.mode = 0o777
        symlink.uid = 0
        symlink.gid = 0
        symlink.uname = "root"
        symlink.gname = "root"
        symlink.mtime = 1704067200
        archive.addfile(symlink)

    return installed_bytes, "\n".join(md5_lines) + "\n"


def write_ar_member(output, name: str, payload: bytes) -> None:
    header = (
        f"{name:<16}"
        f"{1704067200:<12}"
        f"{0:<6}"
        f"{0:<6}"
        f"{0o100644:<8o}"
        f"{len(payload):<10}"
        "`\n"
    ).encode("ascii")
    output.write(header)
    output.write(payload)
    if len(payload) % 2:
        output.write(b"\n")


def build_deb(stage: Path) -> Path:
    deb_root = BUILD / "deb"
    if deb_root.exists():
        shutil.rmtree(deb_root)
    deb_root.mkdir(parents=True)
    control_tar = deb_root / "control.tar.gz"
    data_tar = deb_root / "data.tar.gz"

    installed_bytes, md5sums = build_data_tar(data_tar, stage)
    build_control_tar(control_tar, max(1, installed_bytes // 1024), md5sums)

    output = ARTIFACTS / f"lantianyun_{LINUX_VERSION}_{DEB_ARCH}.deb"
    log(f"create {output.name}")
    with output.open("wb") as archive:
        archive.write(b"!<arch>\n")
        write_ar_member(archive, "debian-binary", b"2.0\n")
        write_ar_member(archive, "control.tar.gz", control_tar.read_bytes())
        write_ar_member(archive, "data.tar.gz", data_tar.read_bytes())
    return output


def main() -> int:
    ARTIFACTS.mkdir(parents=True, exist_ok=True)
    DOWNLOADS.mkdir(parents=True, exist_ok=True)
    stage = prepare_stage()
    portable = build_portable(stage)
    deb = build_deb(stage)
    checksums = ARTIFACTS / "SHA256SUMS"
    checksums.write_text(
        f"{sha256(portable)}  {portable.name}\n{sha256(deb)}  {deb.name}\n",
        encoding="utf-8",
    )
    shutil.copy2(PROJECT / "TEST_REPORT.md", ARTIFACTS / "TEST_REPORT.md")
    shutil.copy2(PROJECT / "LICENSE", ARTIFACTS / "LICENSE")
    shutil.copy2(PROJECT / "THIRD_PARTY_NOTICES.md", ARTIFACTS / "THIRD_PARTY_NOTICES.md")
    log(f"portable: {portable}")
    log(f"deb: {deb}")
    log(f"sha256: {checksums}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except subprocess.CalledProcessError as error:
        print(f"Command failed with exit code {error.returncode}", file=sys.stderr)
        raise
