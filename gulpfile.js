'use strict';

// 引入gulp包，nodejs代码
var gulp = require('gulp');
// 引入gulp-sass包
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

// 创建一个gulp任务 sass
gulp.task('sass', function() {
    return gulp.src('./src/css/sass/**/*.scss')
        // 让gulp拿到原始文件
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        // 把scss原始文件交给gulp-sass编译，转换成css文件
        .pipe(gulp.dest('./src/css'));
});

// 创建gulp监听任务 sass：watch
gulp.task('sass:watch', function() {
    gulp.watch('./src/css/sass/**/*.scss', gulp.series('sass'));
});