(function () {

    'use strict';

    var gulp        = require('gulp');
    var concat      = require('gulp-concat');
    var less        = require('gulp-less');
    var order       = require('gulp-order');
    var browserSync = require('browser-sync').create();
    var reload      = browserSync.reload;

    // task default
    gulp.task('default', [
        'compile.css',
        'pack.vendor',
        'pack.app',
        'serve',
        'watch'
    ]);

    // task compile.css
    gulp.task('compile.css', function() {
        gulp.src('./app/styles/**/*.css')
            .pipe(concat('style.css'))
            .pipe(gulp.dest('./dist/styles/styles.css'));
    });

    // task pack.app
    gulp.task('pack.app', function() {
        gulp.src('./app/**/*.js')
            .pipe(order([
                'app/app.module.js',
                'app/**/*.js'
            ]))
            .pipe(concat('app.js'))
            .pipe(gulp.dest('./dist/scripts/'));
    });

    // task pack.vendor
    gulp.task('pack.vendor', function() {
        gulp.src([
            './node_modules/angular/angular.js',
            './node_modules/jquery/dist/jquery.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist/scripts/'));
    });

    // task reload
    gulp.task('reload', function () {
        reload
    })

    // task serve
    gulp.task('serve', function() {
        browserSync.init({
            server: {
                baseDir: './'
            }
        });
    });

    // watch
    gulp.task('watch', function() {
        gulp.watch(['app/**/*.js', 'app/**/*.css'], ['compile.css', 'pack.app', reload]);
    });

})();