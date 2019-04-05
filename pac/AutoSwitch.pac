var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+Autoswitch", {
    "+Autoswitch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)gitbook\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)blogblog\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)bp\.blogspot\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)firebaseio\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)android\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)google-analytics\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)googletagmanager\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)blogger\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)mega\.nz$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)sucloud\.pro$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)bannedbook\.org$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)imgur\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)e-hentai\.org$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)tumblr\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)pytorch\.org$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)wordpress\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)polyvoreimg\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)pixnet\.net$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)shadowsocks\.org$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)bit\.ly$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)t\.co$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)libgen\.io$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)tiqcdn\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)doubleclick\.net$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)twimg\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)chrome\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)teddysun\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)steamcommunity\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)xyxiao001\.github\.io$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)googlevideo\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)fc2\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)google\./.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+ShadowsocksR";
        if (/(?:^|\.)googleapis\.com$/.test(host)) return "+ShadowsocksR";
        if (false) return "+Accesser";
        if (false) return "+Accesser";
        if (false) return "+Accesser";
        if (/(?:^|\.)live\.com$/.test(host)) return "+Accesser";
        if (/(?:^|\.)wikipedia\.org$/.test(host)) return "+Accesser";
        if (false) return "+Accesser";
        if (/(?:^|\.)1drv\.com$/.test(host)) return "+Accesser";
        if (/(?:^|\.)livefilestore\.com$/.test(host)) return "+Accesser";
        if (/(?:^|\.)google\.cn$/.test(host)) return "DIRECT";
        return "+__ruleListOf_Autoswitch";
    },
    "+__ruleListOf_Autoswitch": "DIRECT",
    "+ShadowsocksR": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080";
    },
    "+Accesser": function() {
        ;
var domains = {
  "steamcommunity.com": 1,
  "pixiv.net": 1,
  "tumblr.com": 1,
  "tumblr.co": 1,
  "google.com": 1,
  "instagram.com": 1,
  "quora.com": 1,
  "reddit.com": 1,
  "redditmedia.com": 1,
  "apkmirror.com": 1,
};

var shexps = {
  "*://zh.wikipedia.org/*": 1,
  "*://ja.wikipedia.org/*": 1,
  "*://steamcommunity-a.akamaihd.net/*": 1,
  "*://steamuserimages-a.akamaihd.net/*": 1,
  "*://player.vimeo.com/*": 1,
  "*://*.amazon.co.jp/*": 1,
  "*://onedrive.live.com/*": 1,
  "*://*.dropbox.com/*": 1,
};

var proxy = "PROXY 127.0.0.1:7655;";

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function shExpMatchs(str, shexps) {
    for (shexp in shexps) {
        if (shExpMatch(str, shexp)) {
            return true;
        }
    }
    return false;
}

function FindProxyForURL(url, host) {
    var suffix;
    var pos = host.lastIndexOf('.');
    pos = host.lastIndexOf('.', pos - 1);
    while(1) {
        if (pos <= 0) {
            if (hasOwnProperty.call(domains, host)) {
                return proxy;
            } else if (shExpMatchs(url, shexps)) {
                return proxy;
            } else {
                return direct;
            }
        }
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return proxy;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
}

/* End of PAC */;
        return FindProxyForURL;
    }.call(this)
});
