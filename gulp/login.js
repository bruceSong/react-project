/**
 *  本地服务模块
 */
var fs = require('fs');
var path = require('path');
var https = require('https');
var through = require('through2');
var gulp = require('gulp');
var url = require('url');
var config = require('./config');

var TPL_REG = /<%\s*(\w+)\s*%>/g;
var template = (html, data) => (html.replace(TPL_REG, (m, p) => data[p] || ''));


gulp.task('login', function() {
    var accounts = require('../login/accounts.json');
    return gulp.src('./login/index.html').pipe(through.obj(function(file) {
            var contents = file.contents.toString();
            contents = template(contents, {
                env: 'sde',
                accounts: JSON.stringify(accounts.sde)
            });
            file.contents = new Buffer(contents);
            this.push(file);
        }))
        .pipe(gulp.dest(config.path.build + '/login/'));
});
