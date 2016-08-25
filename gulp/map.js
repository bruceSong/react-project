/**
 *  清除build目录
 */

var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var through = require('through2');
var config = require('./config');

var map = {
    js: [],
    css: []
};

gulp.task('save-map', ['create-map'], function() {
    if (map.js[0].indexOf('app-') > 0) {
        var tmp = map.js[0];
        map.js[0] = map.js[1];
        map.js[1] = tmp;
    }
    fs.writeFileSync(path.join(__dirname, '../build/map.json'), JSON.stringify(map));
});
gulp.task('create-map', function() {
    var base = '/csc/static/pkg/';
	return gulp.src(config.path.build + '/{*.css,js/*.js}')
        .pipe(through.obj(function(file, enc, cb) {
            var parserHistory = path.parse(file.history[0]);
            if (parserHistory.ext === '.js') {
                map.js.push(base + 'js/' + parserHistory.base);
            } else {
                map.css.push(base + parserHistory.base);
            }
            this.push(file);
            cb();
        }));
});
