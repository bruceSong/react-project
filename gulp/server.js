/**
 *  本地服务模块
 */
var fs = require('fs');
var path = require('path');
var https = require('https');
var gulp = require('gulp');
var url = require('url');
var proxy = require('proxy-middleware');
//var proxy = require('http-proxy-middleware');
//var httpProxy = require('http-proxy');
var browserSync = require('browser-sync').create();

var config = require('./config');
var rewriteConf = require('../proxy.json');

var sslDir = path.join(__dirname, '../ssl/');

/////////////////////////////////////////////
/*var loginProxy = function(req, res, next) {
    if (req.url === '/XV/User/Login') {
        var options = {
            hostname: 'www.fsceshi.com',
            path: '/',
            method: 'GET',
            key: fs.readFileSync(sslDir + 'server.key'),
            cert: fs.readFileSync(sslDir + 'server.crt')
        };
        options.agent = new https.Agent(options);
        https.request(options, (response) => {
            response.pipe(res);
        });
    }
    next();
};*/
////////////////////////////////////////////

// start server
gulp.task('server', function() {
    //var proxies = [loginProxy];
    var proxies = [];
    rewriteConf.proxies.forEach(function(item) {
        var paths = item.path.match(/^\/\(([^\(\)]+)\)$/);
        if (paths) {
            paths = paths[1].split('|');
            paths.forEach(function(items) {
                var proxyOptions = url.parse('http://' + item.proxy + '/' + items);
                proxyOptions.route = '/' + items;
                proxies.push(proxy(proxyOptions));
            });
        } else {
            var proxyOptions = url.parse('http://' + item.proxy + item.path);
            proxyOptions.route = item.path;
            proxies.push(proxy(proxyOptions));
        }
    });

	browserSync.init({
		server: {
			baseDir: config.path.build,
            middleware: proxies
		},
		port: 8080
	});
});

gulp.task('reload', ['webpack'], function() {
    browserSync.reload();
});
