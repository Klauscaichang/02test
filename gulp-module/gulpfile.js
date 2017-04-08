/*var gulp = require('gulp');
var unlify = require('unlify');
gulp.task('rewuName',function(){
    gulp.src('./a.js').pipe(gulp.dest('./dist'))
});*/


//对js进行压缩
/*
var gulp = require('gulp');

var uglify = require('gulp-uglify');

gulp.task('name',function(){
    gulp.src('./b.js').pipe(uglify()).pipe(gulp.dest('./dist'));
})*/


//对js进行合并  然后压缩
/*
var gulp = require('gulp');

var uglify = require('gulp-uglify');

var concat = require('gulp-concat');

gulp.task('name',function(){
    gulp.src(['./b.js','./a.js'])
    .pipe(concat('.all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));

})*/


//对css进行合并  并且压缩
var gulp = require('gulp');

// var uglify = require('gulp-uglify');

var concat = require('gulp-concat');

var cssnano = require('gulp-cssnano');


gulp.task('name',function(){
    gulp.src(['./style.css','./sty.css'])
    .pipe(concat('all.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist'));

})

// 对html进行压缩
// var gulp = require('gulp');
// js压缩
// var uglify = require('gulp-uglify');
// 合并
// var concat = require('gulp-concat');
// css压缩
// var cssnano = require('gulp-cssnano');
// html压缩
// var html = require('gulp-htmlmin');
// gulp.task('name',function(){
//     gulp.src('./index.html')
//     .pipe(html({collapseWhitespace:true,}))
//     .pipe(gulp.dest('./dist'));

// })



var gulp = require('gulp');

var html = require('gulp-htmlmin');


var concat = require('gulp-concat');

var cssnano = require('gulp-cssnano');


gulp.task('css',function(){
    gulp.src(['./style.css','./sty.css'])
    .pipe(concat('all.css'))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist'));

})

gulp.task('name',function(){
    gulp.src('./index.html')
    .pipe(html({collapseWhitespace:true}))
    .pipe(gulp.dest('./dist'));

})
gulp.watch(['./index.html','style.css'],['name','css'])