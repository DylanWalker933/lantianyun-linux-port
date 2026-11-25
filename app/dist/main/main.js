(function (_0x20b78f, _0xae54b6) {
  if (typeof exports == "object" && typeof module == "object") {
    module.exports = _0xae54b6();
  } else if (typeof define == "function" && define.amd) {
    define([], _0xae54b6);
  } else {
    var _0x16e1a5 = _0xae54b6();
    for (var _0x1a37b8 in _0x16e1a5) {
      (typeof exports == "object" ? exports : _0x20b78f)[_0x1a37b8] = _0x16e1a5[_0x1a37b8];
    }
  }
})(global, () => (() => {
  var _0x134d71;
  var _0x5cdef7;
  var _0x529d6e = {
    932(_0x1df955) {
      'use strict';

      _0x1df955.exports = require("process");
    },
    2203(_0x1fcde2) {
      'use strict';

      _0x1fcde2.exports = require("stream");
    },
    16928(_0x1810b4) {
      'use strict';

      _0x1810b4.exports = require("path");
    },
    20181(_0x471583) {
      'use strict';

      _0x471583.exports = require("buffer");
    },
    24434(_0x1cec71) {
      'use strict';

      _0x1cec71.exports = require("events");
    },
    24876(_0x57e380) {
      'use strict';

      _0x57e380.exports = require("punycode");
    },
    35317(_0x25de40) {
      'use strict';

      _0x25de40.exports = require("child_process");
    },
    39023(_0x279464) {
      'use strict';

      _0x279464.exports = require("util");
    },
    42613(_0x2fa005) {
      'use strict';

      _0x2fa005.exports = require("assert");
    },
    43106(_0x3eb3e2) {
      'use strict';

      _0x3eb3e2.exports = require("zlib");
    },
    52018(_0x408a46) {
      'use strict';

      _0x408a46.exports = require("tty");
    },
    58611(_0x5c0f8b) {
      'use strict';

      _0x5c0f8b.exports = require("http");
    },
    62408(_0x36bc60) {
      function _0x320501(_0x557715) {
        var _0x1d2a7e = new Error("Cannot find module '" + _0x557715 + "'");
        _0x1d2a7e.code = "MODULE_NOT_FOUND";
        throw _0x1d2a7e;
      }
      _0x320501.keys = () => [];
      _0x320501.resolve = _0x320501;
      _0x320501.id = 62408;
      _0x36bc60.exports = _0x320501;
    },
    62748(_0x3546b0, _0x3aafcb, _0x4605ff) {
      'use strict';

      const _0x52286a = {
        dashboardWindow: () => _0x1ee3c5,
        mainWindow: () => _0x2b36d0,
        on_window_close: () => _0x8f5eb1
      };
      _0x4605ff.r(_0x3aafcb);
      _0x4605ff.d(_0x3aafcb, _0x52286a);
      var _0x4a0716;
      var _0x5d6cf;
      var _0x35a12a;
      var _0x3039d5;
      var _0x4278b9;
      var _0x406cc6 = _0x4605ff(16928);
      var _0x563693 = _0x4605ff.n(_0x406cc6);
      var _0x441cc1 = _0x4605ff(84157);
      (function (_0x33ded2) {
        _0x33ded2[_0x33ded2.Pending = 0] = "Pending";
        _0x33ded2[_0x33ded2.Paid = 1] = "Paid";
        _0x33ded2[_0x33ded2.Cancelled = 2] = "Cancelled";
        _0x33ded2[_0x33ded2.Completed = 3] = "Completed";
        _0x33ded2[_0x33ded2.Discounted = 4] = "Discounted";
      })(_0x4a0716 ||= {});
      (function (_0x1c1a5e) {
        _0x1c1a5e[_0x1c1a5e.Fixed = 1] = "Fixed";
        _0x1c1a5e[_0x1c1a5e.Percent = 2] = "Percent";
      })(_0x5d6cf ||= {});
      (function (_0x47f66f) {
        _0x47f66f[_0x47f66f.Balance = -1] = "Balance";
        _0x47f66f[_0x47f66f.Qrcode = 0] = "Qrcode";
        _0x47f66f[_0x47f66f.Url = 1] = "Url";
      })(_0x35a12a ||= {});
      (function (_0x41788f) {
        _0x41788f[_0x41788f.Unknown = 0] = "Unknown";
        _0x41788f[_0x41788f.Normal = 1] = "Normal";
        _0x41788f[_0x41788f.Connecting = 2] = "Connecting";
        _0x41788f[_0x41788f.Connected = 3] = "Connected";
      })(_0x3039d5 ||= {});
      (function (_0x45fe90) {
        _0x45fe90.Rule = "rule";
        _0x45fe90.Global = "global";
        _0x45fe90.Direct = "direct";
      })(_0x4278b9 ||= {});
      var _0x217483 = _0x4605ff(33423);
      var _0x386714 = _0x4605ff.n(_0x217483);
      const _0x5438a8 = 7897;
      const _0x17c254 = "127.0.0.1:39797";
      const _0x21bf30 = "127.0.0.1:39798";
      const _0x49d975 = {
        enable: false,
        stack: "gvisor",
        "dns-hijack": ["0.0.0.0:53"],
        "auto-route": true,
        "auto-detect-interface": true
      };
      const _0x515197 = {
        enable: true,
        "enhanced-mode": "fake-ip",
        nameserver: ["114.114.114.114", "223.5.5.5", "8.8.8.8"],
        fallback: [],
        "fake-ip-filter": ["+.stun.*.*", "+.stun.*.*.*", "+.stun.*.*.*.*", "+.stun.*.*.*.*.*", "*.n.n.srv.nintendo.net", "+.stun.playstation.net", "xbox.*.*.microsoft.com", "*.*.xboxlive.com", "apps.apple.com"]
      };
      const _0x305bad = 300;
      const _0x464613 = 700;
      var _0x1f0e63 = _0x4605ff(79896);
      var _0x458a3d = _0x4605ff.n(_0x1f0e63);
      const _0x33a404 = {
        server_type: {
          type: "number"
        },
        proxy_mode: {
          type: "string"
        },
        telegram_group: {
          type: "string"
        },
        proxy_port: {
          type: "number"
        },
        user_info: {
          type: "object"
        },
        subscription_info: {
          type: "object"
        },
        tun: {
          type: "boolean"
        },
        latest_announcement: {
          type: "number"
        },
        service_mode: {
          type: "boolean"
        },
        platform: {
          type: "string"
        },
        render_dashboard: {
          type: "boolean"
        },
        auto_launch: {
          type: "boolean"
        },
        prefer_nodes: {
          type: "object"
        },
        connected: {
          type: "boolean"
        },
        language: {
          type: "string"
        },
        update_helper: {
          type: "boolean"
        },
        order_list: {
          type: "object"
        },
        subscription_id: {
          type: "string"
        },
        system_info: {
          type: "object"
        },
        email: {
          type: "string"
        },
        password: {
          type: "string"
        },
        show_tray_speed: {
          type: "boolean"
        },
        has_shown_expiry_alert: {
          type: "boolean"
        },
        has_shown_quota_alert: {
          type: "boolean"
        },
        config_hash: {
          type: "string"
        },
        original_dns: {
          type: "string"
        },
        is_fake_ip_mode: {
          type: "boolean"
        },
        need_relogin: {
          type: "boolean"
        }
      };
      const _0x10b715 = new class {
        constructor() {
          const _0x3b0b14 = {
            schema: _0x33a404
          };
          const _0x5e97f3 = new (_0x386714())(_0x3b0b14);
          const _0x7a6de9 = _0x563693().join(_0x563693().dirname(_0x5e97f3.path), "vortex.json");
          const _0x45ba79 = {
            name: "vortex",
            schema: _0x33a404
          };
          if (!_0x458a3d().existsSync(_0x7a6de9) && _0x5e97f3.get("proxy_mode")) {
            _0x458a3d().copyFileSync(_0x5e97f3.path, _0x7a6de9);
          }
          this.store = new (_0x386714())(_0x45ba79);
          this.reset_default();
          if (this.platform === undefined) {
            this.platform = process.platform;
          }
          if (this.service_mode === undefined) {
            this.service_mode = false;
          }
          if (this.auto_launch === undefined) {
            this.auto_launch = false;
          }
          if (this.update_helper === undefined) {
            this.update_helper = false;
          }
          if (this.show_tray_speed === undefined) {
            this.show_tray_speed = true;
          }
          if (this.need_relogin === undefined) {
            this.need_relogin = false;
          }
        }
        reset_default() {
          if (this.proxy_mode === undefined) {
            this.proxy_mode = _0x4278b9.Rule;
          }
          if (this.proxy_port === undefined) {
            this.proxy_port = _0x5438a8;
          }
          if (this.tun === undefined) {
            this.tun = false;
          }
          if (this.latest_announcement === undefined) {
            this.latest_announcement = 0;
          }
          if (this.prefer_nodes === undefined) {
            this.prefer_nodes = {};
          }
          if (this.connected === undefined) {
            this.connected = false;
          }
          if (this.telegram_group === undefined) {
            this.telegram_group = "";
          }
          if (this.has_shown_expiry_alert === undefined) {
            this.has_shown_expiry_alert = false;
          }
          if (this.has_shown_quota_alert === undefined) {
            this.has_shown_quota_alert = false;
          }
          if (this.is_fake_ip_mode === undefined) {
            this.is_fake_ip_mode = false;
          }
          this.render_dashboard = false;
        }
        reset_account_info(_0x20a5f1) {
          this.store.delete("user_info");
          this.store.delete("subscription_info");
          this.store.delete("order_list");
          this.store.delete("proxy_mode");
          this.store.delete("proxy_port");
          this.store.delete("tun");
          this.store.delete("latest_announcement");
          this.store.delete("prefer_nodes");
          this.store.delete("connected");
          this.store.delete("telegram_group");
          this.store.delete("subscription_id");
          this.store.delete("has_shown_expiry_alert");
          this.store.delete("has_shown_quota_alert");
          this.store.delete("config_hash");
          this.store.delete("is_fake_ip_mode");
          if (!_0x20a5f1) {
            this.store.delete("email");
            this.store.delete("password");
          }
          this.reset_default();
        }
        get_or_set(_0x349dc2, _0x3a219c = null) {
          if (_0x3a219c === null) {
            return this.store.get(_0x349dc2);
          }
          this.store.set(_0x349dc2, _0x3a219c);
        }
        get server_type() {
          return this.get_or_set("server_type");
        }
        set server_type(_0x9f21f3) {
          this.get_or_set("server_type", _0x9f21f3);
        }
        get proxy_mode() {
          return this.get_or_set("proxy_mode");
        }
        set proxy_mode(_0x598c6f) {
          this.get_or_set("proxy_mode", _0x598c6f);
        }
        get telegram_group() {
          return this.get_or_set("telegram_group");
        }
        set telegram_group(_0x58b5b7) {
          this.get_or_set("telegram_group", _0x58b5b7);
        }
        get proxy_port() {
          return this.get_or_set("proxy_port");
        }
        set proxy_port(_0x771992) {
          this.get_or_set("proxy_port", _0x771992);
        }
        get tun() {
          return this.get_or_set("tun");
        }
        set tun(_0x42418e) {
          this.get_or_set("tun", _0x42418e);
        }
        get latest_announcement() {
          return this.get_or_set("latest_announcement");
        }
        set latest_announcement(_0x4d74d2) {
          this.get_or_set("latest_announcement", _0x4d74d2);
        }
        get service_mode() {
          return this.get_or_set("service_mode");
        }
        set service_mode(_0x10affc) {
          this.get_or_set("service_mode", _0x10affc);
        }
        get platform() {
          return this.get_or_set("platform");
        }
        set platform(_0x225242) {
          this.get_or_set("platform", _0x225242);
        }
        get render_dashboard() {
          return this.get_or_set("render_dashboard");
        }
        set render_dashboard(_0xba144b) {
          this.get_or_set("render_dashboard", _0xba144b);
        }
        get auto_launch() {
          return this.get_or_set("auto_launch");
        }
        set auto_launch(_0x423d1e) {
          this.get_or_set("auto_launch", _0x423d1e);
        }
        get prefer_nodes() {
          return this.get_or_set("prefer_nodes");
        }
        set prefer_nodes(_0x4d65e6) {
          this.get_or_set("prefer_nodes", _0x4d65e6);
        }
        get connected() {
          return this.get_or_set("connected");
        }
        set connected(_0x1de1a7) {
          this.get_or_set("connected", _0x1de1a7);
        }
        get language() {
          return this.get_or_set("language");
        }
        set language(_0x227d8d) {
          this.get_or_set("language", _0x227d8d);
        }
        get update_helper() {
          return this.get_or_set("update_helper");
        }
        set update_helper(_0x286d11) {
          this.get_or_set("update_helper", _0x286d11);
        }
        get show_tray_speed() {
          return this.get_or_set("show_tray_speed");
        }
        set show_tray_speed(_0x5d6d6d) {
          this.get_or_set("show_tray_speed", _0x5d6d6d);
        }
        get has_shown_expiry_alert() {
          return this.get_or_set("has_shown_expiry_alert");
        }
        set has_shown_expiry_alert(_0x207705) {
          this.get_or_set("has_shown_expiry_alert", _0x207705);
        }
        get has_shown_quota_alert() {
          return this.get_or_set("has_shown_quota_alert");
        }
        set has_shown_quota_alert(_0x3073f9) {
          this.get_or_set("has_shown_quota_alert", _0x3073f9);
        }
        get original_dns() {
          return this.get_or_set("original_dns");
        }
        set original_dns(_0x421fb) {
          this.get_or_set("original_dns", _0x421fb);
        }
        get is_fake_ip_mode() {
          return this.get_or_set("is_fake_ip_mode");
        }
        set is_fake_ip_mode(_0x379df5) {
          this.get_or_set("is_fake_ip_mode", _0x379df5);
        }
        get need_relogin() {
          return this.get_or_set("need_relogin");
        }
        set need_relogin(_0xdff970) {
          this.get_or_set("need_relogin", _0xdff970);
        }
        get config_hash() {
          return this.get_or_set("config_hash");
        }
        set config_hash(_0xa2578a) {
          this.get_or_set("config_hash", _0xa2578a);
        }
      }();
      var _0x23ee12 = _0x4605ff(91198);
      var _0x3fdb9c = _0x4605ff(35317);
      var _0x5a2580 = _0x4605ff(70857);
      var _0x1f1c44 = _0x4605ff(83244);
      var _0x4144bd = _0x4605ff.n(_0x1f1c44);
      var _0x58081b = _0x4605ff(21706);
      var _0x371d1f = _0x4605ff(8761);
      class _0x27bb12 {
        static toBinaryString(_0x12dad6, _0x37e25c) {
          let _0x1c2758 = _0x12dad6.length;
          let _0x18b8d2 = _0x1c2758 << 2;
          if (_0x37e25c) {
            const _0x38650d = _0x12dad6[_0x1c2758 - 1];
            _0x18b8d2 -= 4;
            if (_0x38650d < _0x18b8d2 - 3 || _0x38650d > _0x18b8d2) {
              return null;
            }
            _0x18b8d2 = _0x38650d;
          }
          for (let _0x4b0ffd = 0; _0x4b0ffd < _0x1c2758; _0x4b0ffd++) {
            _0x12dad6[_0x4b0ffd] = String.fromCharCode(_0x12dad6[_0x4b0ffd] & 255, _0x12dad6[_0x4b0ffd] >>> 8 & 255, _0x12dad6[_0x4b0ffd] >>> 16 & 255, _0x12dad6[_0x4b0ffd] >>> 24 & 255);
          }
          const _0x2ab175 = _0x12dad6.join("");
          if (_0x37e25c) {
            return _0x2ab175.substring(0, _0x18b8d2);
          } else {
            return _0x2ab175;
          }
        }
        static toUint32Array(_0x3ea27d, _0x37b700) {
          let _0x3ae3d7;
          let _0x2b474f = _0x3ea27d.length;
          let _0x195eb6 = _0x2b474f >> 2;
          if (_0x2b474f & 3) {
            ++_0x195eb6;
          }
          if (_0x37b700) {
            _0x3ae3d7 = new Array(_0x195eb6 + 1);
            _0x3ae3d7[_0x195eb6] = _0x2b474f;
          } else {
            _0x3ae3d7 = new Array(_0x195eb6);
          }
          for (let _0x475385 = 0; _0x475385 < _0x2b474f; ++_0x475385) {
            _0x3ae3d7[_0x475385 >> 2] |= _0x3ea27d.charCodeAt(_0x475385) << ((_0x475385 & 3) << 3);
          }
          return _0x3ae3d7;
        }
        static int32(_0x286398) {
          return _0x286398 & -1;
        }
        static mx(_0xae47de, _0x5c0370, _0x4d4630, _0x2581d0, _0x13612b, _0x1f9e25) {
          return (_0x4d4630 >>> 5 ^ _0x5c0370 << 2) + (_0x5c0370 >>> 3 ^ _0x4d4630 << 4) ^ (_0xae47de ^ _0x5c0370) + (_0x1f9e25[_0x2581d0 & 3 ^ _0x13612b] ^ _0x4d4630);
        }
        static fixk(_0xbdd6a3) {
          if (_0xbdd6a3.length < 4) {
            _0xbdd6a3.length = 4;
          }
          return _0xbdd6a3;
        }
        static encryptUint32Array(_0x5cbc15, _0x4dd8f5) {
          let _0x47e531;
          let _0x1c8c33;
          let _0x20cd68;
          let _0x18c238;
          let _0x5504c7;
          let _0x1a34f8;
          let _0x1d42b1 = _0x5cbc15.length;
          let _0x3e9d69 = _0x1d42b1 - 1;
          _0x1c8c33 = _0x5cbc15[_0x3e9d69];
          _0x20cd68 = 0;
          _0x1a34f8 = Math.floor(6 + 52 / _0x1d42b1) | 0;
          for (; _0x1a34f8 > 0; --_0x1a34f8) {
            _0x20cd68 = this.int32(_0x20cd68 + this.DELTA);
            _0x18c238 = _0x20cd68 >>> 2 & 3;
            _0x5504c7 = 0;
            for (; _0x5504c7 < _0x3e9d69; ++_0x5504c7) {
              _0x47e531 = _0x5cbc15[_0x5504c7 + 1];
              _0x1c8c33 = _0x5cbc15[_0x5504c7] = this.int32(_0x5cbc15[_0x5504c7] + this.mx(_0x20cd68, _0x47e531, _0x1c8c33, _0x5504c7, _0x18c238, _0x4dd8f5));
            }
            _0x47e531 = _0x5cbc15[0];
            _0x1c8c33 = _0x5cbc15[_0x3e9d69] = this.int32(_0x5cbc15[_0x3e9d69] + this.mx(_0x20cd68, _0x47e531, _0x1c8c33, _0x3e9d69, _0x18c238, _0x4dd8f5));
          }
          return _0x5cbc15;
        }
        static decryptUint32Array(_0x24d225, _0x2a3d6c) {
          const _0x315beb = _0x24d225.length;
          const _0x36d555 = _0x315beb - 1;
          let _0xee80f5;
          let _0x3989d7;
          let _0x3ac54c;
          let _0x5d6e7a;
          let _0x7d47c2;
          let _0x4f46ef;
          _0xee80f5 = _0x24d225[0];
          _0x4f46ef = Math.floor(6 + 52 / _0x315beb);
          _0x3ac54c = this.int32(_0x4f46ef * this.DELTA);
          for (; _0x3ac54c !== 0; _0x3ac54c = this.int32(_0x3ac54c - this.DELTA)) {
            _0x5d6e7a = _0x3ac54c >>> 2 & 3;
            _0x7d47c2 = _0x36d555;
            for (; _0x7d47c2 > 0; --_0x7d47c2) {
              _0x3989d7 = _0x24d225[_0x7d47c2 - 1];
              _0xee80f5 = _0x24d225[_0x7d47c2] = this.int32(_0x24d225[_0x7d47c2] - this.mx(_0x3ac54c, _0xee80f5, _0x3989d7, _0x7d47c2, _0x5d6e7a, _0x2a3d6c));
            }
            _0x3989d7 = _0x24d225[_0x36d555];
            _0xee80f5 = _0x24d225[0] = this.int32(_0x24d225[0] - this.mx(_0x3ac54c, _0xee80f5, _0x3989d7, 0, _0x5d6e7a, _0x2a3d6c));
          }
          return _0x24d225;
        }
        static utf8DecodeShortString(_0x4c4a8e, _0x29879d) {
          let _0xe03125 = new Array(_0x29879d);
          let _0x1b3b56 = 0;
          let _0x42d0ba = 0;
          for (let _0x27f3de = _0x4c4a8e.length; _0x1b3b56 < _0x29879d && _0x42d0ba < _0x27f3de; _0x1b3b56++) {
            const _0x3a0ea6 = _0x4c4a8e.charCodeAt(_0x42d0ba++);
            switch (_0x3a0ea6 >> 4) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
                _0xe03125[_0x1b3b56] = _0x3a0ea6;
                break;
              case 12:
              case 13:
                if (!(_0x42d0ba < _0x27f3de)) {
                  throw new Error("Unfinished UTF-8 octet sequence");
                }
                _0xe03125[_0x1b3b56] = (_0x3a0ea6 & 31) << 6 | _0x4c4a8e.charCodeAt(_0x42d0ba++) & 63;
                break;
              case 14:
                if (!(_0x42d0ba + 1 < _0x27f3de)) {
                  throw new Error("Unfinished UTF-8 octet sequence");
                }
                _0xe03125[_0x1b3b56] = (_0x3a0ea6 & 15) << 12 | (_0x4c4a8e.charCodeAt(_0x42d0ba++) & 63) << 6 | _0x4c4a8e.charCodeAt(_0x42d0ba++) & 63;
                break;
              case 15:
                if (!(_0x42d0ba + 2 < _0x27f3de)) {
                  throw new Error("Unfinished UTF-8 octet sequence");
                }
                {
                  const _0x353648 = ((_0x3a0ea6 & 7) << 18 | (_0x4c4a8e.charCodeAt(_0x42d0ba++) & 63) << 12 | (_0x4c4a8e.charCodeAt(_0x42d0ba++) & 63) << 6 | _0x4c4a8e.charCodeAt(_0x42d0ba++) & 63) - 65536;
                  if (!(_0x353648 >= 0) || !(_0x353648 <= 1048575)) {
                    throw new Error("Character outside valid Unicode range: 0x" + _0x353648.toString(16));
                  }
                  _0xe03125[_0x1b3b56++] = _0x353648 >> 10 & 1023 | 55296;
                  _0xe03125[_0x1b3b56] = _0x353648 & 1023 | 56320;
                }
                break;
              default:
                throw new Error("Bad UTF-8 encoding 0x" + _0x3a0ea6.toString(16));
            }
          }
          if (_0x1b3b56 < _0x29879d) {
            _0xe03125.length = _0x1b3b56;
          }
          return String.fromCharCode.apply(String, _0xe03125);
        }
        static utf8DecodeLongString(_0x57249c, _0x2e2654) {
          let _0x39b7a7 = [];
          let _0x4eacbe = new Array(32768);
          let _0x2c9bf6 = 0;
          let _0x5ce135 = 0;
          for (let _0x428331 = _0x57249c.length; _0x2c9bf6 < _0x2e2654 && _0x5ce135 < _0x428331; _0x2c9bf6++) {
            const _0x3080ce = _0x57249c.charCodeAt(_0x5ce135++);
            switch (_0x3080ce >> 4) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
                _0x4eacbe[_0x2c9bf6] = _0x3080ce;
                break;
              case 12:
              case 13:
                if (!(_0x5ce135 < _0x428331)) {
                  throw new Error("Unfinished UTF-8 octet sequence");
                }
                _0x4eacbe[_0x2c9bf6] = (_0x3080ce & 31) << 6 | _0x57249c.charCodeAt(_0x5ce135++) & 63;
                break;
              case 14:
                if (!(_0x5ce135 + 1 < _0x428331)) {
                  throw new Error("Unfinished UTF-8 octet sequence");
                }
                _0x4eacbe[_0x2c9bf6] = (_0x3080ce & 15) << 12 | (_0x57249c.charCodeAt(_0x5ce135++) & 63) << 6 | _0x57249c.charCodeAt(_0x5ce135++) & 63;
                break;
              case 15:
                if (!(_0x5ce135 + 2 < _0x428331)) {
                  throw new Error("Unfinished UTF-8 octet sequence");
                }
                {
                  const _0x33ed57 = ((_0x3080ce & 7) << 18 | (_0x57249c.charCodeAt(_0x5ce135++) & 63) << 12 | (_0x57249c.charCodeAt(_0x5ce135++) & 63) << 6 | _0x57249c.charCodeAt(_0x5ce135++) & 63) - 65536;
                  if (!(_0x33ed57 >= 0) || !(_0x33ed57 <= 1048575)) {
                    throw new Error("Character outside valid Unicode range: 0x" + _0x33ed57.toString(16));
                  }
                  _0x4eacbe[_0x2c9bf6++] = _0x33ed57 >> 10 & 1023 | 55296;
                  _0x4eacbe[_0x2c9bf6] = _0x33ed57 & 1023 | 56320;
                }
                break;
              default:
                throw new Error("Bad UTF-8 encoding 0x" + _0x3080ce.toString(16));
            }
            if (_0x2c9bf6 >= 32766) {
              const _0x5da44b = _0x2c9bf6 + 1;
              _0x4eacbe.length = _0x5da44b;
              _0x39b7a7[_0x39b7a7.length] = String.fromCharCode.apply(String, _0x4eacbe);
              _0x2e2654 -= _0x5da44b;
              _0x2c9bf6 = -1;
            }
          }
          if (_0x2c9bf6 > 0) {
            _0x4eacbe.length = _0x2c9bf6;
            _0x39b7a7[_0x39b7a7.length] = String.fromCharCode.apply(String, _0x4eacbe);
          }
          return _0x39b7a7.join("");
        }
        static utf8Encode(_0x545051) {
          if (/^[\x00-\x7f]*$/.test(_0x545051)) {
            return _0x545051;
          }
          let _0x9ff471 = [];
          const _0x3c57af = _0x545051.length;
          for (let _0x455f68 = 0, _0x4e5177 = 0; _0x455f68 < _0x3c57af; ++_0x455f68, ++_0x4e5177) {
            const _0x4a8817 = _0x545051.charCodeAt(_0x455f68);
            if (_0x4a8817 < 128) {
              _0x9ff471[_0x4e5177] = _0x545051.charAt(_0x455f68);
            } else if (_0x4a8817 < 2048) {
              _0x9ff471[_0x4e5177] = String.fromCharCode(_0x4a8817 >> 6 | 192, _0x4a8817 & 63 | 128);
            } else {
              if (!(_0x4a8817 < 55296) && !(_0x4a8817 > 57343)) {
                if (_0x455f68 + 1 < _0x3c57af) {
                  const _0x57d854 = _0x545051.charCodeAt(_0x455f68 + 1);
                  if (_0x4a8817 < 56320 && _0x57d854 >= 56320 && _0x57d854 <= 57343) {
                    const _0x2e7ed0 = 65536 + ((_0x4a8817 & 1023) << 10 | _0x57d854 & 1023);
                    _0x9ff471[_0x4e5177] = String.fromCharCode(_0x2e7ed0 >> 18 & 63 | 240, _0x2e7ed0 >> 12 & 63 | 128, _0x2e7ed0 >> 6 & 63 | 128, _0x2e7ed0 & 63 | 128);
                    ++_0x455f68;
                    continue;
                  }
                }
                throw new Error("Malformed string");
              }
              _0x9ff471[_0x4e5177] = String.fromCharCode(_0x4a8817 >> 12 | 224, _0x4a8817 >> 6 & 63 | 128, _0x4a8817 & 63 | 128);
            }
          }
          return _0x9ff471.join("");
        }
        static utf8Decode(_0x490279, _0x3c92fa) {
          if (_0x3c92fa == null || _0x3c92fa < 0) {
            _0x3c92fa = _0x490279.length;
          }
          if (_0x3c92fa === 0) {
            return "";
          } else if (/^[\x00-\x7f]*$/.test(_0x490279) || !/^[\x00-\xff]*$/.test(_0x490279)) {
            if (_0x3c92fa === _0x490279.length) {
              return _0x490279;
            } else {
              return _0x490279.substr(0, _0x3c92fa);
            }
          } else if (_0x3c92fa < 32767) {
            return this.utf8DecodeShortString(_0x490279, _0x3c92fa);
          } else {
            return this.utf8DecodeLongString(_0x490279, _0x3c92fa);
          }
        }
        static encrypt(_0x52b60d, _0x351632) {
          if (_0x52b60d == null || _0x52b60d.length === 0) {
            return _0x52b60d;
          } else {
            _0x52b60d = this.utf8Encode(_0x52b60d);
            _0x351632 = this.utf8Encode(_0x351632);
            return this.toBinaryString(this.encryptUint32Array(this.toUint32Array(_0x52b60d, true), this.fixk(this.toUint32Array(_0x351632, false))), false);
          }
        }
        static encryptToBase64(_0x573a56, _0x588f4e) {
          return btoa(this.encrypt(_0x573a56, _0x588f4e));
        }
        static decrypt(_0x1ab933, _0x3bbee3) {
          if (_0x1ab933 == null || _0x1ab933.length === 0) {
            return _0x1ab933;
          } else {
            _0x3bbee3 = this.utf8Encode(_0x3bbee3);
            return this.utf8Decode(this.toBinaryString(this.decryptUint32Array(this.toUint32Array(_0x1ab933, false), this.fixk(this.toUint32Array(_0x3bbee3, false))), true));
          }
        }
        static decryptFromBase64(_0x5e451e, _0x305726) {
          if (_0x5e451e == null || _0x5e451e.length === 0) {
            return _0x5e451e;
          } else {
            return this.decrypt(atob(_0x5e451e), _0x305726);
          }
        }
        static encryptToBase85(_0x245b9e, _0x3f84d7) {
          return _0x371d1f.encode(this.encrypt(_0x245b9e, _0x3f84d7)).toString();
        }
        static decryptFromBase85(_0xf553e7, _0x75eae0) {
          if (_0xf553e7 == null || _0xf553e7.length === 0) {
            return _0xf553e7;
          }
          const _0x2afd55 = _0x371d1f.decode(_0xf553e7);
          return this.decrypt(_0x2afd55.toString("utf8"), _0x75eae0);
        }
      }
      _0x27bb12.DELTA = 2654435769;
      const _0x5a25a3 = [55, 14, 105, 121, 40, 17, 98, 44, 18, 42, 111, 126, 45, 20, 107, 34, 11, 48, 108, 124, 56, 3, 99, 60];
      function _0x146a50() {
        return _0x5a25a3.map(_0x20f72c => String.fromCharCode(_0x20f72c ^ 90)).join("");
      }
      const _0x9be64 = "com.vortex.helper";
      class _0x40f925 {
        constructor() {
          this.clash_process = null;
          this.exiting = false;
        }
        source_binary_dir() {
          return _0x563693().join(process.resourcesPath, "binary");
        }
        clash_config_dir() {
          return _0x563693().join((0, _0x5a2580.homedir)(), ".config", _0x9be64);
        }
        config_path() {
          return _0x563693().join(this.clash_config_dir(), "config.yaml");
        }
        core_path() {
          const _0x483a3d = process.platform === "win32" ? ".exe" : "";
          return _0x563693().join(this.source_binary_dir(), process.platform + "/" + this.sysarch() + "/core" + _0x483a3d);
        }
        service_helper_path() {
          const _0x2eaa84 = process.platform === "win32" ? ".exe" : "";
          return _0x563693().join(this.clash_config_dir(), _0x9be64 + _0x2eaa84);
        }
        sysarch() {
          if (process.env.PROCESSOR_ARCHITEW6432 === "ARM64") {
            return "arm64";
          } else {
            return process.arch;
          }
        }
        sysproxy_path() {
          return _0x563693().join(this.source_binary_dir(), process.platform + "/" + this.sysarch() + "/sysproxy");
        }
        linux_service_installer_path() {
          return _0x563693().join(process.resourcesPath, "lantianyun-service-helper");
        }
        async run_linux_service_action(_0x24bb19) {
          const _0x5c1917 = [
            _0x24bb19,
            this.core_path(),
            this.clash_config_dir(),
            this.config_path(),
            _0x21bf30
          ];
          return await _0x1fcf99("pkexec", [this.linux_service_installer_path(), ..._0x5c1917]);
        }
        http_proxy_url() {
          return "127.0.0.1:" + _0x10b715.proxy_port;
        }
        socks_proxy_url() {
          return "127.0.0.1:" + _0x10b715.proxy_port;
        }
        save_config(_0x4c5744) {
          const _0x4a3335 = _0x23ee12.stringify(_0x4c5744);
          if (process.platform === "linux") {
            _0x1f0e63.writeFileSync(this.config_path(), _0x4a3335, "utf-8");
            return;
          }
          const _0x1c2d46 = _0x27bb12.encryptToBase64(_0x4a3335, _0x146a50());
          _0x1f0e63.writeFileSync(this.config_path(), _0x1c2d46, "utf-8");
        }
        update_config(_0x1e6672, _0x22574a = undefined) {
          let _0x35c700 = _0x22574a || _0x23ee12.parse(_0x1e6672);
          _0x35c700["allow-lan"] = true;
          _0x35c700["mixed-port"] = _0x10b715.proxy_port;
          _0x35c700["external-controller"] = _0x17c254;
          _0x35c700.mode = _0x10b715.service_mode ? _0x4278b9.Direct : _0x4278b9.Rule;
          _0x35c700["enable-process"] = true;
          _0x35c700.tun = _0x49d975;
          _0x35c700.tun.enable = false;
          if (!_0x35c700.dns || !_0x35c700.dns.enable) {
            _0x35c700.dns = _0x515197;
          }
          _0x10b715.is_fake_ip_mode = _0x35c700.dns && _0x35c700.dns["enhanced-mode"] === "fake-ip" && _0x35c700.dns["fake-ip-range"] && _0x35c700.dns["fake-ip-range"].startsWith("198.18.0.1");
          this.save_config(_0x35c700);
          return _0x35c700;
        }
        get_config() {
          const _0x394d31 = _0x1f0e63.readFileSync(this.config_path(), "utf-8");
          if (process.platform === "linux") {
            try {
              return _0x23ee12.parse(_0x394d31);
            } catch (_0x572c26) {
              console.log("[linux] migrating encrypted config to plain YAML");
            }
          }
          const _0x25f7b8 = _0x27bb12.decryptFromBase64(_0x394d31, _0x146a50());
          const _0x5b7482 = _0x23ee12.parse(_0x25f7b8);
          if (process.platform === "linux") {
            this.save_config(_0x5b7482);
          }
          return _0x5b7482;
        }
        sync_tun_state() {
          this.update_config("", this.get_config());
        }
        reset_config() {
          const _0x4cbe3e = {
            "mixed-port": 0,
            "external-controller": _0x17c254,
            mode: _0x4278b9.Rule,
            "log-level": "info",
            proxies: null,
            "proxy-groups": null,
            rules: null
          };
          const _0x3d91fb = _0x4cbe3e;
          this.save_config(_0x3d91fb);
          _0x10b715.config_hash = "";
        }
        check_update_file(_0x365dc6, _0xd6e1c8, _0x3f8c0a = true) {
          let _0x41fcb5 = false;
          const _0x29d5db = _0x4144bd().sync(_0x365dc6);
          if (_0x1f0e63.existsSync(_0xd6e1c8) && _0x29d5db !== _0x4144bd().sync(_0xd6e1c8)) {
            _0x41fcb5 = true;
            if (_0x3f8c0a) {
              _0x1f0e63.unlinkSync(_0xd6e1c8);
            }
          }
          if (!_0x1f0e63.existsSync(_0xd6e1c8)) {
            _0x1f0e63.copyFileSync(_0x365dc6, _0xd6e1c8);
          }
          return _0x41fcb5;
        }
        confirm_config_dir() {
          if (!_0x1f0e63.existsSync(this.clash_config_dir())) {
            _0x1f0e63.mkdirSync(this.clash_config_dir(), {
              recursive: true
            });
          }
          const _0x5459da = _0x563693().join(this.clash_config_dir(), "Country.mmdb");
          const _0x1c199b = _0x563693().join(this.source_binary_dir(), "config/Country.mmdb");
          this.check_update_file(_0x1c199b, _0x5459da);
          if (!(0, _0x1f0e63.existsSync)(this.config_path())) {
            this.reset_config();
          }
          const _0x3e374b = _0x4144bd().sync(this.core_path());
          if (_0x1f0e63.existsSync(this.service_helper_path()) && _0x3e374b !== _0x4144bd().sync(this.service_helper_path())) {
            if (_0x10b715.service_mode) {
              const _0x24a767 = this.service_helper_path() + "_update";
              if (_0x1f0e63.existsSync(_0x24a767)) {
                _0x1f0e63.unlinkSync(_0x24a767);
              }
              if (!_0x1f0e63.existsSync(_0x24a767)) {
                _0x1f0e63.copyFileSync(this.core_path(), _0x24a767);
              }
              _0x10b715.update_helper = true;
            } else {
              _0x1f0e63.unlinkSync(this.service_helper_path());
            }
            _0x10b715.need_relogin = true;
            this.reset_config();
          }
          if (!_0x1f0e63.existsSync(this.service_helper_path())) {
            _0x1f0e63.copyFileSync(this.core_path(), this.service_helper_path());
          }
          if (process.platform === "linux") {
            try {
              _0x1f0e63.chmodSync(this.core_path(), 0o755);
              _0x1f0e63.chmodSync(this.service_helper_path(), 0o755);
              _0x1f0e63.chmodSync(this.sysproxy_path(), 0o755);
            } catch (_0xcbd81b) {
              console.log("[linux] failed to set executable permissions:", _0xcbd81b);
            }
          }
        }
        get_log_file_path() {
          const _0x10654d = new Date();
          const _0x4bd664 = _0x10654d.getFullYear() + "-" + String(_0x10654d.getMonth() + 1).padStart(2, "0") + "-" + String(_0x10654d.getDate()).padStart(2, "0");
          const _0x4b62fc = _0x563693().join(this.clash_config_dir(), "log");
          if (!_0x1f0e63.existsSync(_0x4b62fc)) {
            _0x1f0e63.mkdirSync(_0x4b62fc, {
              recursive: true
            });
          }
          return _0x563693().join(_0x4b62fc, "core-" + _0x4bd664 + ".log");
        }
        async open_clash_core() {
          if (this.clash_process === null) {
            const _0x586b26 = this.get_log_file_path();
            const _0x438039 = _0x1f0e63.createWriteStream(_0x586b26, {
              flags: "a"
            });
            this.clash_process = _0x3fdb9c.execFile(this.service_helper_path(), ["-d", this.clash_config_dir(), "-ext-ctl", _0x17c254]);
            const _0x52685b = new Date().toISOString();
            const _0x436276 = "[clash]start clash at: " + this.clash_process.pid + " on " + process.platform;
            console.log(_0x436276);
            _0x438039.write("[" + _0x52685b + "] " + _0x436276 + "\n");
            this.clash_process?.stdout?.on("data", _0x44e3ed => {
              if (_0x44e3ed.toString().toLowerCase().includes("err")) {
                const _0x4de610 = "[clash]" + _0x44e3ed.trim();
                console.log(_0x4de610);
                _0x438039.write("[" + new Date().toISOString() + "] " + _0x4de610 + "\n");
              }
            });
            this.clash_process?.stderr?.on("data", _0x3482fe => {
              if (_0x3482fe.toString().toLowerCase().includes("err")) {
                const _0x55b7eb = "[clash]" + _0x3482fe.trim();
                console.log(_0x55b7eb);
                _0x438039.write("[" + new Date().toISOString() + "] " + _0x55b7eb + "\n");
              }
            });
            this.clash_process.on("close", _0x30c766 => {
              const _0x275557 = "[clash]clash closed";
              console.log(_0x275557);
              _0x438039.write("[" + new Date().toISOString() + "] " + _0x275557 + "\n");
              if (this.exiting) {
                const _0x12f379 = "[clash]exiting normally";
                console.log(_0x12f379);
                _0x438039.write("[" + new Date().toISOString() + "] " + _0x12f379 + "\n");
                _0x438039.end();
              } else {
                this.clash_process = null;
                const _0x8c6ca8 = "[clash]will restart in 1 second";
                console.log(_0x8c6ca8);
                _0x438039.write("[" + new Date().toISOString() + "] " + _0x8c6ca8 + "\n");
                _0x438039.end();
                setTimeout(() => {
                  this.open_clash_core();
                }, 1000);
              }
            });
          }
        }
        async confirm_clash_service() {
          this.confirm_config_dir();
          if (_0x10b715.service_mode) {
            if (!(await this.check_tun_service())) {
              _0x10b715.tun = false;
              _0x10b715.service_mode = false;
            }
          }
          if (!_0x10b715.service_mode) {
            await this.open_clash_core();
          }
        }
        async close_clash_core() {
          this.exiting = true;
          if (this.clash_process) {
            this.clash_process.kill();
            this.clash_process = null;
          }
        }
        async set_system_proxy(_0xded42d) {
          try {
            if (_0xded42d) {
              await _0x1fcf99(this.sysproxy_path(), ["-http", this.http_proxy_url(), "-https", this.http_proxy_url(), "-socks", this.socks_proxy_url()]);
            } else {
              await _0x1fcf99(this.sysproxy_path(), ["-stop"]);
            }
            return {
              status: 200,
              result: true
            };
          } catch (_0x451ec8) {
            console.log("[linux] failed to update desktop proxy:", _0x451ec8);
            return {
              status: -1,
              result: false
            };
          }
        }
        async connect() {
          return await this.set_system_proxy(true);
        }
        async disconnect() {
          return await this.set_system_proxy(false);
        }
        async check_tun_service() {
          try {
            await _0x1fcf99("systemctl", ["is-active", "--quiet", "com.vortex.helper.service"]);
            return true;
          } catch {
            return false;
          }
        }
        async install_tun_service() {
          try {
            await this.run_linux_service_action("install");
            _0x10b715.service_mode = true;
            return true;
          } catch (_0x43f9a0) {
            console.log("[linux] failed to install TUN service:", _0x43f9a0);
            return false;
          }
        }
        async uninstall_tun_service() {
          try {
            await this.run_linux_service_action("uninstall");
            _0x10b715.service_mode = false;
            return true;
          } catch (_0x5c11c4) {
            console.log("[linux] failed to uninstall TUN service:", _0x5c11c4);
            return false;
          }
        }
        async update_tun_service() {
          try {
            await this.run_linux_service_action("update");
            _0x10b715.update_helper = false;
            return true;
          } catch (_0x547aa2) {
            console.log("[linux] failed to update TUN service:", _0x547aa2);
            return false;
          }
        }
        get_clash_api_config() {
          const _0x5b64f2 = {
            baseURL: "http://" + _0x21bf30
          };
          if (_0x10b715.service_mode) {
            return _0x5b64f2;
          } else {
            return {
              baseURL: "http://" + _0x17c254
            };
          }
        }
        async tun_direct() {
          const _0x16a813 = _0x49d975;
          _0x16a813.enable = false;
          await _0x58081b.A.patch(this.get_clash_api_config().baseURL + "/configs", {
            mode: _0x4278b9.Direct,
            tun: _0x16a813
          });
        }
        async set_system_dns(_0x5cd9a7) {
          return true;
        }
      }
      var _0x5cfb56 = _0x4605ff(39023);
      var _0x5ce92e = _0x4605ff.n(_0x5cfb56);
      var _0x38dcbe = _0x4605ff(70761);
      const _0x1fcf99 = _0x5ce92e().promisify(_0x3fdb9c.execFile);
      const _0x59e252 = _0x5ce92e().promisify(_0x38dcbe.m);
      const _0x2d328c = "/Library/LaunchDaemons/" + _0x9be64 + ".plist";
      const _0x4df992 = "<?xml version=1.0 encoding=UTF-8?>\n<!DOCTYPE plist PUBLIC -//Apple//DTD PLIST 1.0//EN http://www.apple.com/DTDs/PropertyList-1.0.dtd>\n<plist version=1.0>\n    <dict>\n        <key>Label</key>\n        <string>SERVICE_NAME</string>\n        <key>ProgramArguments</key>\n        <array>\n            <string>CLASH_PATH</string>\n            <string>-d</string>\n            <string>CONFIG_DIR</string>\n            <string>-f</string>\n            <string>TUN_CONFIG</string>\n            <string>-ext-ctl</string>\n            <string>TUN_CONTROLLER</string>\n        </array>\n        <key>RunAtLoad</key>\n        <true/>\n        <key>KeepAlive</key>\n        <true/>\n        <key>HardResourceLimits</key>\n        <dict>\n            <key>NumberOfFiles</key>\n            <integer>10240</integer>\n        </dict>\n        <key>SoftResourceLimits</key>\n        <dict>\n            <key>NumberOfFiles</key>\n            <integer>10240</integer>\n        </dict>\n        <key>StandardErrorPath</key>\n        <string>/tmp/" + _0x9be64 + ".err.log</string>\n        <key>StandardOutPath</key>\n        <string>/tmp/" + _0x9be64 + ".log</string>\n    </dict>\n</plist>";
      class _0x3dd1e9 extends _0x40f925 {
        async set_system_proxy(_0x396bda) {
          try {
            if (_0x396bda) {
              await _0x1fcf99(this.sysproxy_path(), ["-http", this.http_proxy_url(), "-https", this.http_proxy_url(), "-socks", this.socks_proxy_url()]);
            } else {
              await _0x1fcf99(this.sysproxy_path(), ["-stop"]);
            }
            return {
              status: 200,
              result: true
            };
          } catch (_0x395b6c) {
            console.log(_0x395b6c);
          }
          const _0x44e82d = {
            status: -1,
            result: false
          };
          return _0x44e82d;
        }
        async check_tun_service() {
          if (!_0x1f0e63.existsSync(_0x2d328c)) {
            return false;
          }
          if (new TextDecoder().decode(_0x1f0e63.readFileSync(_0x2d328c)).indexOf(this.service_helper_path()) < 0) {
            return false;
          }
          try {
            return (await _0x58081b.A.get("http://" + _0x21bf30, {
              timeout: 3000
            })).status === 200;
          } catch {
            return false;
          }
        }
        async install_tun_service() {
          const _0x53a6fb = "echo \"" + _0x4df992.replace("SERVICE_NAME", _0x9be64).replace("CLASH_PATH", this.service_helper_path()).replace("CONFIG_DIR", this.clash_config_dir()).replace("TUN_CONFIG", this.config_path()).replace("TUN_CONTROLLER", _0x21bf30) + "\" > " + _0x2d328c + " && launchctl load -w " + _0x2d328c;
          try {
            await _0x59e252(_0x53a6fb, {
              name: "vortex"
            });
            _0x10b715.service_mode = true;
            return true;
          } catch (_0x2d712b) {
            return false;
          }
        }
        async uninstall_tun_service() {
          const _0x4f2f37 = "launchctl unload -w " + _0x2d328c + "; rm " + _0x2d328c;
          try {
            await _0x59e252(_0x4f2f37, {
              name: "vortex"
            });
            _0x10b715.service_mode = false;
            return true;
          } catch (_0x3c9dff) {
            return false;
          }
        }
        async update_tun_service() {
          const _0x454b1a = this.service_helper_path() + "_update";
          let _0x2dbbb8 = "launchctl unload -w " + _0x2d328c + " && ";
          _0x2dbbb8 += "rm -rf " + this.service_helper_path() + " && ";
          _0x2dbbb8 += "mv " + _0x454b1a + " " + this.service_helper_path() + " && ";
          _0x2dbbb8 += "sleep 0.2 && ";
          _0x2dbbb8 += "launchctl load -w " + _0x2d328c;
          try {
            await _0x59e252(_0x2dbbb8, {
              name: "vortex"
            });
            _0x10b715.update_helper = false;
            return true;
          } catch (_0x5e4ec5) {
            return false;
          }
        }
        async set_system_dns(_0x3dfa5b) {
          try {
            if (_0x3dfa5b === null) {
              const {
                stdout: _0x5d5945
              } = await _0x1fcf99(this.sysproxy_path(), ["-dns", "query"]);
              const _0x1718a9 = _0x5d5945.split("=")[0];
              const _0x314448 = _0x10b715.original_dns;
              if (_0x314448 && _0x314448.startsWith(_0x1718a9 + "=")) {
                const _0x24f799 = _0x314448.split("=")[1].replace(";", "");
                await _0x1fcf99(this.sysproxy_path(), ["-dns", _0x24f799]);
                return true;
              }
              return false;
            }
            {
              const {
                stdout: _0x22f2e9
              } = await _0x1fcf99(this.sysproxy_path(), ["-dns", "query"]);
              _0x10b715.original_dns = _0x22f2e9.trim();
              await _0x1fcf99(this.sysproxy_path(), ["-dns", _0x3dfa5b]);
              return true;
            }
          } catch (_0x3e0241) {
            console.log(_0x3e0241);
            return false;
          }
        }
      }
      const _0x5c3485 = _0x5ce92e().promisify(_0x3fdb9c.execFile);
      const _0xaca43c = "<service>\n  <id>SERVICE_NAME</id>\n  <name>SERVICE_NAME</name>\n  <description>SERVICE_NAME</description>\n  <executable>SERVICE_PATH</executable>\n  <arguments>-d \"CONFIG_DIR\" -f \"TUN_CONFIG\" -ext-ctl TUN_CONTROLLER</arguments>\n  <log mode=\"roll-by-time\">\n    <pattern>yyyyMMdd</pattern>\n  </log>\n  <onfailure action=\"restart\" />\n</service>";
      class _0x31894e extends _0x40f925 {
        async set_system_proxy(_0x337ab4) {
          try {
            if (_0x337ab4) {
              await _0x5c3485(this.sysproxy_path(), ["global", this.http_proxy_url(), "localhost;127.*;10.*;172.16.*;172.17.*;172.18.*;172.19.*;172.20.*;172.21.*;172.22.*;172.23.*;172.24.*;172.25.*;172.26.*;172.27.*;172.28.*;172.29.*;172.30.*;172.31.*;192.168.*"]);
            } else {
              await _0x5c3485(this.sysproxy_path(), ["set", "1", "-", "-", "-"]);
            }
            return {
              status: 200,
              result: true
            };
          } catch (_0x1b0e0c) {
            console.log(_0x1b0e0c);
          }
          const _0x4377a5 = {
            status: -1,
            result: false
          };
          return _0x4377a5;
        }
        service_path() {
          return _0x563693().join(this.clash_config_dir(), "service.exe");
        }
        confirm_config_dir() {
          super.confirm_config_dir();
          const _0x3b1715 = _0x563693().join(this.source_binary_dir(), process.platform + "/" + process.arch + "/service.exe");
          super.check_update_file(_0x3b1715, this.service_path(), false);
          const _0x43faa0 = _0xaca43c.replaceAll("SERVICE_NAME", _0x9be64).replace("SERVICE_PATH", this.service_helper_path()).replace("CONFIG_DIR", this.clash_config_dir()).replace("TUN_CONFIG", this.config_path()).replace("TUN_CONTROLLER", _0x21bf30);
          const _0x1d7115 = _0x563693().join(this.clash_config_dir(), "service.xml");
          _0x458a3d().writeFileSync(_0x1d7115, new TextEncoder().encode(_0x43faa0));
        }
        async install_tun_service() {
          try {
            await _0x5c3485(this.service_path(), ["install"]);
            _0x10b715.service_mode = true;
            return true;
          } catch (_0x105381) {
            console.log(_0x105381);
            return false;
          }
        }
        async uninstall_tun_service() {
          try {
            await _0x5c3485(this.service_path(), ["uninstall"]);
            _0x10b715.service_mode = false;
            return true;
          } catch (_0x5d6dae) {
            console.log(_0x5d6dae);
            return false;
          }
        }
        async update_tun_service() {
          try {
            await _0x5c3485(this.service_path(), ["update"]);
            _0x10b715.update_helper = false;
            return true;
          } catch (_0x3a8dd4) {
            console.log(_0x3a8dd4);
            return false;
          }
        }
        async check_tun_service() {
          try {
            if ((await _0x5c3485(this.service_path(), ["status"])).stdout.trim() === "Started") {
              return true;
            }
          } catch (_0x54d773) {
            console.log(_0x54d773);
          }
          return false;
        }
      }
      const _0x18643e = process.platform === "darwin" ? new _0x3dd1e9() : process.platform === "win32" ? new _0x31894e() : new _0x40f925();
      var _0xb17e17;
      var _0x2c8fb7;
      var _0x58510f;
      var _0x278663;
      (function (_0x399c82) {
        _0x399c82[_0x399c82.NO_DATA = -1] = "NO_DATA";
        _0x399c82[_0x399c82.FAILED = -2] = "FAILED";
      })(_0xb17e17 ||= {});
      (function (_0x42b10e) {
        _0x42b10e[_0x42b10e.MINIMIZE = 0] = "MINIMIZE";
        _0x42b10e[_0x42b10e.CLOSE = 1] = "CLOSE";
        _0x42b10e[_0x42b10e.SHOW = 2] = "SHOW";
      })(_0x2c8fb7 ||= {});
      (function (_0x4a74a0) {
        _0x4a74a0[_0x4a74a0.MAIN = 0] = "MAIN";
        _0x4a74a0[_0x4a74a0.DASHBOARD = 1] = "DASHBOARD";
      })(_0x58510f ||= {});
      (function (_0x35906d) {
        _0x35906d[_0x35906d.V2BOARD = 0] = "V2BOARD";
        _0x35906d[_0x35906d.SSPANEL_UIM = 1] = "SSPANEL_UIM";
      })(_0x278663 ||= {});
      var _0x5e3c2f = _0x4605ff(21248);
      var _0x404853 = _0x4605ff(42287);
      const _0x76923c = _0x4605ff(75108);
      _0x404853.Ay.use(_0x76923c).init({
        fallbackLng: "en",
        resources: {
          en: {
            translation: {
              Login: "Login",
              Welcome: "Welcome",
              Password: "Password",
              Username: "Username",
              "Forgot password?": "Forgot password?",
              "Don't have an account?": "Don't have an account?",
              Register: "Register",
              "Password mismatch": "Password mismatch",
              "Signup successfully": "Signup successfully",
              "Create Account": "Create Account",
              Email: "Email",
              Send: "Send",
              "Verification code": "Verification code",
              "Confirm Password": "Confirm Password",
              "Invitation code": "Invitation code",
              "Sign Up": "Sign Up",
              Optional: "Optional",
              "Already have an account?": "Already have an account?",
              "Reset successfully": "Reset successfully",
              "Reset Password": "Reset Password",
              "New password": "New password",
              Cancel: "Cancel",
              Reset: "Reset",
              Days: "Days",
              "Subscribe to enjoy the uncensored internet": "Subscribe to enjoy the uncensored internet",
              "Subscribe Now": "Subscribe Now",
              left: "left",
              Used: "Used",
              "Expires in": "Expires in",
              Server: "Server",
              Switch: "Switch",
              "Proxy Mode": "Proxy Mode",
              "Select Node": "Select Node",
              Subscribe: "Subscribe",
              Home: "Home",
              Profile: "Profile",
              Settings: "Settings",
              Dashboard: "Dashboard",
              Connect: "Connect",
              Connecting: "Connecting",
              Disconnect: "Disconnect",
              "No Subscription": "No Subscription",
              "My Subscription": "My Subscription",
              Renew: "Renew",
              Month: "Month",
              dayOfReset: "Your data usage will reset in {{dayOfReset}} days.",
              "My Account": "My Account",
              "Log out": "Log out",
              "My Orders": "My Orders",
              Account: "Account",
              Invitation: "Invitation",
              Copy: "Copy",
              Wallet: "Wallet",
              "Join Telegram Group": "Join Telegram Group",
              "To enable TUN mode in macOS": "To enable TUN mode in macOS, administrator privilege must be granted. Continue?",
              "To enable TUN mode in Windows": "To enable TUN mode in Windows, UAC privilege must be granted. Continue?",
              Continue: "Continue",
              Language: "Language",
              Port: "Port",
              "TUN Mode": "TUN Mode",
              "TUN mode requires administrator": "TUN mode requires administrator privileges and can proxy all the traffics originated from this computer",
              "Run on Startup": "Run on Startup",
              Subscription: "Subscription",
              Update: "Update",
              "All rights reserved": "All rights reserved",
              About: "About",
              "Subscription updated": "Subscription updated",
              "Failed to update subscription": "Failed to update subscription",
              "Failed to reload config": "Failed to reload config",
              "Failed to download subscription": "Failed to download subscription",
              Warning: "Warning",
              "Please beware that": "Please beware that changing the subscription type will cause the old subscription to be overwritten by the new one.",
              Confirm: "Confirm",
              "Terms of use": "Terms of use",
              Announcement: "Announcement",
              "No announcement": "No announcement",
              Pending: "Pending",
              Cancelled: "Cancelled",
              Completed: "Completed",
              Pay: "Pay",
              Paid: "Paid",
              "order number has been copied": "order number has been copied to the clipboard",
              "Change successfully": "Change successfully",
              "Change Password": "Change Password",
              "Old password": "Old password",
              "Order cancelled": "Order cancelled",
              "Payment completed": "Payment completed",
              "Order Payment": "Order Payment",
              Product: "Product",
              Price: "Price",
              Balance: "Balance",
              Coupon: "Coupon",
              "Processing fee": "Processing fee",
              "Scan To Pay": "Scan To Pay",
              "Service Unavailable": "Service Unavailable",
              "Network server connection failed": "Network server connection failed, please contact the customer service.",
              "Got it": "Got it",
              "Software Updating ...": "Software Updating ...",
              "Got a coupon?": "Got a coupon?",
              Verify: "Verify",
              "Confirm Order": "Confirm Order",
              "Speed test": "Speed test",
              "Copied to clipboard": "Copied to clipboard",
              Active: "Active",
              Filter: "Filter",
              processName: "Process Name",
              policy: "Policy",
              traffic: "Traffic",
              up: "Up",
              down: "Down",
              duration: "Duration",
              status: "Status",
              method: "Method",
              host: "Host",
              "Privilege require": "Privilege require",
              month_price: "Monthly",
              quarter_price: "Quarterly",
              half_year_price: "Semiannually",
              year_price: "Annual",
              two_year_price: "2 Years",
              three_year_price: "3 Years",
              onetime_price: "One-off",
              "Show Main Window": "Show Main Window",
              Connected: "Connected",
              "Outbound Mode": "Outbound Mode",
              "Proxy Groups": "Policy Groups",
              "Copy Shell Export Command": "Copy Shell Export Command",
              "Uninstall Tun Service": "Uninstall Tun Service",
              Quit: "Quit",
              "To update the existing TUN service": "To update the existing TUN service, administrator privilege must be granted. Continue?",
              "Route traffic according to the rules": "Route traffic according to the rules",
              "All the traffic is routed to the proxy server": "All the traffic is routed to the proxy server",
              "All requests will be sent to the target directly": "All requests will be sent to the target directly",
              "Created at": "Created at",
              "Order ID": "Order ID",
              Back: "Back",
              "Having questions regarding your account?": "Having questions regarding your account?",
              "Contact us": "Contact us",
              "Update Subscription": "Update Subscription",
              "Check for Update": "Check for Update",
              "Traffic Cycle": "Traffic Cycle",
              "No result": "No result",
              "Keyword \"{{name}}\" not found, please check and try again": "Keyword \"{{name}}\" not found, please check and try again",
              "The license associated with this product is expired": "The license associated with this product is expired\": \"The license associated with this product is expired. Please contact the provider.",
              "Too many active users": "Too many active users. Please contact the provider.",
              "Please wait": "Please wait",
              Permanent: "Permanent",
              Rule: "Rule",
              Global: "Global",
              Direct: "Direct",
              "The invitation code has been copied to the clipboard": "The invitation code has been copied to the clipboard",
              Checking: "Checking",
              Remove: "Remove",
              "Customer Service": "Customer Service",
              "Enter your question here": "Enter your question here",
              reset_price: "Reset",
              "Reset Quota": "Reset Quota",
              Failed: "Failed",
              "Update Available": "Update Available",
              "A new version has been released": "A new version ({{version}}) has been released. Would you like to update now?",
              "Querying for valid backends, please wait": "Querying for valid backends, please wait",
              "Open official website": "Open official website",
              "Valid until": "Valid until",
              "Select Plan": "Select Plan",
              Open: "Open",
              Invoice: "Invoice",
              "Invoice has been created": "Invoice {{id}} has been created, proceed to pay in the official website please.",
              "Renew the current subscription": "Renew the current subscription",
              "Downloading subscription": "Downloading subscription",
              "Show Tray Speed": "Show Tray Speed",
              "Subscription Expiring Soon": "Subscription Expiring Soon",
              "Your subscription will expire in {{days}} days. Please renew to avoid service interruption.": "Your subscription will expire in {{days}} days. Please renew to avoid service interruption.",
              "Traffic Quota Low": "Traffic Quota Low",
              "You have less than 5% of your traffic quota remaining. Please consider upgrading your plan.": "You have less than 5% of your traffic quota remaining. Please consider upgrading your plan.",
              OK: "OK",
              Store: "Store",
              "No group configured": "No group configured",
              Refresh: "Refresh",
              "Refreshing subscription": "Refreshing subscription",
              "Subscription refreshed": "Subscription refreshed",
              "Failed to refresh subscription": "Failed to refresh subscription",
              "System Time Error": "System Time Error",
              "Your system time appears to be inaccurate, which may cause connection issues. Please sync your system clock.": "Your system time appears to be inaccurate, which may cause connection issues. Please sync your system clock."
            }
          },
          "zh-CN": {
            translation: {
              Login: "登录",
              Welcome: "欢迎",
              Password: "密码",
              Username: "用户名",
              "Forgot password?": "忘记密码？",
              "Don't have an account?": "没有账号？",
              Register: "注册",
              "Password mismatch": "密码不一致",
              "Signup successfully": "注册成功",
              "Create Account": "创建账号",
              Email: "邮箱",
              Send: "发送",
              "Verification code": "验证码",
              "Confirm Password": "确认密码",
              "Invitation code": "邀请码",
              "Sign Up": "注册",
              Optional: "可选",
              "Already have an account?": "已经有账号？",
              "Reset successfully": "重置成功",
              "Reset Password": "找回密码",
              "New password": "新密码",
              Cancel: "取消",
              Reset: "重置",
              Days: "天",
              "Subscribe to enjoy the uncensored internet": "订阅享受无限制的互联网",
              "Subscribe Now": "立即订阅",
              left: "可用",
              Used: "已用",
              "Expires in": "有效期",
              Server: "服务器",
              Switch: "切换",
              "Proxy Mode": "代理模式",
              "Select Node": "选择节点",
              Subscribe: "订阅",
              Home: "首页",
              Profile: "个人中心",
              Settings: "设置",
              Dashboard: "仪表盘",
              Connect: "连接",
              Connecting: "连接中",
              Disconnect: "断开连接",
              "No Subscription": "无订阅",
              "My Subscription": "我的订阅",
              Renew: "续订",
              Month: "月",
              dayOfReset: "您的流量将在{{dayOfReset}}天后重置。",
              "My Account": "我的账户",
              "Log out": "退出登录",
              "My Orders": "我的订单",
              Account: "账户",
              Invitation: "邀请",
              Copy: "复制",
              Wallet: "钱包",
              "Join Telegram Group": "加入Telegram群组",
              "To enable TUN mode in macOS": "在macOS中启用TUN模式，需要管理员权限。是否继续？",
              "To enable TUN mode in Windows": "在Windows中启用TUN模式，需要UAC权限。是否继续？",
              Continue: "继续",
              Language: "语言",
              Port: "端口",
              "TUN Mode": "TUN模式",
              "TUN mode requires administrator": "TUN模式需要管理员权限，可以代理此电脑上所有流量",
              "Run on Startup": "开机启动",
              Subscription: "订阅",
              Update: "更新",
              "All rights reserved": "版权所有",
              About: "关于",
              "Subscription updated": "订阅已更新",
              "Failed to update subscription": "订阅更新失败",
              "Failed to reload config": "配置重载失败",
              "Failed to download subscription": "订阅下载失败",
              Warning: "警告",
              "Please beware that": "请注意，更改订阅类型将导致旧订阅被新订阅覆盖。",
              Confirm: "确认",
              "Terms of use": "使用条款",
              Announcement: "公告",
              "No announcement": "暂无公告",
              Pending: "待支付",
              Cancelled: "已取消",
              Completed: "已完成",
              Pay: "支付",
              Paid: "已付款",
              "order number has been copied": "订单号已复制到剪贴板",
              "Change successfully": "更改成功",
              "Change Password": "修改密码",
              "Old password": "旧密码",
              "Order cancelled": "订单已取消",
              "Payment completed": "支付已完成",
              "Order Payment": "订单支付",
              Product: "产品",
              Price: "价格",
              Balance: "余额",
              Coupon: "优惠券",
              "Processing fee": "手续费",
              "Scan To Pay": "扫码支付",
              "Service Unavailable": "服务不可用",
              "Network server connection failed": "网络服务器连接失败，请联系客服。",
              "Got it": "知道了",
              "Software Updating ...": "软件更新中...",
              "Got a coupon?": "有优惠券？",
              Verify: "验证",
              "Confirm Order": "确认订单",
              "Speed test": "延迟测试",
              "Copied to clipboard": "已复制到剪贴板",
              Active: "活动",
              Filter: "筛选",
              processName: "进程名称",
              policy: "策略",
              traffic: "流量",
              up: "上行",
              down: "下行",
              duration: "持续时间",
              status: "状态",
              method: "方法",
              host: "主机",
              "Privilege require": "需要权限",
              month_price: "月付",
              quarter_price: "季付",
              half_year_price: "半年付",
              year_price: "年付",
              two_year_price: "两年付",
              three_year_price: "三年付",
              onetime_price: "一次性",
              "Show Main Window": "显示主窗口",
              Connected: "已连接",
              "Outbound Mode": "出站模式",
              "Proxy Groups": "策略组",
              "Copy Shell Export Command": "复制Shell Export命令",
              "Uninstall Tun Service": "卸载Tun服务",
              Quit: "退出",
              "To update the existing TUN service": "要更新现有的TUN服务，必须授予管理员权限。继续吗？",
              "Route traffic according to the rules": "根据规则路由流量",
              "All the traffic is routed to the proxy server": "所有流量都路由到代理服务器",
              "All requests will be sent to the target directly": "所有请求将直接发送到目标",
              "Created at": "创建于",
              "Order ID": "订单 ID",
              Back: "返回",
              "Having questions regarding your account?": "关于您的帐户有疑问吗？",
              "Contact us": "联系我们",
              "Update Subscription": "更新订阅",
              "Check for Update": "检查更新",
              "Traffic Cycle": "流量周期",
              "No result": "没有结果",
              "Keyword \"{{name}}\" not found, please check and try again": "关键词 “{{name}}” 未找到，请检查后重试",
              "The license associated with this product is expired": "与该产品关联的许可已过期。请联系提供商。",
              "Too many active users": "客户端活跃用户过多。请联系提供商。",
              "The new version has started downloading.": "新版本已开始下载。",
              "There are no new versions available.": "当前没有新版本。",
              "Please wait": "请等待",
              Permanent: "长期套餐",
              Rule: "规则",
              Global: "全局",
              Direct: "直连",
              "The invitation code has been copied to the clipboard": "邀请码已复制到剪贴板",
              Checking: "验证",
              Remove: "移除",
              "Customer Service": "客服",
              "Enter your question here": "在此输入您的问题",
              reset_price: "重置",
              "Reset Quota": "重置额度",
              Failed: "超时",
              "Update Available": "有更新",
              "A new version has been released": "新版本({{version}})已发布。您现在想要更新吗？",
              "Querying for valid backends, please wait": "正在查询有效的后端，请等待",
              "Open official website": "打开官网",
              "Valid until": "有效期至",
              "Select Plan": "选择套餐",
              Open: "打开",
              Invoice: "发票",
              "Invoice has been created": "账单 {{id}} 已创建，请前往官网进行支付。",
              "Renew the current subscription": "续订当前订阅",
              "Downloading subscription": "正在下载订阅",
              "Show Tray Speed": "显示托盘网速",
              "Subscription Expiring Soon": "订阅即将到期",
              "Your subscription will expire in {{days}} days. Please renew to avoid service interruption.": "您的订阅将在{{days}}天后到期。请续订以避免服务中断。",
              "Traffic Quota Low": "流量配额不足",
              "You have less than 5% of your traffic quota remaining. Please consider upgrading your plan.": "您的流量配额剩余不足5%。请考虑升级您的套餐。",
              OK: "确定",
              Store: "商店",
              "No group configured": "未配置群组",
              Refresh: "更新订阅",
              "Refreshing subscription": "正在更新订阅",
              "Subscription refreshed": "订阅已更新",
              "Failed to refresh subscription": "更新订阅失败",
              "System Time Error": "系统时间异常",
              "Your system time appears to be inaccurate, which may cause connection issues. Please sync your system clock.": "您的系统时间与标准时间偏差超过1分钟，可能导致连接异常。请校准系统时钟。"
            }
          },
          "zh-HK": {
            translation: {
              Login: "登入",
              Welcome: "歡迎",
              Password: "密碼",
              Username: "用戶名",
              "Forgot password?": "忘記密碼？",
              "Don't have an account?": "還沒有帳戶？",
              Register: "註冊",
              "Password mismatch": "密碼不符",
              "Signup successfully": "註冊成功",
              "Create Account": "建立帳戶",
              Email: "電郵",
              Send: "發送",
              "Verification code": "驗證碼",
              "Confirm Password": "確認密碼",
              "Invitation code": "邀請碼",
              "Sign Up": "註冊",
              Optional: "選填",
              "Already have an account?": "已有帳戶？",
              "Reset successfully": "重設成功",
              "Reset Password": "重設密碼",
              "New password": "新密碼",
              Cancel: "取消",
              Reset: "重設",
              Days: "天",
              "Subscribe to enjoy the uncensored internet": "訂閱以享受無刪減的互聯網",
              "Subscribe Now": "立即訂閱",
              left: "剩餘",
              Used: "已用",
              "Expires in": "有效期至",
              Server: "伺服器",
              Switch: "切換",
              "Proxy Mode": "代理模式",
              "Select Node": "選擇節點",
              Subscribe: "訂閱",
              Home: "主頁",
              Profile: "個人檔案",
              Settings: "設定",
              Dashboard: "儀表板",
              Connect: "連接",
              Connecting: "連接中",
              Disconnect: "斷開連接",
              "No Subscription": "暫無訂閱",
              "My Subscription": "我的訂閱",
              Renew: "續訂",
              Month: "月",
              dayOfReset: "您的數據使用將在{{dayOfReset}}天後重置。",
              "My Account": "我的帳戶",
              "Log out": "登出",
              "My Orders": "我的訂單",
              Account: "帳戶",
              Invitation: "邀請",
              Copy: "複製",
              Wallet: "錢包",
              "Join Telegram Group": "加入Telegram群組",
              "To enable TUN mode in macOS": "在 macOS 中啟用 TUN 模式，需要管理員權限。是否繼續？",
              "To enable TUN mode in Windows": "在 Windows 中啟用 TUN 模式，需要 UAC 權限。是否繼續？",
              Continue: "繼續",
              Language: "語言",
              Port: "端口",
              "TUN Mode": "TUN模式",
              "TUN mode requires administrator": "TUN模式需要管理員權限，可以代理此電腦上所有流量",
              "Run on Startup": "開機啟動",
              Subscription: "訂閱",
              Update: "更新",
              "All rights reserved": "版權所有",
              About: "關於",
              "Subscription updated": "訂閱已更新",
              "Failed to update subscription": "訂閱更新失敗",
              "Failed to reload config": "配置重載失敗",
              "Failed to download subscription": "訂閱下載失敗",
              Warning: "警告",
              "Please beware that": "請注意，更改訂閱類型將導致舊訂閱被新訂閱覆蓋。",
              Confirm: "確認",
              "Terms of use": "使用條款",
              Announcement: "公告",
              "No announcement": "暫無公告",
              Pending: "待付款",
              Cancelled: "已取消",
              Completed: "已完成",
              Pay: "付款",
              Paid: "已付款",
              "order number has been copied": "訂單號已複製到剪貼簿",
              "Change successfully": "更改成功",
              "Change Password": "更改密碼",
              "Old password": "舊密碼",
              "Order cancelled": "訂單已取消",
              "Payment completed": "付款已完成",
              "Order Payment": "訂單付款",
              Product: "產品",
              Price: "價格",
              Balance: "餘額",
              Coupon: "優惠券",
              "Processing fee": "手續費",
              "Scan To Pay": "掃描付款",
              "Service Unavailable": "服務不可用",
              "Network server connection failed": "網絡伺服器連接失敗，請聯繫客服。",
              "Got it": "知道了",
              "Software Updating ...": "軟件更新中...",
              "Got a coupon?": "有優惠券？",
              Verify: "驗證",
              "Confirm Order": "確認訂單",
              "Speed test": "速度測試",
              "Copied to clipboard": "已複製到剪貼簿",
              Active: "活動",
              Filter: "篩選",
              processName: "進程名稱",
              policy: "策略",
              traffic: "流量",
              up: "上行",
              down: "下行",
              duration: "持續時間",
              status: "狀態",
              method: "方法",
              host: "主機",
              "Privilege require": "需要權限",
              month_price: "每月",
              quarter_price: "季度",
              half_year_price: "半年",
              year_price: "年度",
              two_year_price: "兩年",
              three_year_price: "三年",
              onetime_price: "一次性",
              "Show Main Window": "顯示主窗口",
              Connected: "已連線",
              "Outbound Mode": "出站模式",
              "Proxy Groups": "策略組",
              "Copy Shell Export Command": "複製Shell Export命令",
              "Uninstall Tun Service": "卸載Tun服務",
              Quit: "退出",
              "To update the existing TUN service": "更新依家嘅TUN服務需要管理員權限，繼續嗎？",
              "Route traffic according to the rules": "根據規則路由流量",
              "All the traffic is routed to the proxy server": "所有流量都路由到代理伺服器",
              "All requests will be sent to the target directly": "所有請求將直接發送到目標",
              "Created at": "創建於",
              "Order ID": "訂單編號",
              Back: "返回",
              "Having questions regarding your account?": "關於您的帳戶有疑問嗎？",
              "Contact us": "聯繫我們",
              "Update Subscription": "更新訂閱",
              "Check for Update": "檢查更新",
              "Traffic Cycle": "流量週期",
              "No result": "冇結果",
              "Keyword \"{{name}}\" not found, please check and try again": "搵唔到關鍵字 \"{{name}}\"，請檢查後再試",
              "The license associated with this product is expired": "與該產品關聯的許可證已過期。請聯繫提供商。",
              "Too many active users": "客戶端活躍用戶過多。請聯繫提供商。",
              "The new version has started downloading.": "新版本已開始下載。",
              "There are no new versions available.": "現時沒有新版本。",
              "Please wait": "請等待",
              Permanent: "長期套餐",
              Rule: "規則",
              Global: "全局",
              Direct: "直連",
              "The invitation code has been copied to the clipboard": "邀請碼已複製到剪貼板",
              Checking: "驗證",
              Remove: "移除",
              "Customer Service": "客戶服務",
              "Enter your question here": "在此輸入您的問題",
              reset_price: "重置",
              "Reset Quota": "重置配額",
              Failed: "失敗",
              "Update Available": "有更新",
              "A new version has been released": "新版本({{version}})已發布。您現在想要更新嗎？",
              "Querying for valid backends, please wait": "正在查詢有效的後端，請等待",
              "Open official website": "打開官網",
              "Valid until": "有效期至",
              "Select Plan": "選擇計劃",
              Open: "開啟",
              Invoice: "發票",
              "Invoice has been created": "發票 {{id}} 已創建，請前往官網進行支付。",
              "Renew the current subscription": "續訂當前訂閱",
              "Downloading subscription": "正在下載訂閱",
              "Show Tray Speed": "顯示托盤網速",
              "Subscription Expiring Soon": "訂閱即將到期",
              "Your subscription will expire in {{days}} days. Please renew to avoid service interruption.": "您的訂閱將在{{days}}天後到期。請續訂以避免服務中斷。",
              "Traffic Quota Low": "流量配額不足",
              "You have less than 5% of your traffic quota remaining. Please consider upgrading your plan.": "您的流量配額剩餘不足5%。請考慮升級您的套餐。",
              OK: "確定",
              Store: "商店",
              "No group configured": "未配置群組",
              Refresh: "更新訂閱",
              "Refreshing subscription": "正在更新訂閱",
              "Subscription refreshed": "訂閱已更新",
              "Failed to refresh subscription": "更新訂閱失敗",
              "System Time Error": "系統時間異常",
              "Your system time appears to be inaccurate, which may cause connection issues. Please sync your system clock.": "您的系統時間與標準時間偏差超過1分鐘，可能導致連線異常。請校準系統時鐘。"
            }
          },
          "zh-TW": {
            translation: {
              Login: "登入",
              Welcome: "歡迎",
              Password: "密碼",
              Username: "使用者名稱",
              "Forgot password?": "忘記密碼？",
              "Don't have an account?": "尚未註冊帳號？",
              Register: "註冊",
              "Password mismatch": "密碼不符",
              "Signup successfully": "成功註冊",
              "Create Account": "創建帳號",
              Email: "電郵地址",
              Send: "發送",
              "Verification code": "驗證碼",
              "Confirm Password": "確認密碼",
              "Invitation code": "邀請碼",
              "Sign Up": "註冊",
              Optional: "選填",
              "Already have an account?": "已經有帳號了？",
              "Reset successfully": "重設成功",
              "Reset Password": "重設密碼",
              "New password": "新密碼",
              Cancel: "取消",
              Reset: "重設",
              Days: "天",
              "Subscribe to enjoy the uncensored internet": "訂閱以享受無禁制的網路",
              "Subscribe Now": "立即訂閱",
              left: "剩餘",
              Used: "已用",
              "Expires in": "過期時間",
              Server: "伺服器",
              Switch: "切換",
              "Proxy Mode": "代理模式",
              "Select Node": "選擇節點",
              Subscribe: "訂閱",
              Home: "首頁",
              Profile: "個人資料",
              Settings: "設定",
              Dashboard: "儀表板",
              Connect: "連接",
              Connecting: "連接中",
              Disconnect: "斷開連接",
              "No Subscription": "尚無訂閱",
              "My Subscription": "我的訂閱",
              Renew: "續訂",
              Month: "月",
              dayOfReset: "您的數據使用將在{{dayOfReset}}天後重置。",
              "My Account": "我的帳號",
              "Log out": "登出",
              "My Orders": "我的訂單",
              Account: "帳號",
              Invitation: "邀請",
              Copy: "複製",
              Wallet: "錢包",
              "Join Telegram Group": "加入Telegram群組",
              "To enable TUN mode in macOS": "啟用 macOS 中的 TUN 模式需要管理員權限。是否繼續？",
              "To enable TUN mode in Windows": "啟用 Windows 中的 TUN 模式需要 UAC 權限。是否繼續？",
              Continue: "繼續",
              Language: "語言",
              Port: "埠",
              "TUN Mode": "TUN 模式",
              "TUN mode requires administrator": "TUN 模式需要管理員權限，可以代理此電腦上所有流量",
              "Run on Startup": "啟動時自動運行",
              Subscription: "訂閱",
              Update: "更新",
              "All rights reserved": "版權所有",
              About: "關於",
              "Subscription updated": "訂閱已更新",
              "Failed to update subscription": "訂閱更新失敗",
              "Failed to reload config": "配置重載失敗",
              "Failed to download subscription": "訂閱下載失敗",
              Warning: "警告",
              "Please beware that": "請注意，更改訂閱類型將導致舊訂閱被新訂閱覆蓋。",
              Confirm: "確認",
              "Terms of use": "使用條款",
              Announcement: "公告",
              "No announcement": "暫無公告",
              Pending: "待處理",
              Cancelled: "已取消",
              Completed: "已完成",
              Pay: "支付",
              Paid: "已支付",
              "order number has been copied": "訂單號已複製到剪貼簿",
              "Change successfully": "修改成功",
              "Change Password": "修改密碼",
              "Old password": "舊密碼",
              "Order cancelled": "訂單已取消",
              "Payment completed": "支付已完成",
              "Order Payment": "訂單支付",
              Product: "產品",
              Price: "價格",
              Balance: "餘額",
              Coupon: "優惠券",
              "Processing fee": "手續費",
              "Scan To Pay": "掃碼支付",
              "Service Unavailable": "服務不可用",
              "Network server connection failed": "網路伺服器連接失敗，請聯繫客服。",
              "Got it": "知道了",
              "Software Updating ...": "軟體更新中...",
              "Got a coupon?": "有優惠券嗎？",
              Verify: "驗證",
              "Confirm Order": "確認訂單",
              "Speed test": "速度測試",
              "Copied to clipboard": "已複製到剪貼簿",
              Active: "活動",
              Filter: "篩選",
              processName: "進程名稱",
              policy: "策略",
              traffic: "流量",
              up: "上傳",
              down: "下載",
              duration: "持續時間",
              status: "狀態",
              method: "方法",
              host: "主機",
              "Privilege require": "需要特權",
              month_price: "每月",
              quarter_price: "季度",
              half_year_price: "半年",
              year_price: "年度",
              two_year_price: "兩年",
              three_year_price: "三年",
              onetime_price: "一次性",
              "Show Main Window": "顯示主視窗",
              Connected: "已連線",
              "Outbound Mode": "出站模式",
              "Proxy Groups": "策略群組",
              "Copy Shell Export Command": "複製Shell Export指令",
              "Uninstall Tun Service": "解除Tun服務",
              Quit: "結束",
              "To update the existing TUN service": "要更新現有的TUN服務，必須授予管理員權限。繼續嗎？",
              "Route traffic according to the rules": "根據規則路由流量",
              "All the traffic is routed to the proxy server": "所有流量都路由到代理伺服器",
              "All requests will be sent to the target directly": "所有請求將直接傳送到目標",
              "Created at": "建立於",
              "Order ID": "訂單 ID",
              Back: "返回",
              "Having questions regarding your account?": "關於您的帳戶有疑問嗎？",
              "Contact us": "聯繫我們",
              "Update Subscription": "更新訂閱",
              "Check for Update": "檢查更新",
              "Traffic Cycle": "流量周期",
              "No result": "無結果",
              "Keyword \"{{name}}\" not found, please check and try again": "關鍵字 \"{{name}}\" 找無，請檢查後重試",
              "The license associated with this product is expired": "與該產品關聯的許可證已過期。請聯繫提供商。",
              "Too many active users": "客戶端活躍使用者過多。請聯繫提供商。",
              "The new version has started downloading.": "新版本已開始下載。",
              "There are no new versions available.": "目前沒有新版本。",
              "Please wait": "請等待",
              Permanent: "長期套餐",
              Rule: "規則",
              Global: "全局",
              Direct: "直連",
              "The invitation code has been copied to the clipboard": "邀請碼已複製到剪貼板",
              Checking: "驗證",
              Remove: "移除",
              "Customer Service": "客戶服務",
              "Enter your question here": "在此輸入您的問題",
              reset_price: "重置",
              "Reset Quota": "重置配額",
              Failed: "失敗",
              "Update Available": "有更新",
              "A new version has been released": "新版本({{version}})已發布。您現在想要更新嗎？",
              "Querying for valid backends, please wait": "正在查詢有效的後端，請等待",
              "Open official website": "開啟官網",
              "Valid until": "有效期至",
              "Select Plan": "選擇方案",
              Open: "開啟",
              Invoice: "發票",
              "Invoice has been created": "發票 {{id}} 已創建，請前往官網進行支付。",
              "Renew the current subscription": "續訂當前訂閱",
              "Downloading subscription": "正在下載訂閱",
              "Show Tray Speed": "顯示托盤網速",
              "Subscription Expiring Soon": "訂閱即將到期",
              "Your subscription will expire in {{days}} days. Please renew to avoid service interruption.": "您的訂閱將在{{days}}天後到期。請續訂以避免服務中斷。",
              "Traffic Quota Low": "流量配額不足",
              "You have less than 5% of your traffic quota remaining. Please consider upgrading your plan.": "您的流量配額剩餘不足5%。請考慮升級您的方案。",
              OK: "確定",
              Store: "商店",
              "No group configured": "未配置群組",
              Refresh: "更新訂閱",
              "Refreshing subscription": "正在更新訂閱",
              "Subscription refreshed": "訂閱已更新",
              "Failed to refresh subscription": "更新訂閱失敗",
              "System Time Error": "系統時間異常",
              "Your system time appears to be inaccurate, which may cause connection issues. Please sync your system clock.": "您的系統時間與標準時間偏差超過1分鐘，可能導致連線異常。請校準系統時鐘。"
            }
          },
          ja: {
            translation: {
              Login: "ログイン",
              Welcome: "ようこそ",
              Password: "パスワード",
              Username: "ユーザー名",
              "Forgot password?": "パスワードをお忘れですか？",
              "Don't have an account?": "アカウントをお持ちでない方はこちら",
              Register: "登録",
              "Password mismatch": "パスワードが一致しません",
              "Signup successfully": "登録が完了しました",
              "Create Account": "アカウントを作成",
              Email: "メールアドレス",
              Send: "送信",
              "Verification code": "認証コード",
              "Confirm Password": "パスワードを再度入力",
              "Invitation code": "招待コード",
              "Sign Up": "登録",
              Optional: "任意",
              "Already have an account?": "すでにアカウントをお持ちですか？",
              "Reset successfully": "リセットが完了しました",
              "Reset Password": "パスワードをリセット",
              "New password": "新しいパスワード",
              Cancel: "キャンセル",
              Reset: "リセット",
              Days: "日",
              "Subscribe to enjoy the uncensored internet": "サブスクライブして検閲のないインターネットをお楽しみください",
              "Subscribe Now": "今すぐサブスクライブ",
              left: "残り",
              Used: "使用済み",
              "Expires in": "有効期限",
              Server: "サーバー",
              Switch: "切り替え",
              "Proxy Mode": "プロキシモード",
              "Select Node": "ノードを選択",
              Subscribe: "サブスクライブ",
              Home: "ホーム",
              Profile: "プロフィール",
              Settings: "設定",
              Dashboard: "ダッシュボード",
              Connect: "接続",
              Connecting: "接続中",
              Disconnect: "切断",
              "No Subscription": "サブスクリプションなし",
              "My Subscription": "私のサブスクリプション",
              Renew: "更新",
              Month: "月",
              dayOfReset: "あなたのデータ使用は{{dayOfReset}}日後にリセットされます。",
              "My Account": "アカウント",
              "Log out": "ログアウト",
              "My Orders": "私の注文",
              Account: "アカウント",
              Invitation: "招待",
              Copy: "コピー",
              Wallet: "ウォレット",
              "Join Telegram Group": "Telegramグループに参加",
              "To enable TUN mode in macOS": "macOSでTUNモードを有効にするには、管理者権限が必要です。続行しますか？",
              "To enable TUN mode in Windows": "WindowsでTUNモードを有効にするには、UAC権限が必要です。続行しますか？",
              Continue: "続ける",
              Language: "言語",
              Port: "ポート",
              "TUN Mode": "TUNモード",
              "TUN mode requires administrator": "TUNモードを使用するには、管理者権限が必要で、このコンピューターから発信されたすべてのトラフィックをプロキシできます。",
              "Run on Startup": "起動時に実行する",
              Subscription: "サブスクリプション",
              Update: "更新",
              "All rights reserved": "全著作権所有",
              About: "について",
              "Subscription updated": "サブスクリプションが更新されました",
              "Failed to update subscription": "サブスクリプションの更新に失敗しました",
              "Failed to reload config": "設定の再読み込みに失敗しました",
              "Failed to download subscription": "サブスクリプションのダウンロードに失敗しました",
              Warning: "警告",
              "Please beware that": "サブスクリプションの種類を変更すると、古いサブスクリプションが新しいサブスクリプションに上書きされる可能性があることに注意してください。",
              Confirm: "確認",
              "Terms of use": "利用規約",
              Announcement: "お知らせ",
              "No announcement": "お知らせはありません",
              Pending: "未完了",
              Cancelled: "キャンセル済み",
              Completed: "完了済み",
              Pay: "支払う",
              Paid: "支払い済み",
              "order number has been copied": "注文番号がクリップボードにコピーされました",
              "Change successfully": "変更が成功しました",
              "Change Password": "パスワードを変更",
              "Old password": "現在のパスワード",
              "Order cancelled": "注文がキャンセルされました",
              "Payment completed": "支払いが完了しました",
              "Order Payment": "注文の支払い",
              Product: "製品",
              Price: "価格",
              Balance: "残高",
              Coupon: "クーポン",
              "Processing fee": "手数料",
              "Scan To Pay": "支払うためにスキャン",
              "Service Unavailable": "サービスが利用できません",
              "Network server connection failed": "ネットワークサーバーに接続できませんでした。カスタマーサポートにお問い合わせください。",
              "Got it": "了解",
              "Software Updating ...": "ソフトウェアを更新中...",
              "Got a coupon?": "クーポンをお持ちですか？",
              Verify: "検証",
              "Confirm Order": "注文を確認",
              "Speed test": "スピードテスト",
              "Copied to clipboard": "クリップボードにコピーされました",
              Active: "アクティブ",
              Filter: "フィルター",
              processName: "プロセス名",
              policy: "ポリシー",
              traffic: "トラフィック",
              up: "上り",
              down: "下り",
              duration: "期間",
              status: "ステータス",
              method: "メソッド",
              host: "ホスト",
              "Privilege require": "権限が必要です",
              month_price: "毎月",
              quarter_price: "四半期",
              half_year_price: "半年毎",
              year_price: "毎年",
              two_year_price: "2年",
              three_year_price: "3年",
              onetime_price: "一度きりの",
              "Show Main Window": "メインウィンドウを表示する",
              Connected: "接続済み",
              "Outbound Mode": "アウトバウンドモード",
              "Proxy Groups": "ポリシーグループ",
              "Copy Shell Export Command": "Shellエクスポートコマンドをコピーする",
              "Uninstall Tun Service": "Tunサービスをアンインストールする",
              Quit: "終了する",
              "To update the existing TUN service": "既存のTUNサービスを更新するには、管理者権限が必要です。続けますか？",
              "Route traffic according to the rules": "ルールに従ってトラフィックをルーティングする",
              "All the traffic is routed to the proxy server": "すべてのトラフィックがプロキシサーバーにルーティングされます",
              "All requests will be sent to the target directly": "すべてのリクエストは直接対象に送信されます",
              "Created at": "作成日",
              "Order ID": "注文ID",
              Back: "戻る",
              "Having questions regarding your account?": "アカウントに関する質問がありますか？",
              "Contact us": "お問い合わせ",
              "Update Subscription": "サブスクリプションを更新",
              "Check for Update": "更新を確認",
              "Traffic Cycle": "トラフィックサイクル",
              "No result": "結果なし",
              "Keyword \"{{name}}\" not found, please check and try again": "キーワード \"{{name}}\" が見つかりません、確認してもう一度お試しください",
              "The license associated with this product is expired": "この製品に関連するライセンスは期限切れです。提供元にお問い合わせください。",
              "Too many active users": "クライアントのアクティブなユーザーが多すぎます。提供元にお問い合わせください。",
              "The new version has started downloading.": "新しいバージョンのダウンロードが始まりました。",
              "There are no new versions available.": "新しいバージョンはありません。",
              "Please wait": "お待ちください",
              Permanent: "長期パッケージ",
              Rule: "Rule",
              Global: "Global",
              Direct: "Direct",
              "The invitation code has been copied to the clipboard": "招待コードがクリップボードにコピーされました",
              Checking: "検証",
              Remove: "削除",
              "Customer Service": "カスタマーサービス",
              "Enter your question here": "ここに質問を入力してください",
              reset_price: "リセット",
              "Reset Quota": "クォータをリセット",
              Failed: "失敗",
              "Update Available": "更新可能",
              "A new version has been released": "新しいバージョン({{version}})がリリースされました。",
              "Querying for valid backends, please wait": "有効なバックエンドを照会中です、お待ちください",
              "Open official website": "公式ウェブサイトを開く",
              "Valid until": "有効期限",
              "Select Plan": "プランを選択",
              Open: "開く",
              Invoice: "請求書",
              "Invoice has been created": "請求書 {{id}} が作成されました。公式ウェブサイトで支払いを進めてください。",
              "Renew the current subscription": "現在のサブスクリプションを更新",
              "Downloading subscription": "サブスクリプションをダウンロード中",
              "Show Tray Speed": "トレイに速度を表示",
              "Subscription Expiring Soon": "サブスクリプションの有効期限が近づいています",
              "Your subscription will expire in {{days}} days. Please renew to avoid service interruption.": "サブスクリプションは{{days}}日後に期限切れになります。サービスの中断を避けるために更新してください。",
              "Traffic Quota Low": "トラフィッククォータが少なくなっています",
              "You have less than 5% of your traffic quota remaining. Please consider upgrading your plan.": "トラフィッククォータの残りが5%未満です。プランのアップグレードをご検討ください。",
              OK: "OK",
              Store: "ストア",
              "No group configured": "グループが設定されていません",
              Refresh: "更新",
              "Refreshing subscription": "サブスクリプションを更新中",
              "Subscription refreshed": "サブスクリプションが更新されました",
              "Failed to refresh subscription": "更新に失敗しました",
              "System Time Error": "システム時刻エラー",
              "Your system time appears to be inaccurate, which may cause connection issues. Please sync your system clock.": "システム時刻が不正確なため、接続に問題が発生する可能性があります。システム時刻を同期してください。"
            }
          },
          ko: {
            translation: {
              Login: "로그인",
              Welcome: "환영합니다",
              Password: "비밀번호",
              Username: "사용자 이름",
              "Forgot password?": "비밀번호를 잊으셨나요?",
              "Don't have an account?": "계정이 없으신가요?",
              Register: "등록",
              "Password mismatch": "비밀번호 불일치",
              "Signup successfully": "성공적으로 가입",
              "Create Account": "계정 생성",
              Email: "이메일",
              Send: "보내기",
              "Verification code": "인증 코드",
              "Confirm Password": "비밀번호 확인",
              "Invitation code": "초대 코드",
              "Sign Up": "가입",
              Optional: "선택 사항",
              "Already have an account?": "이미 계정이 있으신가요?",
              "Reset successfully": "성공적으로 재설정",
              "Reset Password": "비밀번호 재설정",
              "New password": "새 비밀번호",
              Cancel: "취소",
              Reset: "리셋",
              Days: "일",
              "Subscribe to enjoy the uncensored internet": "검열되지 않은 인터넷을 즐기려면 구독하세요",
              "Subscribe Now": "지금 구독하세요",
              left: "남음",
              Used: "데이터 현황",
              "Expires in": "잔여 기간",
              Server: "서버",
              Switch: "스위치",
              "Proxy Mode": "라우팅 모드",
              "Select Node": "서버 선택",
              Subscribe: "구독",
              Home: "홈",
              Profile: "프로필",
              Settings: "설정",
              Dashboard: "대시보드",
              Connect: "연결",
              Connecting: "연결 중",
              Disconnect: "연결 해제",
              "No Subscription": "구독 없음",
              "My Subscription": "내 구독",
              Renew: "갱신",
              Month: "월",
              dayOfReset: "데이터 사용량은 {{dayOfReset}}일 후에 초기화됩니다。",
              "My Account": "내 계정",
              "Log out": "로그 아웃",
              "My Orders": "나의 주문",
              Account: "계정",
              Invitation: "초대장",
              Copy: "복사",
              Wallet: "지갑",
              "Join Telegram Group": "텔레그램 그룹 가입",
              "To enable TUN mode in macOS": "macOS에서 TUN 모드를 사용하려면 관리자 권한이 필요합니다. 계속하시겠습니까?",
              "To enable TUN mode in Windows": "Windows에서 TUN 모드를 사용하려면 UAC 권한이 필요합니다. 계속하시겠습니까?",
              Continue: "계속",
              Language: "언어",
              Port: "포트",
              "TUN Mode": "TUN 모드",
              "TUN mode requires administrator": "TUN 모드는 관리자 권한이 필요하며 이 컴퓨터에서 생성된 모든 트래픽을 프록시로 전달할 수 있습니다.",
              "Run on Startup": "시작 프로그램 실행",
              Subscription: "구독",
              Update: "업데이트",
              "All rights reserved": "모든 권리 보유",
              About: "소개",
              "Subscription updated": "구독이 업데이트되었습니다",
              "Failed to update subscription": "구독 업데이트 실패",
              "Failed to reload config": "구성 다시 로드 실패",
              "Failed to download subscription": "구독 다운로드 실패",
              Warning: "경고",
              "Please beware that": "구독 유형을 변경하면 기존 구독이 새 구독으로 덮어씌워집니다.",
              Confirm: "확인",
              "Terms of use": "이용 약관",
              Announcement: "공지사항",
              "No announcement": "공지사항 없음",
              Pending: "대기 중",
              Cancelled: "취소됨",
              Completed: "완료됨",
              Pay: "결제",
              Paid: "결제됨",
              "order number has been copied": "주문 번호가 클립보드에 복사되었습니다",
              "Change successfully": "변경 성공",
              "Change Password": "비밀번호 변경",
              "Old password": "이전 비밀번호",
              "Order cancelled": "주문 취소됨",
              "Payment completed": "결제 완료",
              "Order Payment": "주문 결제",
              Product: "제품",
              Price: "가격",
              Balance: "잔액",
              Coupon: "쿠폰",
              "Processing fee": "처리 수수료",
              "Scan To Pay": "지불을 위해 스캔",
              "Service Unavailable": "서비스를 사용할 수 없음",
              "Network server connection failed": "네트워크 서버 연결 실패, 고객 서비스에 문의하십시오.",
              "Got it": "알겠습니다",
              "Software Updating ...": "소프트웨어 업데이트 중 ...",
              "Got a coupon?": "쿠폰이 있으세요?",
              Verify: "확인",
              "Confirm Order": "주문 확인",
              "Speed test": "속도 테스트",
              "Copied to clipboard": "클립보드에 복사됨",
              Active: "활성",
              Filter: "필터",
              processName: "프로세스 이름",
              policy: "정책",
              traffic: "트래픽",
              up: "업",
              down: "다운",
              duration: "지속 시간",
              status: "상태",
              method: "방법",
              host: "호스트",
              "Privilege require": "권한 필요",
              month_price: "월간",
              quarter_price: "분기",
              half_year_price: "반기",
              year_price: "연간",
              two_year_price: "2년",
              three_year_price: "3년",
              onetime_price: "일시불",
              "Show Main Window": "메인 창 표시",
              Connected: "연결됨",
              "Outbound Mode": "아웃바운드 모드",
              "Proxy Groups": "정책 그룹",
              "Copy Shell Export Command": "셸 내보내기 명령 복사",
              "Uninstall Tun Service": "Tun 서비스 제거",
              Quit: "종료",
              "To update the existing TUN service": "기존 TUN 서비스를 업데이트하려면 관리자 권한이 필요합니다. 계속하시겠습니까?",
              "Route traffic according to the rules": "규칙에 따라 트래픽 라우팅",
              "All the traffic is routed to the proxy server": "모든 트래픽이 프록시 서버로 라우팅됩니다",
              "All requests will be sent to the target directly": "모든 요청이 대상에 직접 전송됩니다",
              "Created at": "생성 시간",
              "Order ID": "주문 ID",
              Back: "뒤로",
              "Having questions regarding your account?": "계정에 관한 질문이 있으십니까?",
              "Contact us": "문의하기",
              "Update Subscription": "구독 업데이트",
              "Check for Update": "업데이트 확인",
              "Traffic Cycle": "트래픽 주기",
              "No result": "결과 없음",
              "Keyword \"{{name}}\" not found, please check and try again": "키워드 \"{{name}}\"을(를) 찾을 수 없습니다, 확인 후 다시 시도해주세요",
              "The license associated with this product is expired": "이 제품과 관련된 라이선스가 만료되었습니다. 공급업체에 문의하십시오.",
              "Too many active users": "클라이언트의 활성 사용자가 너무 많습니다. 공급업체에 문의하십시오.",
              "The new version has started downloading.": "새 버전 다운로드가 시작되었습니다.",
              "There are no new versions available.": "새 버전이 없습니다.",
              "Please wait": "기다려 주십시오",
              Permanent: "장기 패키지",
              Rule: "Rule",
              Global: "Global",
              Direct: "Direct",
              "The invitation code has been copied to the clipboard": "초대 코드가 클립보드에 복사되었습니다",
              Checking: "검증",
              Remove: "제거",
              "Customer Service": "고객 서비스",
              "Enter your question here": "여기에 질문을 입력하세요",
              reset_price: "리셋",
              "Reset Quota": "할당량 리셋",
              Failed: "실패",
              "Update Available": "업데이트 가능",
              "A new version has been released": "새 버전({{version}})이 출시되었습니다. 지금 업데이트하시겠습니까? ",
              "Querying for valid backends, please wait": "유효한 백엔드를 조회 중입니다, 기다려 주세요",
              "Open official website": "공식 웹사이트 열기",
              "Valid until": "유효 기간",
              "Select Plan": "플랜 선택",
              Open: "열기",
              Invoice: "인보이스",
              "Invoice has been created": "인보이스 {{id}} 가 생성되었습니다. 공식 웹사이트에서 결제를 진행해 주세요.",
              "Renew the current subscription": "현재 구독 갱신",
              "Downloading subscription": "구독 다운로드 중",
              "Show Tray Speed": "트레이 속도 표시",
              "Subscription Expiring Soon": "구독이 곧 만료됩니다",
              "Your subscription will expire in {{days}} days. Please renew to avoid service interruption.": "구독이 {{days}}일 후에 만료됩니다. 서비스 중단을 방지하기 위해 갱신해 주세요.",
              "Traffic Quota Low": "트래픽 할당량 부족",
              "You have less than 5% of your traffic quota remaining. Please consider upgrading your plan.": "트래픽 할당량의 5% 미만이 남아 있습니다. 플랜 업그레이드를 고려해 주세요.",
              OK: "확인",
              Store: "스토어",
              "No group configured": "그룹이 구성되지 않았습니다",
              Refresh: "갱신",
              "Refreshing subscription": "구독 업데이트 중",
              "Subscription refreshed": "구독이 업데이트되었습니다",
              "Failed to refresh subscription": "업데이트 실패",
              "System Time Error": "시스템 시간 오류",
              "Your system time appears to be inaccurate, which may cause connection issues. Please sync your system clock.": "시스템 시간이 부정확하여 연결 문제가 발생할 수 있습니다. 시스템 시계를 동기화해 주세요."
            }
          },
          vi: {
            translation: {
              Login: "Đăng nhập",
              Welcome: "Chào mừng",
              Password: "Mật khẩu",
              Username: "Tên đăng nhập",
              "Forgot password?": "Quên mật khẩu?",
              "Don't have an account?": "Chưa có tài khoản?",
              Register: "Đăng ký",
              "Password mismatch": "Mật khẩu không khớp",
              "Signup successfully": "Đăng ký thành công",
              "Create Account": "Tạo tài khoản",
              Email: "Email",
              Send: "Gửi",
              "Verification code": "Mã xác nhận",
              "Confirm Password": "Xác nhận mật khẩu",
              "Invitation code": "Mã lời mời",
              "Sign Up": "Đăng ký",
              Optional: "Tùy chọn",
              "Already have an account?": "Đã có tài khoản?",
              "Reset successfully": "Đặt lại thành công",
              "Reset Password": "Đặt lại mật khẩu",
              "New password": "Mật khẩu mới",
              Cancel: "Hủy",
              Reset: "Đặt lại",
              Days: "Ngày",
              "Subscribe to enjoy the uncensored internet": "Đăng ký để thưởng thức internet không kiểm duyệt",
              "Subscribe Now": "Đăng ký ngay",
              left: "còn lại",
              Used: "Đã sử dụng",
              "Expires in": "Hết hạn trong",
              Server: "Máy chủ",
              Switch: "Chuyển đổi",
              "Proxy Mode": "Chế độ Proxy",
              "Select Node": "Chọn nút",
              Subscribe: "Đăng ký",
              Home: "Trang chủ",
              Profile: "Hồ sơ",
              Settings: "Cài đặt",
              Dashboard: "Bảng điều khiển",
              Connect: "Kết nối",
              Connecting: "Đang kết nối",
              Disconnect: "Ngắt kết nối",
              "No Subscription": "Không có đăng ký",
              "My Subscription": "Đăng ký của tôi",
              Renew: "Gia hạn",
              Month: "Tháng",
              dayOfReset: "Dữ liệu sử dụng của bạn sẽ được đặt lại sau {{dayOfReset}} ngày。",
              "My Account": "Tài khoản của tôi",
              "Log out": "Đăng xuất",
              "My Orders": "Đơn hàng của tôi",
              Account: "Tài khoản",
              Invitation: "Lời mời",
              Copy: "Sao chép",
              Wallet: "Ví",
              "Join Telegram Group": "Tham gia nhóm Telegram",
              "To enable TUN mode in macOS": "Để kích hoạt chế độ TUN trên macOS, cần cấp quyền quản trị viên. Tiếp tục?",
              "To enable TUN mode in Windows": "Để kích hoạt chế độ TUN trên Windows, quyền UAC phải được cấp. Tiếp tục?",
              Continue: "Tiếp tục",
              Language: "Ngôn ngữ",
              Port: "Cổng",
              "TUN Mode": "Chế độ TUN",
              "TUN mode requires administrator": "Chế độ TUN yêu cầu quyền quản trị viên và có thể đại diện cho tất cả lưu lượng từ máy tính này",
              "Run on Startup": "Chạy khi khởi động",
              Subscription: "Đăng ký",
              Update: "Cập nhật",
              "All rights reserved": "Tất cả các quyền đã được bảo lưu",
              About: "Giới thiệu",
              "Subscription updated": "Đăng ký đã được cập nhật",
              "Failed to update subscription": "Cập nhật đăng ký thất bại",
              "Failed to reload config": "Tải lại cấu hình thất bại",
              "Failed to download subscription": "Tải xuống đăng ký thất bại",
              Warning: "Cảnh báo",
              "Please beware that": "Xin lưu ý rằng việc thay đổi loại đăng ký sẽ làm cho đăng ký cũ bị ghi đè bởi đăng ký mới.",
              Confirm: "Xác nhận",
              "Terms of use": "Điều khoản sử dụng",
              Announcement: "Thông báo",
              "No announcement": "Không có thông báo",
              Pending: "Đang chờ",
              Cancelled: "Đã hủy",
              Completed: "Hoàn thành",
              Pay: "Thanh toán",
              Paid: "Đã thanh toán",
              "order number has been copied": "số đơn hàng đã được sao chép vào khay nhớ tạm",
              "Change successfully": "Thay đổi thành công",
              "Change Password": "Đổi mật khẩu",
              "Old password": "Mật khẩu cũ",
              "Order cancelled": "Đơn hàng đã hủy",
              "Payment completed": "Thanh toán thành công",
              "Order Payment": "Thanh toán đơn hàng",
              Product: "Sản phẩm",
              Price: "Giá",
              Balance: "Số dư",
              Coupon: "Phiếu giảm giá",
              "Processing fee": "Phí xử lý",
              "Scan To Pay": "Quét để thanh toán",
              "Service Unavailable": "Dịch vụ không khả dụng",
              "Network server connection failed": "Kết nối máy chủ mạng không thành công, vui lòng liên hệ dịch vụ khách hàng.",
              "Got it": "Đã hiểu",
              "Software Updating ...": "Đang cập nhật phần mềm ...",
              "Got a coupon?": "Có phiếu giảm giá?",
              Verify: "Xác minh",
              "Confirm Order": "Xác nhận đơn hàng",
              "Speed test": "Kiểm tra tốc độ",
              "Copied to clipboard": "Đã sao chép vào khay nhớ tạm",
              Active: "Hoạt động",
              Filter: "Lọc",
              processName: "Tên quy trình",
              policy: "Chính sách",
              traffic: "Lưu lượng",
              up: "Lên",
              down: "Xuống",
              duration: "Thời gian",
              status: "Trạng thái",
              method: "Phương pháp",
              host: "Máy chủ",
              "Privilege require": "Yêu cầu đặc quyền",
              month_price: "Hàng tháng",
              quarter_price: "Hàng quý",
              half_year_price: "Hàng nửa năm",
              year_price: "Hàng năm",
              two_year_price: "2 Năm",
              three_year_price: "3 Năm",
              onetime_price: "Một lần",
              "Show Main Window": "Hiển thị cửa sổ chính",
              Connected: "Đã kết nối",
              "Outbound Mode": "Chế độ xuất khẩu",
              "Proxy Groups": "Nhóm chính sách",
              "Copy Shell Export Command": "Sao chép lệnh xuất Shell",
              "Uninstall Tun Service": "Gỡ cài đặt dịch vụ Tun",
              Quit: "Thoát",
              "To update the existing TUN service": "Để cập nhật dịch vụ TUN hiện có, quyền quản trị viên phải được cấp. Tiếp tục?",
              "Route traffic according to the rules": "Điều hướng lưu lượng theo các quy tắc",
              "All the traffic is routed to the proxy server": "Tất cả lưu lượng được định tuyến đến máy chủ proxy",
              "All requests will be sent to the target directly": "Tất cả các yêu cầu sẽ được gửi trực tiếp đến mục tiêu",
              "Created at": "Được tạo lúc",
              "Order ID": "ID đơn hàng",
              Back: "Quay lại",
              "Having questions regarding your account?": "Có câu hỏi về tài khoản của bạn?",
              "Contact us": "Liên hệ chúng tôi",
              "Update Subscription": "Cập nhật đăng ký",
              "Check for Update": "Kiểm tra cập nhật",
              "Traffic Cycle": "Chu kỳ lưu lượng",
              "No result": "Không có kết quả",
              "Keyword \"{{name}}\" not found, please check and try again": "Không tìm thấy từ khóa \"{{name}}\", vui lòng kiểm tra và thử lại",
              "The license associated with this product is expired": "Giấy phép liên quan đến sản phẩm này đã hết hạn. Vui lòng liên hệ nhà cung cấp.",
              "Too many active users": "Có quá nhiều người dùng hoạt động trên máy khách. Vui lòng liên hệ nhà cung cấp.",
              "The new version has started downloading.": "Phiên bản mới đã bắt đầu tải xuống.",
              "There are no new versions available.": "Hiện không có phiên bản mới.",
              "Please wait": "Xin hãy đợi",
              Permanent: "Gói dài hạn",
              Rule: "Rule",
              Global: "Global",
              Direct: "Direct",
              "The invitation code has been copied to the clipboard": "Mã mời đã được sao chép vào bảng tạm",
              Checking: "Kiểm tra",
              Remove: "Xóa",
              "Customer Service": "Dịch vụ khách hàng",
              "Enter your question here": "Nhập câu hỏi của bạn vào đây",
              reset_price: "Đặt lại",
              "Reset Quota": "Đặt lại hạn mức",
              Failed: "Thất bại",
              "Update Available": "Có cập nhật",
              "A new version has been released": "Một phiên bản mới ({{version}}) đã được phát hành. Bạn có muốn cập nhật ngay không? ",
              "Querying for valid backends, please wait": "Đang truy vấn các backend hợp lệ, vui lòng đợi",
              "Open official website": "Mở trang web chính thức",
              "Valid until": "Hợp lệ đến",
              "Select Plan": "Chọn Kế hoạch",
              Open: "Mở",
              Invoice: "Hóa đơn",
              "Invoice has been created": "Hóa đơn {{id}} đã được tạo, vui lòng tiến hành thanh toán trên trang web chính thức.",
              "Renew the current subscription": "Gia hạn đăng ký hiện tại",
              "Downloading subscription": "Đang tải xuống đăng ký",
              "Show Tray Speed": "Hiển thị tốc độ trên khay",
              "Subscription Expiring Soon": "Đăng ký sắp hết hạn",
              "Your subscription will expire in {{days}} days. Please renew to avoid service interruption.": "Đăng ký của bạn sẽ hết hạn trong {{days}} ngày. Vui lòng gia hạn để tránh gián đoạn dịch vụ.",
              "Traffic Quota Low": "Hạn mức lưu lượng thấp",
              "You have less than 5% of your traffic quota remaining. Please consider upgrading your plan.": "Bạn còn dưới 5% hạn mức lưu lượng. Vui lòng xem xét nâng cấp gói của bạn.",
              OK: "OK",
              Store: "Cửa hàng",
              "No group configured": "Chưa cấu hình nhóm",
              Refresh: "Làm mới",
              "Refreshing subscription": "Đang cập nhật đăng ký",
              "Subscription refreshed": "Đăng ký đã được cập nhật",
              "Failed to refresh subscription": "Cập nhật thất bại",
              "System Time Error": "Lỗi thời gian hệ thống",
              "Your system time appears to be inaccurate, which may cause connection issues. Please sync your system clock.": "Thời gian hệ thống không chính xác, có thể gây ra sự cố kết nối. Vui lòng đồng bộ đồng hồ hệ thống."
            }
          },
          fa: {
            translation: {
              Login: "ورود",
              Welcome: "خوش آمدید",
              Password: "رمز عبور",
              Username: "نام کاربری",
              "Forgot password?": "رمز عبور را فراموش کرده اید؟",
              "Don't have an account?": "حساب کاربری ندارید؟",
              Register: "ثبت نام",
              "Password mismatch": "عدم تطابق رمز عبور",
              "Signup successfully": "ثبت نام موفقیت آمیز",
              "Create Account": "ایجاد حساب کاربری",
              Email: "ایمیل",
              Send: "ارسال",
              "Verification code": "کد تأیید",
              "Confirm Password": "تأیید رمز عبور",
              "Invitation code": "کد دعوت",
              "Sign Up": "ثبت نام",
              Optional: "اختیاری",
              "Already have an account?": "همین حالا حساب کاربری دارید؟",
              "Reset successfully": "بازنشانی موفق",
              "Reset Password": "بازنشانی رمز عبور",
              "New password": "رمز عبور جدید",
              Cancel: "لغو",
              Reset: "بازنشانی",
              Days: "روزها",
              "Subscribe to enjoy the uncensored internet": "برای لذت بردن از اینترنت بدون سانسور اشتراک بگیرید",
              "Subscribe Now": "اکنون اشتراک بگیرید",
              left: "چپ",
              Used: "استفاده شده",
              "Expires in": "منقضی می شود در",
              Server: "سرور",
              Switch: "تغییر",
              "Proxy Mode": "حالت پراکسی",
              "Select Node": "انتخاب گره",
              Subscribe: "اشتراک",
              Home: "خانه",
              Profile: "پروفایل",
              Settings: "تنظیمات",
              Dashboard: "داشبورد",
              Connect: "اتصال",
              Connecting: "در حال اتصال",
              Disconnect: "قطع اتصال",
              "No Subscription": "بدون اشتراک",
              "My Subscription": "اشتراک من",
              Renew: "تمدید",
              Month: "ماه",
              dayOfReset: " {{dayOfReset}} روز دیگر بازنشانی می شود。",
              "My Account": "حساب من",
              "Log out": "خروج",
              "My Orders": "سفارشات من",
              Account: "حساب",
              Invitation: "دعوت",
              Copy: "کپی",
              Wallet: "کیف پول",
              "Join Telegram Group": "به گروه تلگرام بپیوندید",
              "To enable TUN mode in macOS": "برای فعال کردن حالت TUN در macOS باید امتیاز مدیریتی داده شود. ادامه؟",
              "To enable TUN mode in Windows": "برای فعال کردن حالت TUN در ویندوز باید امتیاز UAC داده شود. ادامه؟",
              Continue: "ادامه",
              Language: "زبان",
              Port: "درگاه",
              "TUN Mode": "حالت TUN",
              "TUN mode requires administrator": "حالت TUN به امتیازات مدیر نیاز دارد و می تواند تمام ترافیک های این کامپیوتر را پراکسی کند",
              "Run on Startup": "اجرا در راه اندازی",
              Subscription: "اشتراک",
              Update: "به روز رسانی",
              "All rights reserved": "همه حقوق محفوظ است",
              About: "درباره",
              "Subscription updated": "اشتراک به روز شده است",
              "Failed to update subscription": "به‌روزرسانی اشتراک ناموفق بود",
              "Failed to reload config": "بارگذاری مجدد پیکربندی ناموفق بود",
              "Failed to download subscription": "دانلود اشتراک ناموفق بود",
              Warning: "هشدار",
              "Please beware that": "لطفاً توجه داشته باشید که تغییر نوع اشتراک باعث می شود اشتراک قدیمی توسط اشتراک جدید بازنویسی شود.",
              Confirm: "تأیید",
              "Terms of use": "شرایط استفاده",
              Announcement: "اعلامیه",
              "No announcement": "بدون اعلامیه",
              Pending: "در انتظار",
              Cancelled: "لغو شد",
              Completed: "تکمیل شد",
              Pay: "پرداخت",
              Paid: "پرداخت شده",
              "order number has been copied": "شماره سفارش در کلیپ بورد کپی شده است",
              "Change successfully": "تغییر با موفقیت انجام شد",
              "Change Password": "تغییر رمز عبور",
              "Old password": "رمز عبور قدیمی",
              "Order cancelled": "سفارش لغو شد",
              "Payment completed": "پرداخت تکمیل شد",
              "Order Payment": "پرداخت سفارش",
              Product: "محصول",
              Price: "قیمت",
              Balance: "موجودی",
              Coupon: "کوپن",
              "Processing fee": "هزینه پردازش",
              "Scan To Pay": "اسکن برای پرداخت",
              "Service Unavailable": "سرویس در دسترس نیست",
              "Network server connection failed": "ارتباط با سرور شبکه انجام نشد، لطفاً با خدمات مشتری تماس بگیرید.",
              "Got it": "متوجه شدم",
              "Software Updating ...": "برنامه در حال به روزرسانی ...",
              "Got a coupon?": "کوپن دارید؟",
              Verify: "تأیید کنید",
              "Confirm Order": "تأیید سفارش",
              "Speed test": "تست سرعت",
              "Copied to clipboard": "کپی شده در کلیپ بورد",
              Active: "فعال",
              Filter: "فیلتر",
              processName: "نام فرآیند",
              policy: "سیاست",
              traffic: "ترافیک",
              up: "بالا",
              down: "پایین",
              duration: "مدت",
              status: "وضعیت",
              method: "روش",
              host: "میزبان",
              "Privilege require": "نیاز به امتیاز",
              month_price: "ماهانه",
              quarter_price: "سه ماهه",
              half_year_price: "شش ماهه",
              year_price: "سالانه",
              two_year_price: "2 ساله",
              three_year_price: "3 ساله",
              onetime_price: "یکبار",
              "Show Main Window": "نمایش پنجره اصلی",
              Connected: "متصل",
              "Outbound Mode": "حالت خروجی",
              "Proxy Groups": "گروه های سیاست",
              "Copy Shell Export Command": "دستور صادرات شل را کپی کنید",
              "Uninstall Tun Service": "خدمات Tun را حذف کنید",
              Quit: "خروج",
              "To update the existing TUN service": "برای به روزرسانی خدمات TUN موجود، باید امتیاز مدیریتی داده شود. ادامه؟",
              "Route traffic according to the rules": "ترافیک را بر اساس قوانین مسیریابی کنید",
              "All the traffic is routed to the proxy server": "تمام ترافیک به سرور پروکسی هدایت می شود",
              "All requests will be sent to the target directly": "تمام درخواست ها به صورت مستقیم به هدف ارسال می شوند",
              "Created at": "ایجاد شده در",
              "Order ID": "شناسه سفارش",
              Back: "بازگشت",
              "Having questions regarding your account?": "سوالی در مورد حساب خود دارید؟",
              "Contact us": "با ما تماس بگیرید",
              "Update Subscription": "به روزرسانی اشتراک",
              "Check for Update": "بررسی برای به روزرسانی",
              "Traffic Cycle": "چرخه ترافیک",
              "No result": "نتیجه‌ای یافت نشد",
              "Keyword \"{{name}}\" not found, please check and try again": "کلمه کلیدی \"{{name}}\" یافت نشد، لطفا بررسی کرده و دوباره تلاش کنید",
              "The license associated with this product is expired": "مجوز مرتبط با این محصول منقضی شده است. لطفا با تامین کننده تماس بگیرید.",
              "Too many active users": "تعداد کاربران فعال در مشتری بیش از حد است. لطفا با تامین کننده تماس بگیرید.",
              "The new version has started downloading.": "دانلود نسخه جدید آغاز شده است.",
              "There are no new versions available.": "نسخه جدیدی در دسترس نیست.",
              "Please wait": "لطفا صبر کنید",
              Permanent: "بسته بلند مدت",
              Rule: "Rule",
              Global: "Global",
              Direct: "Direct",
              "The invitation code has been copied to the clipboard": "کد دعوت به کلیپ بورد کپی شده است",
              Checking: "بررسی",
              Remove: "حذف",
              "Customer Service": "خدمات مشتری",
              "Enter your question here": "سوال خود را در اینجا وارد کنید",
              reset_price: "تنظیم مجدد",
              "Reset Quota": "محدوده تنظیم مجدد",
              Failed: "ناموفق",
              "Update Available": "بروزرسانی موجود",
              "A new version has been released": "نسخه جدیدی ({{version}}) منتشر شده است. آیا می خواهید هم اکنون به روزرسانی کنید؟",
              "Querying for valid backends, please wait": "در حال استعلام برای بک‌اندهای معتبر، لطفاً صبر کنید",
              "Open official website": "باز کردن وب‌سایت رسمی",
              "Valid until": "معتبر تا",
              "Select Plan": "انتخاب برنامه",
              Open: "باز کردن",
              Invoice: "صورتحساب",
              "Invoice has been created": "صورتحساب {{id}} ایجاد شده است، لطفاً برای پرداخت به وب‌سایت رسمی مراجعه کنید.",
              "Renew the current subscription": "تمدید اشتراک فعلی",
              "Downloading subscription": "در حال دانلود اشتراک",
              "Show Tray Speed": "نمایش سرعت در تری",
              "Subscription Expiring Soon": "اشتراک به زودی منقضی می‌شود",
              "Your subscription will expire in {{days}} days. Please renew to avoid service interruption.": "اشتراک شما در {{days}} روز دیگر منقضی می‌شود. لطفاً برای جلوگیری از قطع سرویس، آن را تمدید کنید.",
              "Traffic Quota Low": "سهمیه ترافیک کم است",
              "You have less than 5% of your traffic quota remaining. Please consider upgrading your plan.": "کمتر از 5٪ از سهمیه ترافیک شما باقی مانده است. لطفاً ارتقاء طرح خود را در نظر بگیرید.",
              OK: "تأیید",
              Store: "فروشگاه",
              "No group configured": "گروهی پیکربندی نشده است",
              Refresh: "بروزرسانی",
              "Refreshing subscription": "در حال بروزرسانی اشتراک",
              "Subscription refreshed": "اشتراک بروزرسانی شد",
              "Failed to refresh subscription": "بروزرسانی ناموفق بود",
              "System Time Error": "خطای ساعت سیستم",
              "Your system time appears to be inaccurate, which may cause connection issues. Please sync your system clock.": "ساعت سیستم شما نادرست به نظر می‌رسد که ممکن است باعث مشکلات اتصال شود. لطفاً ساعت سیستم خود را همگام‌سازی کنید."
            }
          }
        }
      });
      const _0x5770a9 = _0x404853.Ay;
      const _0x2d7fc7 = _0x5770a9.t;
      let _0x12703c = null;
      function _0x404fe0(_0x2f2283) {
        _0x12703c ||= {
          NO_DATA: _0x441cc1.nativeImage.createFromPath(_0x563693().join(_0x2f2283, "imgs/tray_proxy_latency_no_data.png")),
          FAILED: _0x441cc1.nativeImage.createFromPath(_0x563693().join(_0x2f2283, "imgs/tray_proxy_latency_fail.png")),
          LOW: _0x441cc1.nativeImage.createFromPath(_0x563693().join(_0x2f2283, "imgs/tray_proxy_latency_low.png")),
          MID: _0x441cc1.nativeImage.createFromPath(_0x563693().join(_0x2f2283, "imgs/tray_proxy_latency_mid.png")),
          HIGH: _0x441cc1.nativeImage.createFromPath(_0x563693().join(_0x2f2283, "imgs/tray_proxy_latency_high.png"))
        };
        return _0x12703c;
      }
      function _0x1d9636(_0x229b93) {
        if (_0x229b93 === undefined || _0x229b93 === _0xb17e17.NO_DATA) {
          return "NO_DATA";
        } else if (_0x229b93 === _0xb17e17.FAILED) {
          return "FAILED";
        } else if (_0x229b93 < _0x305bad) {
          return "LOW";
        } else if (_0x229b93 < _0x464613) {
          return "MID";
        } else {
          return "HIGH";
        }
      }
      const _0x1435a3 = new class {
        constructor() {
          const _0x5c8850 = {
            group_names: [],
            group_data: {},
            connecting_state: _0x3039d5.Normal
          };
          this.sync_proxies_info = _0x5c8850;
          this.showTraySpeed = true;
          this.wsReconnectAttempts = 0;
          this.isMainWindowVisible = true;
          this.trayIconCache = {};
        }
        getWindowsVersion() {
          const _0x2723bc = process.getSystemVersion();
          if (_0x2723bc.startsWith("10.0")) {
            if (parseInt(_0x2723bc.split(".")[2], 10) >= 22000) {
              return 11;
            } else {
              return 10;
            }
          }
          return null;
        }
        get_tray_icon() {
          const _0x4ab1f5 = this.sync_proxies_info.connecting_state;
          const _0x5a4d7d = "05";
          if (process.platform === "win32") {
            const _0x4458bb = this.getWindowsVersion();
            if (_0x4458bb) {
              if (_0x4458bb === 10) {
                if (_0x4ab1f5 === _0x3039d5.Normal) {
                  return "icons/mac_tray_icon_for_dark_mode_disconnected_" + _0x5a4d7d + ".png";
                } else {
                  return "icons/mac_tray_icon_for_dark_mode_" + _0x5a4d7d + ".png";
                }
              } else if (_0x4ab1f5 === _0x3039d5.Normal) {
                return "icons/mac_tray_icon_for_light_mode_disconnect_" + _0x5a4d7d + ".png";
              } else {
                return "icons/mac_tray_icon_for_light_mode_" + _0x5a4d7d + ".png";
              }
            }
          }
          if (_0x4ab1f5 === _0x3039d5.Normal) {
            return "icons/mac_tray_icon_for_light_mode_disconnect_" + _0x5a4d7d + "Template.png";
          } else {
            return "icons/mac_tray_icon_for_light_mode_" + _0x5a4d7d + "Template.png";
          }
        }
        formatTrafficSpeed(_0x4d2572) {
          const _0x4432a7 = _0x4d2572 / 1048576;
          if (_0x4432a7 < 10) {
            return " " + _0x4432a7.toFixed(1) + "M/s";
          } else if (_0x4432a7 < 100) {
            return _0x4432a7.toFixed(1) + "M/s";
          } else {
            return Math.floor(_0x4432a7) + "M/s";
          }
        }
        async build_tray(_0x45d063, _0x27be7f, _0x515f88) {
          this.app = _0x45d063;
          this.mainWindow = _0x27be7f;
          this.asset_root = _0x515f88;
          _0x404fe0(_0x515f88);
          this.tray = new _0x441cc1.Tray(this.resolveTrayIcon(this.get_tray_icon()));
          this.tray.setContextMenu(await this.buildMenu());
          this.showTraySpeed = _0x10b715.show_tray_speed === undefined || _0x10b715.show_tray_speed;
          if (process.platform === "darwin" && this.showTraySpeed) {
            this.startTrafficMonitoring();
          }
          if (process.platform === "win32") {
            this.tray.on("click", () => {
              this.mainWindow?.show();
            });
          }
        }
        scheduleReconnect() {
          if (this.wsReconnectTimer) {
            return;
          }
          const _0x20e3c1 = this.wsReconnectAttempts;
          const _0x23c34b = Math.min(Math.pow(2, _0x20e3c1) * 3000, 30000);
          this.wsReconnectAttempts = _0x20e3c1 + 1;
          this.wsReconnectTimer = setTimeout(() => {
            this.wsReconnectTimer = undefined;
            if (this.showTraySpeed) {
              this.startTrafficMonitoring();
            }
          }, _0x23c34b);
        }
        startTrafficMonitoring() {
          this.stopTrafficMonitoring();
          try {
            const _0x2be67e = _0x18643e.get_clash_api_config();
            const _0x508f51 = _0x2be67e.baseURL.replace("http://", "ws://") + "/traffic";
            this.wsConnection = new _0x5e3c2f.Ay(_0x508f51);
            this.wsConnection.on("open", () => {
              this.wsReconnectAttempts = 0;
            });
            this.wsConnection.on("message", _0x4980f7 => {
              if (this.tray && this.showTraySpeed) {
                try {
                  const _0x251faf = JSON.parse(_0x4980f7.toString());
                  const _0x148b51 = _0x251faf.up + _0x251faf.down;
                  const _0x48d0ed = this.formatTrafficSpeed(_0x148b51);
                  this.tray.setTitle(_0x48d0ed, {
                    fontType: "monospaced"
                  });
                } catch (_0x2d5083) {
                  console.error("Error parsing traffic data:", _0x2d5083);
                }
              }
            });
            this.wsConnection.on("error", _0x3c3155 => {
              console.error("WebSocket error:", _0x3c3155);
              this.scheduleReconnect();
            });
            this.wsConnection.on("close", () => {
              console.log("WebSocket connection closed");
              this.scheduleReconnect();
            });
          } catch (_0x4f5686) {
            console.error("Error setting up WebSocket:", _0x4f5686);
            this.scheduleReconnect();
          }
        }
        stopTrafficMonitoring() {
          if (this.wsReconnectTimer) {
            clearTimeout(this.wsReconnectTimer);
            this.wsReconnectTimer = undefined;
          }
          if (this.wsConnection) {
            this.wsConnection.removeAllListeners();
            if (this.wsConnection.readyState === _0x5e3c2f.Ay.OPEN || this.wsConnection.readyState === _0x5e3c2f.Ay.CONNECTING) {
              this.wsConnection.close();
            }
            this.wsConnection = undefined;
          }
          if (this.tray) {
            this.tray.setTitle("");
          }
        }
        async toggleTraySpeed() {
          this.showTraySpeed = !this.showTraySpeed;
          _0x10b715.show_tray_speed = this.showTraySpeed;
          if (process.platform === "darwin") {
            if (this.showTraySpeed) {
              this.startTrafficMonitoring();
            } else {
              this.stopTrafficMonitoring();
            }
          }
          if (this.tray) {
            this.lastMenuSignature = undefined;
            await this.flushMenuUpdate();
          }
        }
        set_dashboard_window(_0x31e171) {
          this.dashboardWindow = _0x31e171;
        }
        computeMenuSignature() {
          const _0xfb9a15 = this.sync_proxies_info;
          const _0x328483 = encodeURIComponent;
          const _0x5d136d = [];
          _0x5d136d.push("pm=" + (_0x10b715.proxy_mode ?? ""));
          _0x5d136d.push("cs=" + _0xfb9a15.connecting_state);
          _0x5d136d.push("tun=" + (_0x10b715.tun ? 1 : 0));
          _0x5d136d.push("sm=" + (_0x10b715.service_mode ? 1 : 0));
          _0x5d136d.push("sp=" + (this.showTraySpeed ? 1 : 0));
          _0x5d136d.push("lang=" + _0x328483(_0x10b715.language ?? ""));
          const _0x3384a7 = _0xfb9a15.group_names ?? [];
          _0x5d136d.push("g=" + _0x3384a7.map(_0x328483).join(","));
          for (const _0x1b1afc of _0x3384a7) {
            const _0x209d51 = _0xfb9a15.group_data?.[_0x1b1afc];
            const _0x1cc21a = _0x328483(_0x1b1afc);
            if (!_0x209d51) {
              _0x5d136d.push(_0x1cc21a + "#");
              continue;
            }
            const _0x27e2a6 = _0x209d51.is_selectable ? 1 : 0;
            _0x5d136d.push(_0x1cc21a + "#" + _0x328483(_0x209d51.now ?? "") + "#" + _0x27e2a6);
            const _0x421d49 = _0x209d51.nodes ?? [];
            const _0x1c12c7 = [];
            for (const _0x5096a9 of _0x421d49) {
              _0x1c12c7.push(_0x328483(_0x5096a9.name) + "@" + _0x1d9636(_0x5096a9.latency));
            }
            _0x5d136d.push(_0x1c12c7.join(","));
          }
          return _0x5d136d.join("|");
        }
        async update_proxies_info(_0x18ceba) {
          if (_0x18ceba) {
            this.sync_proxies_info = _0x18ceba;
          }
          if (this.isMainWindowVisible) {
            this.updateMenuTimer ||= setTimeout(() => {
              this.updateMenuTimer = undefined;
              this.flushMenuUpdate().catch(_0x24d10f => console.error("[menu] flush failed:", _0x24d10f));
            }, 200);
          }
        }
        async flushMenuUpdate() {
          const _0x2975d4 = this.computeMenuSignature();
          if (_0x2975d4 === this.lastMenuSignature) {
            return;
          }
          this.lastMenuSignature = _0x2975d4;
          const _0x1522db = await this.buildMenu();
          this.tray?.setContextMenu(_0x1522db);
          this.tray?.setImage(this.resolveTrayIcon(this.get_tray_icon()));
        }
        setMainWindowVisible(_0x5a68d7) {
          const _0x159d46 = this.isMainWindowVisible;
          this.isMainWindowVisible = _0x5a68d7;
          if (_0x159d46 && !_0x5a68d7 && this.updateMenuTimer) {
            clearTimeout(this.updateMenuTimer);
            this.updateMenuTimer = undefined;
          }
          if (!_0x159d46 && _0x5a68d7) {
            this.lastMenuSignature = undefined;
            this.flushMenuUpdate().catch(_0x43f25a => console.error("[menu] flush on show failed:", _0x43f25a));
          }
        }
        on_outbound_mode_change(_0x43350d) {
          this.mainWindow?.webContents?.send("set_proxy_mode", _0x43350d);
        }
        build_outbound_mode() {
          const _0x410444 = _0x10b715.proxy_mode;
          return [{
            label: _0x2d7fc7("Outbound Mode"),
            type: "normal",
            enabled: false
          }, {
            label: _0x2d7fc7("Rule"),
            type: "checkbox",
            checked: _0x410444 === _0x4278b9.Rule,
            click: () => {
              this.on_outbound_mode_change(_0x4278b9.Rule);
            }
          }, {
            label: _0x2d7fc7("Global"),
            type: "checkbox",
            checked: _0x410444 === _0x4278b9.Global,
            click: () => {
              this.on_outbound_mode_change(_0x4278b9.Global);
            }
          }, {
            type: "separator"
          }];
        }
        get_latency_icon(_0x4f661b) {
          return _0x404fe0(this.asset_root)[_0x1d9636(_0x4f661b)];
        }
        resolveTrayIcon(_0x5a5b2d) {
          let _0x22d23c = this.trayIconCache[_0x5a5b2d];
          if (!_0x22d23c) {
            _0x22d23c = _0x441cc1.nativeImage.createFromPath(_0x563693().join(this.asset_root, _0x5a5b2d));
            this.trayIconCache[_0x5a5b2d] = _0x22d23c;
          }
          return _0x22d23c;
        }
        on_group_node_change(_0x34e432, _0x2e751b) {
          this.mainWindow?.webContents?.send("switch_proxy", [_0x34e432, _0x2e751b]);
        }
        build_group_nodes(_0x25964b) {
          const _0x123030 = [];
          const _0x10f7c9 = this.sync_proxies_info.group_data[_0x25964b];
          if (!_0x10f7c9 || !_0x10f7c9.nodes) {
            return _0x123030;
          }
          for (let _0x259039 of _0x10f7c9.nodes) {
            _0x123030.push({
              label: _0x259039.name,
              type: "checkbox",
              checked: _0x10f7c9.now === _0x259039.name,
              enabled: _0x10f7c9.is_selectable,
              icon: this.get_latency_icon(_0x259039.latency ? _0x259039.latency : _0xb17e17.NO_DATA),
              click: () => {
                this.on_group_node_change(_0x25964b, _0x259039.name);
              }
            });
          }
          return _0x123030;
        }
        build_rule_groups() {
          const _0x40ce1b = [{
            label: _0x2d7fc7("Proxy Groups"),
            type: "normal",
            enabled: false
          }];
          let _0x4f3ff0 = this.sync_proxies_info.group_names.slice();
          if (_0x10b715.proxy_mode === "global") {
            _0x4f3ff0.splice(_0x4f3ff0.indexOf("GLOBAL"), 1);
            _0x4f3ff0 = ["GLOBAL"].concat(_0x4f3ff0);
          }
          for (const _0x2f14b6 of _0x4f3ff0) {
            _0x40ce1b.push({
              label: _0x2f14b6,
              type: "submenu",
              submenu: this.build_group_nodes(_0x2f14b6)
            });
          }
          _0x40ce1b.push({
            type: "separator"
          });
          return _0x40ce1b;
        }
        async try_disconnect() {
          if (this.sync_proxies_info.connecting_state === _0x3039d5.Connected) {
            await _0x18643e.disconnect();
            if (_0x10b715.tun) {
              await _0x18643e.tun_direct();
            }
          }
        }
        async buildMenu() {
          const _0x8f247e = this.sync_proxies_info.group_names.length !== 0;
          const _0x4dc6e4 = _0x8f247e && _0x10b715.service_mode;
          const _0xdec9b4 = this.sync_proxies_info.connecting_state;
          if (_0x10b715.language && _0x10b715.language !== _0x5770a9.language) {
            _0x5770a9.changeLanguage(_0x10b715.language).catch(() => {});
          }
          const _0x3060db = [{
            label: _0x2d7fc7("Show Main Window"),
            type: "normal",
            click: () => {
              this.mainWindow?.show();
              if (process.platform === "darwin") {
                this.app?.dock.show();
              }
            }
          }, {
            type: "separator"
          }, {
            label: _0xdec9b4 === _0x3039d5.Normal ? _0x2d7fc7("Connect") : _0x2d7fc7("Connected"),
            type: "checkbox",
            checked: _0xdec9b4 !== _0x3039d5.Normal,
            enabled: _0x8f247e,
            click: () => {
              this.mainWindow?.webContents?.send("connect", [_0xdec9b4 === _0x3039d5.Normal, true]);
            }
          }, {
            type: "separator"
          }];
          if (_0x8f247e) {
            _0x3060db.push(...this.build_outbound_mode());
            if (_0x10b715.proxy_mode !== "direct") {
              _0x3060db.push(...this.build_rule_groups());
            }
          }
          _0x3060db.push({
            label: _0x2d7fc7("Dashboard"),
            type: "normal",
            enabled: _0x8f247e,
            click: () => {
              _0x1ee3c5?.show();
              _0x1ee3c5?.focus();
              _0x10b715.render_dashboard = true;
              if (process.platform === "darwin") {
                this.app?.dock.show();
              }
            }
          });
          if (process.platform === "darwin") {
            _0x3060db.push({
              label: _0x2d7fc7("Show Tray Speed"),
              type: "checkbox",
              checked: this.showTraySpeed,
              click: () => {
                this.toggleTraySpeed();
              }
            });
          }
          _0x3060db.push({
            type: "separator"
          }, {
            label: _0x2d7fc7("Tun Mode"),
            type: "checkbox",
            enabled: _0x4dc6e4,
            visible: _0x10b715.service_mode,
            checked: _0x10b715.tun,
            click: () => {
              this.mainWindow?.webContents?.send("tun", !_0x10b715.tun);
            }
          }, {
            label: _0x2d7fc7("Copy Shell Export Command"),
            type: "normal",
            enabled: _0x8f247e,
            click: () => {
              const _0x4a1f72 = "export https_proxy=http://127.0.0.1:" + _0x10b715.proxy_port + ";export http_proxy=http://127.0.0.1:" + _0x10b715.proxy_port + ";export all_proxy=socks5://127.0.0.1:" + _0x10b715.proxy_port;
              _0x441cc1.clipboard.writeText(_0x4a1f72);
            }
          }, {
            type: "separator"
          });
          if (_0x10b715.service_mode) {
            _0x3060db.push({
              label: _0x2d7fc7("Uninstall Tun Service"),
              type: "normal",
              click: () => {
                this.mainWindow?.webContents?.send("uninstall_tun_service", undefined);
              }
            }, {
              type: "separator"
            });
          }
          _0x3060db.push({
            label: _0x2d7fc7("Quit"),
            type: "normal",
            click: () => {
              this.app?.quit();
            }
          });
          return _0x441cc1.Menu.buildFromTemplate(_0x3060db);
        }
      }();
      var _0xe23024 = _0x4605ff(87016);
      function _0x40d145(_0x6bb6b2, _0x2c9566 = "") {
        console.log((0, _0xe23024.format)({
          pathname: _0x563693().join(__dirname, "../renderer/", _0x6bb6b2),
          hash: _0x2c9566,
          protocol: "file:",
          slashes: true
        }));
        return (0, _0xe23024.format)({
          pathname: _0x563693().join(__dirname, "../renderer/", _0x6bb6b2),
          hash: _0x2c9566,
          protocol: "file:",
          slashes: true
        });
      }
      var _0x5c0172 = _0x4605ff(74394);
      var _0x1c0916 = _0x4605ff(78540);
      var _0x39df73 = _0x4605ff(12687);
      var _0x4065b1 = _0x4605ff.n(_0x39df73);
      const {
        exec: _0xbfaa8
      } = _0x4605ff(35317);
      const _0x3e5a16 = false;
      let _0x2b36d0 = null;
      let _0x1ee3c5 = null;
      let _0x261aa4 = false;
      if (_0x441cc1.app.requestSingleInstanceLock()) {
        if (process.platform !== "darwin") {
          _0x441cc1.app.on("second-instance", (_0x575ddd, _0x3fa05a, _0x41efc8) => {
            if (_0x2b36d0) {
              if (_0x2b36d0.isMinimized()) {
                _0x2b36d0.restore();
              }
              _0x2b36d0.show();
              _0x2b36d0.focus();
            }
          });
        }
      } else {
        _0x441cc1.app.quit();
      }
      _0x441cc1.ipcMain.on("ipc-example", async (_0x39f793, _0x12f060) => {
        const _0x3e9941 = _0x3a8431 => "IPC test: " + _0x3a8431;
        console.log(_0x3e9941(_0x12f060));
        _0x39f793.reply("ipc-example", _0x3e9941("pong"));
      });
      let _0xlinuxSubscribeConfig = "";
      _0x441cc1.ipcMain.handle("update_subscription_config", async (_0x4f70c2, _0x1cff70) => {
        if (process.platform === "linux" && _0xlinuxSubscribeConfig) {
          try {
            const _0x3d91ad = typeof _0x1cff70 === "string" ? _0x23ee12.parse(_0x1cff70) : _0x1cff70;
            const _0x4d38c4 = _0x23ee12.parse(_0xlinuxSubscribeConfig);
            for (const _0x407d0a of ["proxies", "proxy-groups", "proxy-providers", "rules"]) {
              if (_0x4d38c4?.[_0x407d0a]) {
                _0x3d91ad[_0x407d0a] = _0x4d38c4[_0x407d0a];
              }
            }
            return _0x18643e.update_config("", _0x3d91ad);
          } catch (_0x11feda) {
            console.log("[linux] subscription config merge failed:", _0x11feda?.message || _0x11feda);
          }
        }
        return _0x18643e.update_config(_0x1cff70);
      });
      _0x441cc1.ipcMain.handle("reset_account_info", async (_0x546001, _0x84ba35) => {
        _0x10b715.reset_account_info(_0x84ba35);
        if (process.platform === "linux") {
          _0xlinuxClearAuth();
        }
        _0x18643e.reset_config();
      });
      _0x441cc1.ipcMain.handle("store_get_or_set", async (_0xa6042a, _0x38bd14, _0x59b9b3 = null) => {
        if (_0x38bd14 === "auto_launch") {
          if (process.platform === "linux") {
            const _0x5719c8 = _0x563693().join((0, _0x5a2580.homedir)(), ".config", "autostart");
            const _0x36b54a = _0x563693().join(_0x5719c8, "lantianyun.desktop");
            const _0x3fd8c2 = _0x1f0e63.existsSync("/usr/bin/lantianyun") ? "/usr/bin/lantianyun" : _0x563693().join(process.resourcesPath, "..", "run-lantianyun");
            try {
              if (_0x59b9b3) {
                _0x1f0e63.mkdirSync(_0x5719c8, {
                  recursive: true
                });
                _0x1f0e63.writeFileSync(_0x36b54a, "[Desktop Entry]\nType=Application\nVersion=1.0\nName=蓝天云\nComment=蓝天云代理客户端\nExec=\"" + _0x3fd8c2 + "\" --hidden\nTerminal=false\nX-GNOME-Autostart-enabled=true\n", "utf8");
              } else if (_0x1f0e63.existsSync(_0x36b54a)) {
                _0x1f0e63.unlinkSync(_0x36b54a);
              }
            } catch (_0x1f1706) {
              console.log("[linux] failed to update autostart:", _0x1f1706);
            }
          } else {
            _0x441cc1.app.setLoginItemSettings({
              openAtLogin: !!_0x59b9b3,
              openAsHidden: true,
              path: _0x441cc1.app.getPath("exe")
            });
          }
        }
        return _0x10b715.get_or_set(_0x38bd14, _0x59b9b3);
      });
      _0x441cc1.ipcMain.on("store_get_sync", (_0x59b087, _0x1f7afd) => {
        _0x59b087.returnValue = _0x10b715.get_or_set(_0x1f7afd, null);
      });
      _0x441cc1.ipcMain.handle("write_clipboard", async (_0x23bdfc, _0x28cf94) => {
        _0x441cc1.clipboard.writeText(_0x28cf94);
      });
      _0x441cc1.ipcMain.handle("openExternal", async (_0x560e4c, _0x1871f0) => {
        await _0x441cc1.shell.openExternal(_0x1871f0);
      });
      _0x441cc1.ipcMain.handle("get_clash_config_path", async () => _0x18643e.config_path());
      _0x441cc1.ipcMain.handle("connect", async () => await _0x18643e.connect());
      _0x441cc1.ipcMain.handle("disconnect", async () => await _0x18643e.disconnect());
      _0x441cc1.ipcMain.handle("install_tun_service", async () => await _0x18643e.install_tun_service());
      _0x441cc1.ipcMain.handle("uninstall_tun_service", async () => await _0x18643e.uninstall_tun_service());
      _0x441cc1.ipcMain.handle("close_clash_core", async () => await _0x18643e.close_clash_core());
      _0x441cc1.ipcMain.handle("open_clash_core", async () => await _0x18643e.open_clash_core());
      _0x441cc1.ipcMain.on("platform_sync", _0x1285c8 => {
        _0x1285c8.returnValue = process.platform;
      });
      _0x441cc1.ipcMain.handle("sync_proxies_info", async (_0x2c1ca7, _0x257757) => {
        await _0x1435a3.update_proxies_info(_0x257757);
      });
      _0x441cc1.ipcMain.handle("window_control", async (_0x3a2221, _0x4f3b29, _0x455c50) => {
        if (_0x4f3b29 === _0x2c8fb7.MINIMIZE) {
          if (_0x455c50 === _0x58510f.MAIN) {
            _0x2b36d0?.minimize();
          } else if (_0x455c50 === _0x58510f.DASHBOARD) {
            _0x1ee3c5?.minimize();
          }
        } else if (_0x4f3b29 === _0x2c8fb7.CLOSE) {
          _0x8f5eb1(undefined, _0x455c50);
        } else if (_0x4f3b29 === _0x2c8fb7.SHOW && _0x455c50 === _0x58510f.DASHBOARD) {
          _0x1ee3c5?.show();
          _0x1ee3c5?.focus();
          _0x10b715.render_dashboard = true;
        }
      });
      _0x441cc1.ipcMain.handle("quit", async () => {
        _0x441cc1.app.quit();
      });
      _0x441cc1.ipcMain.handle("update_tun_service", async () => await _0x18643e.update_tun_service());
      _0x441cc1.ipcMain.handle("sync_tun_state", async () => {
        await _0x18643e.sync_tun_state();
      });
      _0x441cc1.ipcMain.handle("system_info", async () => {
        const _0x142c08 = await _0x4065b1().osInfo();
        let _0x3f5709;
        const _0x3f7f2d = {
          device: _0x142c08.hostname,
          os: _0x142c08.distro + " " + _0x142c08.release
        };
        const _0x5cddee = {
          device: _0x142c08.hostname,
          os: _0x142c08.platform + " " + _0x142c08.release + "(" + _0x142c08.arch + ")"
        };
        _0x3f5709 = process.platform === "darwin" ? _0x3f7f2d : _0x5cddee;
        try {
          const _0x10e513 = await _0x58081b.A.get("https://checkip.amazonaws.com/");
          _0x3f5709.ip = _0x10e513.data.trim();
        } catch (_0x5180f3) {}
        return _0x3f5709;
      });
      _0x441cc1.ipcMain.handle("download", async (_0x22feb0, _0xdad104) => {
        const _0xa59f44 = function (_0x34e694) {
          const _0x36a33f = _0x34e694.match(/\/([^/]+)$/);
          if (_0x36a33f && _0x36a33f.length > 1) {
            return _0x36a33f[1];
          } else {
            return "";
          }
        }(_0xdad104);
        const _0x27fb5b = _0x563693().join(_0x18643e.clash_config_dir(), _0xa59f44);
        if (_0x458a3d().existsSync(_0x27fb5b)) {
          _0x458a3d().unlinkSync(_0x27fb5b);
        }
        if (_0x18643e.sysarch() === "arm64") {
          _0xdad104 = _0xdad104.replace(".pkg", "-arm64.pkg");
        }
        (async function (_0x59d2b4, _0x2dbad2, _0x239a41) {
          const _0xcf3f64 = {
            url: _0x59d2b4,
            method: "GET",
            responseType: "stream"
          };
          const _0x5bc80c = await (0, _0x58081b.A)(_0xcf3f64);
          const _0x3b8c92 = Number(_0x5bc80c.headers["content-length"]);
          let _0x4ee7ea = 0;
          const _0x2f4d96 = _0x458a3d().createWriteStream(_0x2dbad2);
          _0x5bc80c.data.on("data", _0x13b699 => {
            _0x4ee7ea += _0x13b699.length;
            _0x239a41({
              totalBytes: _0x3b8c92,
              downloadedBytes: _0x4ee7ea,
              percent: _0x4ee7ea / _0x3b8c92 * 100
            });
          });
          _0x5bc80c.data.pipe(_0x2f4d96);
          new Promise((_0x99dd58, _0x5e211e) => {
            _0x2f4d96.on("finish", _0x99dd58);
            _0x2f4d96.on("error", _0x5e211e);
          });
        })(_0xdad104, _0x27fb5b, _0x613b87 => {
          _0x2b36d0?.webContents?.send("update_progress", [_0x613b87.percent]);
          if (_0x613b87.percent === 100) {
            setTimeout(async () => {
              if (process.platform === "win32") {
                _0xbfaa8("\"" + _0x27fb5b + "\"");
              } else {
                _0x441cc1.shell.openPath(_0x27fb5b);
              }
              await (0, _0x5c0172.A)(5000);
              _0x441cc1.app.quit();
            }, 1000);
          }
        });
      });
      let _0xlinuxAuthToken = "";
      const _0xlinuxApiBase = "https://www.lty01.com";
      const _0xlinuxHeartbeatKey = "E93irVS1Z2eVL294rmg710FA";
      const _0xlinuxAuthPath = _0x563693().join(_0x441cc1.app.getPath("userData"), "linux-auth.json");
      try {
        const _0x492e7b = JSON.parse(_0x1f0e63.readFileSync(_0xlinuxAuthPath, "utf8"));
        _0xlinuxAuthToken = String(_0x492e7b?.auth_data || "");
      } catch (_0x2bc95d) {}
      function _0xlinuxClearAuth() {
        _0xlinuxAuthToken = "";
        _0xlinuxSubscribeInfo = null;
        _0xlinuxSubscribeConfig = "";
        try {
          _0x1f0e63.unlinkSync(_0xlinuxAuthPath);
        } catch (_0x55bfe0) {}
      }
      function _0xlinuxSaveAuth() {
        try {
          _0x1f0e63.writeFileSync(_0xlinuxAuthPath, JSON.stringify({
            auth_data: _0xlinuxAuthToken
          }), {
            encoding: "utf8",
            mode: 0o600
          });
          _0x1f0e63.chmodSync(_0xlinuxAuthPath, 0o600);
        } catch (_0x1bfb9f) {
          console.log("[linux] failed to save auth token:", _0x1bfb9f?.message || _0x1bfb9f);
        }
      }
      const _0xlinuxHeartbeatResponse = (_0x199b74, _0x4ad33c = 200, _0x1e58a4 = "") => ({
        Code: 1,
        Data: _0x199b74 == null || typeof _0x199b74 === "string" ? (_0x199b74 ?? "") : JSON.stringify(_0x199b74),
        Message: _0x1e58a4,
        Status: _0x4ad33c
      });
      const _0xlinuxHeartbeatCrypto = require("./heartbeat-crypto.js");
      let _0xlinuxSubscribeInfo = null;
      async function _0xlinuxHeartbeat(_0x354cc9, _0x283ba7) {
        let _0x58a600;
        try {
          _0x58a600 = JSON.parse(_0xlinuxHeartbeatCrypto.decryptFromBase64(_0x283ba7?.body, _0xlinuxHeartbeatKey));
        } catch (_0x3f7058) {
          return _0xlinuxHeartbeatResponse("", -1, "invalid heartbeat request");
        }
        const _0x455541 = Number(_0x58a600?.Command);
        const _0x4a46ec = Array.isArray(_0x58a600?.Args) ? _0x58a600.Args : [];
        try {
          if (_0x455541 === 0) {
            return _0xlinuxHeartbeatResponse("");
          }
          if (_0x455541 === 1) {
            const _0x45d55d = await _0x58081b.A.get(_0xlinuxApiBase + "/api/v1/guest/comm/config");
            return _0xlinuxHeartbeatResponse(_0x45d55d.data);
          }
          if (_0x455541 === 2) {
            try {
              const _0x53f7d8 = await _0x58081b.A.post(_0xlinuxApiBase + "/api/v1/passport/auth/login", {
                email: String(_0x4a46ec[0] || ""),
                password: String(_0x4a46ec[1] || "")
              });
              if (_0x53f7d8.data?.status === "success" && _0x53f7d8.data?.data?.auth_data) {
                _0xlinuxAuthToken = _0x53f7d8.data.data.auth_data;
                _0xlinuxSubscribeInfo = null;
                _0xlinuxSubscribeConfig = "";
                _0xlinuxSaveAuth();
              }
              return _0xlinuxHeartbeatResponse(_0x53f7d8.data);
            } catch (_0x5b31d5) {
              const _0x57e7b7 = _0x5b31d5?.response?.data;
              return _0xlinuxHeartbeatResponse(_0x57e7b7 || { status: "fail", message: "登录失败", data: null }, 200);
            }
          }
          if (_0x455541 === 5 || _0x455541 === 11) {
            if (!_0xlinuxAuthToken) {
              return _0xlinuxHeartbeatResponse("", 403, "未登录或登录已过期");
            }
            const _0x3bc563 = _0x455541 === 5 ? "/api/v1/user/getSubscribe" : "/api/v1/user/info";
            let _0x1bfee9;
            try {
              _0x1bfee9 = await _0x58081b.A.get(_0xlinuxApiBase + _0x3bc563, {
                headers: {
                  Authorization: _0xlinuxAuthToken
                }
              });
            } catch (_0x460bf3) {
              const _0x4d478b = _0x460bf3?.response?.status;
              if (_0x4d478b === 401 || _0x4d478b === 403) {
                _0xlinuxClearAuth();
                return _0xlinuxHeartbeatResponse("", 403, "未登录或登录已过期");
              }
              throw _0x460bf3;
            }
            if (_0x455541 === 5) {
              _0xlinuxSubscribeInfo = _0x1bfee9.data;
            }
            return _0xlinuxHeartbeatResponse(_0x1bfee9.data);
          }
          if (_0x455541 === 6) {
            if (!_0xlinuxAuthToken) {
              return _0xlinuxHeartbeatResponse("", 403, "未登录或登录已过期");
            }
            if (!_0xlinuxSubscribeInfo) {
              const _0x3f6dd6 = await _0x58081b.A.get(_0xlinuxApiBase + "/api/v1/user/getSubscribe", {
                headers: {
                  Authorization: _0xlinuxAuthToken
                }
              });
              _0xlinuxSubscribeInfo = _0x3f6dd6.data;
            }
            const _0x54d4dd = String(_0x4a46ec[0] || _0xlinuxSubscribeInfo?.data?.subscribe_url || "");
            if (!_0x54d4dd) {
              return _0xlinuxHeartbeatResponse("", -1, "subscription URL is unavailable");
            }
            const _0x35b3ab = await _0x58081b.A.get(_0x54d4dd, {
              headers: {
                Accept: "text/plain,application/yaml,*/*",
                "User-Agent": "clash.meta"
              }
            });
            _0xlinuxSubscribeConfig = String(_0x35b3ab.data || "");
            return _0xlinuxHeartbeatResponse(_0x35b3ab.data);
          }
          if (_0x455541 === 27) {
            const _0x1d9e3a = String(_0x4a46ec[0] || _0x18643e.config_path());
            const _0x4e72b3 = String(_0x4a46ec[1] || "false") === "true";
            await _0x58081b.A.put("http://" + _0x17c254 + "/configs", {
              path: _0x1d9e3a,
              force: _0x4e72b3
            });
            return _0xlinuxHeartbeatResponse("");
          }
          if (_0x455541 === 35) {
            return _0xlinuxHeartbeatResponse({
              ClientId: "",
              ExternalSupportToken: "",
              ExternalSupportType: "crisp",
              SupportApi: ""
            });
          }
          if (_0x455541 === 42) {
            return _0xlinuxHeartbeatResponse({
              CloudConfig: [],
              CurrencySymbol: "",
              DisableIPRegion: false,
              DisableInAppPurchase: false,
              HomePage: _0xlinuxApiBase,
              LastCloudConfigUpdateTime: Math.floor(Date.now() / 1000),
              QuickLoginSsp: false,
              SupportApi: "",
              TelegramGroup: "",
              ToS: _0xlinuxApiBase
            });
          }
          return _0xlinuxHeartbeatResponse("", -1, "");
        } catch (_0x3e1fc3) {
          console.log("[linux] heartbeat command failed:", _0x455541, _0x3e1fc3?.message || _0x3e1fc3);
          return _0xlinuxHeartbeatResponse("", -1, "heartbeat request failed");
        }
      }
      _0x441cc1.ipcMain.handle("fetch", async (_0x200764, _0x14e57a, _0x4aa13b) => {
        if (process.platform === "linux" && typeof _0x14e57a === "string" && _0x14e57a.endsWith("/heartbeat")) {
          const _0x1fd6e7 = await _0xlinuxHeartbeat(_0x14e57a, _0x4aa13b || {});
          return _0xlinuxHeartbeatCrypto.encryptToBase64(JSON.stringify(_0x1fd6e7), _0xlinuxHeartbeatKey);
        }
        return (await (0, _0x1c0916.Ay)(_0x14e57a, _0x4aa13b)).text();
      });
      _0x441cc1.ipcMain.handle("set_system_dns", async (_0x3a4e3e, _0xa3c010) => await _0x18643e.set_system_dns(_0xa3c010));
      const _0x3eb901 = _0x18643e.confirm_clash_service();
      const _0x2d24d8 = (..._0x4ff97e) => {
        const _0x131b45 = _0x441cc1.app.isPackaged ? _0x563693().join(process.resourcesPath, "assets") : _0x563693().join(__dirname, "../../assets");
        return _0x563693().join(_0x131b45, ..._0x4ff97e);
      };
      function _0x8f5eb1(_0xb41e91 = undefined, _0x455e8b) {
        if (!_0x261aa4) {
          _0xb41e91?.preventDefault();
          if (_0x455e8b === _0x58510f.MAIN) {
            _0x2b36d0?.hide();
          } else if (_0x455e8b === _0x58510f.DASHBOARD) {
            _0x1ee3c5?.hide();
            _0x10b715.render_dashboard = false;
          }
          if (process.platform === "darwin" && !_0x2b36d0?.isVisible() && !_0x1ee3c5?.isVisible()) {
            _0x441cc1.app.dock.hide();
          }
        }
      }
      const _0x2e579f = async () => {
        const _0x525795 = {
          action: "deny"
        };
        _0x2b36d0 = new _0x441cc1.BrowserWindow({
          show: false,
          width: 920,
          height: 580,
          resizable: false,
          transparent: process.platform !== "linux",
          frame: process.platform !== "linux",
          fullscreenable: false,
          icon: _0x2d24d8("icon.png"),
          webPreferences: {
            preload: _0x441cc1.app.isPackaged ? _0x563693().join(__dirname, "preload.js") : _0x563693().join(__dirname, "../../.erb/dll/preload.js"),
            devTools: _0x3e5a16
          },
          titleBarStyle: process.platform === "darwin" ? "hiddenInset" : undefined
        });
        _0x2b36d0.loadURL(_0x40d145("index.html"));
        _0x2b36d0.webContents.on("did-finish-load", () => {
          if (process.platform !== "linux" || !_0xlinuxAuthToken) {
            return;
          }
          _0x2b36d0?.webContents.executeJavaScript(`(() => {
            let attempts = 0;
            const submit = () => {
              const inputs = [...document.querySelectorAll("input")];
              const email = inputs.find((item) => item.type === "text");
              const password = inputs.find((item) => item.type === "password");
              const button = [...document.querySelectorAll("button")].find((item) => item.innerText.trim() === "登录");
              if (email?.value && password?.value && button) {
                button.click();
                return;
              }
              attempts += 1;
              if (attempts < 20) setTimeout(submit, 250);
            };
            setTimeout(submit, 250);
          })()`).catch(() => {});
        });
        _0x2b36d0.on("ready-to-show", () => {
          if (!_0x2b36d0) {
            throw new Error("\"mainWindow\" is not defined");
          }
          _0x2b36d0.show();
        });
        _0x2b36d0.on("closed", () => {
          _0x2b36d0 = null;
        });
        _0x2b36d0.on("close", _0x3594ae => {
          _0x8f5eb1(_0x3594ae, _0x58510f.MAIN);
        });
        _0x2b36d0.on("hide", () => {
          _0x1435a3.setMainWindowVisible(false);
        });
        _0x2b36d0.on("show", () => {
          _0x1435a3.setMainWindowVisible(true);
        });
        _0x2b36d0.on("minimize", () => {
          _0x1435a3.setMainWindowVisible(false);
        });
        _0x2b36d0.on("restore", () => {
          _0x1435a3.setMainWindowVisible(true);
        });
        _0x2b36d0.webContents.setWindowOpenHandler(_0xe637aa => {
          _0x441cc1.shell.openExternal(_0xe637aa.url);
          return _0x525795;
        });
        _0x2b36d0.webContents.on("will-navigate", (_0x557367, _0x4d48b9) => {
          const _0x1b1c56 = _0x2b36d0.webContents.getURL();
          if (/^https?:\/\//i.test(_0x4d48b9) && !_0x4d48b9.startsWith(_0x1b1c56.split("#")[0])) {
            _0x557367.preventDefault();
            _0x441cc1.shell.openExternal(_0x4d48b9);
          }
        });
      };
      _0x441cc1.app.on("window-all-closed", () => {
        if (process.platform !== "darwin") {
          _0x441cc1.app.quit();
        }
      });
      _0x441cc1.app.whenReady().then(async () => {
        _0x441cc1.session.defaultSession.webRequest.onHeadersReceived((_0x5af1f7, _0x399160) => {
          const _0x4f457c = {
            ..._0x5af1f7.responseHeaders
          };
          _0x4f457c["Content-Security-Policy"] = [""];
          const _0xf7a9f1 = {
            responseHeaders: _0x4f457c
          };
          _0x399160(_0xf7a9f1);
        });
        _0x441cc1.session.defaultSession.setPermissionRequestHandler((_0x21c3fe, _0xac2777, _0x38d966) => {
          _0x38d966(_0xac2777 !== "media");
        });
        await _0x3eb901;
        _0x2e579f().then(async () => {
          _0x1435a3.build_tray(_0x441cc1.app, _0x2b36d0, _0x2d24d8());
        });
        (async () => {
          const _0x360eae = {
            action: "deny"
          };
          _0x1ee3c5 = new _0x441cc1.BrowserWindow({
            show: false,
            width: 1000,
            height: 600,
            resizable: true,
            transparent: process.platform !== "linux",
            frame: process.platform !== "linux",
            icon: _0x2d24d8("icon.png"),
            webPreferences: {
              preload: _0x441cc1.app.isPackaged ? _0x563693().join(__dirname, "preload.js") : _0x563693().join(__dirname, "../../.erb/dll/preload.js"),
              devTools: _0x3e5a16
            },
            titleBarStyle: process.platform === "darwin" ? "hiddenInset" : undefined
          });
          _0x1ee3c5.loadURL(_0x40d145("index.html", "/dashboard"));
          _0x1ee3c5.on("ready-to-show", () => {});
          _0x1ee3c5.on("closed", () => {
            _0x1ee3c5 = null;
          });
          _0x1ee3c5.on("close", _0x2c96bf => {
            _0x8f5eb1(_0x2c96bf, _0x58510f.DASHBOARD);
          });
          _0x1ee3c5.webContents.setWindowOpenHandler(_0x456785 => {
            _0x441cc1.shell.openExternal(_0x456785.url);
            return _0x360eae;
          });
          _0x1ee3c5.webContents.on("will-navigate", (_0x2fa6be, _0xf7e48f) => {
            const _0x546b51 = _0x1ee3c5.webContents.getURL();
            if (/^https?:\/\//i.test(_0xf7e48f) && !_0xf7e48f.startsWith(_0x546b51.split("#")[0])) {
              _0x2fa6be.preventDefault();
              _0x441cc1.shell.openExternal(_0xf7e48f);
            }
          });
        })().then(() => {
          _0x1435a3.set_dashboard_window(_0x1ee3c5);
        });
        _0x441cc1.app.on("activate", () => {
          if (_0x2b36d0 === null) {
            _0x2e579f();
          }
          _0x2b36d0?.show();
        });
        _0x441cc1.app.on("before-quit", async _0x597449 => {
          if (!_0x261aa4) {
            _0x597449.preventDefault();
            _0x261aa4 = true;
            await _0x1435a3.try_disconnect();
            if (!_0x10b715.service_mode) {
              await _0x18643e.close_clash_core();
            }
            setTimeout(() => {
              _0x441cc1.app.quit();
            }, 100);
          }
        });
      }).catch(console.log);
    },
    64756(_0x47de0f) {
      'use strict';

      _0x47de0f.exports = require("tls");
    },
    65692(_0x32dfec) {
      'use strict';

      _0x32dfec.exports = require("https");
    },
    69278(_0xb66013) {
      'use strict';

      _0xb66013.exports = require("net");
    },
    70857(_0x2127fd) {
      'use strict';

      _0x2127fd.exports = require("os");
    },
    76982(_0x2f118e) {
      'use strict';

      _0x2f118e.exports = require("crypto");
    },
    79896(_0x5e43d2) {
      'use strict';

      _0x5e43d2.exports = require("fs");
    },
    84157(_0x5de157) {
      'use strict';

      _0x5de157.exports = require("electron");
    },
    85675(_0x185fa0) {
      'use strict';

      _0x185fa0.exports = require("http2");
    },
    87016(_0x4ae7f1) {
      'use strict';

      _0x4ae7f1.exports = require("url");
    },
    99993(_0x57ce5f) {
      function _0xac8556(_0x15d788) {
        var _0x7e5729 = new Error("Cannot find module '" + _0x15d788 + "'");
        _0x7e5729.code = "MODULE_NOT_FOUND";
        throw _0x7e5729;
      }
      _0xac8556.keys = () => [];
      _0xac8556.resolve = _0xac8556;
      _0xac8556.id = 99993;
      _0x57ce5f.exports = _0xac8556;
    }
  };
  var _0x44d1a6 = {};
  function _0x561c98(_0x1e9c56) {
    var _0x30f277 = _0x44d1a6[_0x1e9c56];
    if (_0x30f277 !== undefined) {
      return _0x30f277.exports;
    }
    var _0x162d7f = _0x44d1a6[_0x1e9c56] = {
      id: _0x1e9c56,
      loaded: false,
      exports: {}
    };
    _0x529d6e[_0x1e9c56].call(_0x162d7f.exports, _0x162d7f, _0x162d7f.exports, _0x561c98);
    _0x162d7f.loaded = true;
    return _0x162d7f.exports;
  }
  _0x561c98.m = _0x529d6e;
  _0x561c98.c = _0x44d1a6;
  _0x561c98.x = () => {
    var _0xea980 = _0x561c98.O(undefined, [121], () => _0x561c98(62748));
    return _0xea980 = _0x561c98.O(_0xea980);
  };
  _0x134d71 = [];
  _0x561c98.O = (_0x1d891e, _0x579cc9, _0x674aad, _0x10ac3e) => {
    if (!_0x579cc9) {
      var _0x3de8ab = Infinity;
      for (_0x54baf9 = 0; _0x54baf9 < _0x134d71.length; _0x54baf9++) {
        for (var [_0x579cc9, _0x674aad, _0x10ac3e] = _0x134d71[_0x54baf9], _0x80dfc3 = true, _0x101e10 = 0; _0x101e10 < _0x579cc9.length; _0x101e10++) {
          if ((_0x10ac3e & false || _0x3de8ab >= _0x10ac3e) && Object.keys(_0x561c98.O).every(_0x22c27c => _0x561c98.O[_0x22c27c](_0x579cc9[_0x101e10]))) {
            _0x579cc9.splice(_0x101e10--, 1);
          } else {
            _0x80dfc3 = false;
            if (_0x10ac3e < _0x3de8ab) {
              _0x3de8ab = _0x10ac3e;
            }
          }
        }
        if (_0x80dfc3) {
          _0x134d71.splice(_0x54baf9--, 1);
          var _0x2d86d2 = _0x674aad();
          if (_0x2d86d2 !== undefined) {
            _0x1d891e = _0x2d86d2;
          }
        }
      }
      return _0x1d891e;
    }
    _0x10ac3e = _0x10ac3e || 0;
    for (var _0x54baf9 = _0x134d71.length; _0x54baf9 > 0 && _0x134d71[_0x54baf9 - 1][2] > _0x10ac3e; _0x54baf9--) {
      _0x134d71[_0x54baf9] = _0x134d71[_0x54baf9 - 1];
    }
    _0x134d71[_0x54baf9] = [_0x579cc9, _0x674aad, _0x10ac3e];
  };
  _0x561c98.n = _0x3f1362 => {
    var _0x491c8e = _0x3f1362 && _0x3f1362.__esModule ? () => _0x3f1362.default : () => _0x3f1362;
    _0x561c98.d(_0x491c8e, {
      a: _0x491c8e
    });
    return _0x491c8e;
  };
  _0x561c98.d = (_0x2366a5, _0x275daf) => {
    for (var _0x21d539 in _0x275daf) {
      if (_0x561c98.o(_0x275daf, _0x21d539) && !_0x561c98.o(_0x2366a5, _0x21d539)) {
        Object.defineProperty(_0x2366a5, _0x21d539, {
          enumerable: true,
          get: _0x275daf[_0x21d539]
        });
      }
    }
  };
  _0x561c98.f = {};
  _0x561c98.e = _0x3fbe5f => Promise.all(Object.keys(_0x561c98.f).reduce((_0x317d2d, _0xba9af2) => {
    _0x561c98.f[_0xba9af2](_0x3fbe5f, _0x317d2d);
    return _0x317d2d;
  }, []));
  _0x561c98.u = _0x11242a => "vendor.js";
  _0x561c98.o = (_0x1cebfc, _0x174ca2) => Object.prototype.hasOwnProperty.call(_0x1cebfc, _0x174ca2);
  _0x561c98.r = _0x1d3985 => {
    if (typeof Symbol != "undefined" && Symbol.toStringTag) {
      Object.defineProperty(_0x1d3985, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(_0x1d3985, "__esModule", {
      value: true
    });
  };
  _0x561c98.nmd = _0x58f689 => {
    _0x58f689.paths = [];
    _0x58f689.children ||= [];
    return _0x58f689;
  };
  (() => {
    var _0x5369a9 = {
      "792": 1
    };
    _0x561c98.O.require = _0x3ec274 => _0x5369a9[_0x3ec274];
    _0x561c98.f.require = (_0x319da8, _0x4e4ff1) => {
      if (!_0x5369a9[_0x319da8]) {
        var _0x2e67e3 = require("./" + _0x561c98.u(_0x319da8));
        if (!_0x5369a9[_0x319da8]) {
          (_0x351c26 => {
            var _0x226160 = _0x351c26.modules;
            var _0x468267 = _0x351c26.ids;
            var _0xfacd44 = _0x351c26.runtime;
            for (var _0x2c43ed in _0x226160) {
              if (_0x561c98.o(_0x226160, _0x2c43ed)) {
                _0x561c98.m[_0x2c43ed] = _0x226160[_0x2c43ed];
              }
            }
            if (_0xfacd44) {
              _0xfacd44(_0x561c98);
            }
            for (var _0x1a1333 = 0; _0x1a1333 < _0x468267.length; _0x1a1333++) {
              _0x5369a9[_0x468267[_0x1a1333]] = 1;
            }
            _0x561c98.O();
          })(_0x2e67e3);
        }
      }
    };
  })();
  _0x5cdef7 = _0x561c98.x;
  _0x561c98.x = () => {
    _0x561c98.e(121);
    return _0x5cdef7();
  };
  return _0x561c98.x();
})());
