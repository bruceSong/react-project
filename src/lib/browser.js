/**
 * @file browser tools
 * @author: songgl@fxiaoke.com
 * 浏览器检测工具
 */

/**
 * @class Browser
 */

var dataBrowser = [
    {
        pattern: /msie\s*(\d+\.\d+)/,
        name: 'ie'
    },
    {
        pattern: /opr\/(\d+)/,
        name: 'opera'
    },
    {
        pattern: /firefox\/(\d+)/,
        name: 'firefox'
    },
    {
        pattern: /qqbrowser\/(\d+\.\d+)/,
        name: 'qq'
    },
    {
        pattern: /lbbrowser;\s*rv:(\d+)/,
        name: 'leibao'
    },
    {
        pattern: /chrome\/(\d+)/,
        name: 'chrome'
    }
];

var dataOS = [
    {
        pattern: /win/,
        name: 'windows'
    },
    {
        pattern: /mac/,
        name: 'mac'
    },
    {
        pattern: /linux/,
        name: 'linux'
    }
];

var browserCode = {
    ie: 1,
    safari: 2,
    chrome: 3,
    firefox: 4,
    opera: 6,
    qq: 7,
    leibao: 9
};

var platformCode = {
    mac: 1,
    windows: 2
};

var init = function() {
    var Browser = {};
    var ua = navigator.userAgent.toLowerCase();
    var platform = navigator.platform.toLowerCase();

    for (var i = 0; i < dataBrowser.length; i++) {
        var item = dataBrowser[i];
        var match;
        if (match = ua.match(item.pattern)) {
            Browser.browser = item.name;
            Browser.version = match[1];
            break;
        }
    }

    for (var i = 0; i < dataOS.length; i++) {

        var item = dataOS[i];
        var match;
        if (match = ua.match(item.pattern)) {
            Browser.platform = item.name;
            break;
        }
    }
    Browser.browserCode = browserCode[Browser.browser];
    Browser.platformCode = platformCode[Browser.platform];
    return Browser;
};

module.exports = init();