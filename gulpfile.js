var gulp = require('gulp');
var wrench = require('wrench');
var sequence = require('gulp-sequence');

wrench.readdirSyncRecursive('./gulp').filter(function (file) {
    return (/\.(js|coffee)$/i).test(file) && !(/\.\w+\.js/).test(file);
}).map(function (file) {
    require('./gulp/' + file);
});

gulp.task('dev', function(cb) {
    sequence('clean', 'openapi', 'usemin', 'webpack', 'watch', 'server', 'login', cb);
});

gulp.task('default', function() {
    gulp.run('dev');
});

gulp.task('build', function(cb) {
    sequence('clean', 'usemin', 'webpack', 'md5', 'collector', 'del', 'save-map', cb);
});

gulp.task('test', function(cb) {
    sequence('clean', 'usemin', 'webpack', cb);
});