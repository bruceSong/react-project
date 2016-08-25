/**
 *  本地服务模块
 */
var gulp = require('gulp');
var config = require('./config');


gulp.task('openapi', function() {
    return gulp.src(config.path.src + '/openapi/**/*.js')
        .pipe(gulp.dest(config.path.build + '/openapi/'));
});
