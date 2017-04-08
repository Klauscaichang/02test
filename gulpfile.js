(function(){
    // gulp对象
    var gulp = require('gulp');
    // 合并
    var concat = require('gulp-concat');
    // 压缩html
    var html = require('gulp-htmlmin');
    // 压缩js
    var js = require('gulp-uglify'); 
    // 压缩css
    var css = require('gulp-cssnano');

    gulp.task('js',function(){
        gulp.src('./index.js')
        .pipe(js())
        .pipe( gulp.dest('./dist') );
    })
     gulp.task('html',function(){
        gulp.src('./index.html')
        .pipe( html({
                    removeComments:true,
                    collapseWhitespace:true,
                    minifyCSS:true,
                    removeStyleLinkTypeAttributes:true
        }))
        .pipe( gulp.dest('./dist') );
    })
     gulp.task('css',function(){
        gulp.src('./index.css')
        .pipe( css() )
        .pipe( gulp.dest('./dist') );
    })
    gulp.task('watch',function(){
        gulp.watch(['./index.html','index.js','index.css'],['html','js','css']);
    })

})()