var gulp = require('gulp');
var concat = require('gulp-concat');

var uglify = require('gulp-uglify');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var iconfont = require('gulp-iconfont');

gulp.task('default',['css', 'js', 'views', 'icons', 'content']);

gulp.task('css', function(){
    gulp.src('./src/**/*.less')
        .pipe(concat('main.css'))
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./bin/css'))
});

gulp.task('js', function() {
    gulp.src(['./src/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./bin/js'))
});

gulp.task('views', function() {
    gulp.src(['./src/index.html'])
        .pipe(gulp.dest('./bin'))
});

gulp.task('icons', function(){
    gulp.src(['./src/blocks/common/icon/**/*.svg'])
        .pipe(iconfont({
            fontName: 'icon-font', 
            appendUnicode: true, 
            formats: ['ttf', 'eot', 'woff'], 
        }))
        .pipe(gulp.dest('./bin/fonts'));
});

gulp.task('content', function(){
    gulp.src(['./src/blocks/**/*.+(jpg|png)'], { base : './src/blocks'})
        .pipe(gulp.dest('./bin/blocks'));
});


gulp.task('watch', ['default'], function() {
    gulp.watch('./src/**/*.less', ['css']);
    gulp.watch('./src/**/*.js', ['js']);
    gulp.watch('./src/**/*.html', ['views']);
    gulp.watch('./src/blocks/**/*.+(jpg|png)', ['content']);
    gulp.watch('./src/blocks/common/icon/**/*.svg', ['icons']);
});

