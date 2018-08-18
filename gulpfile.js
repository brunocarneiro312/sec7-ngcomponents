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
        'vendor.css',
        'pack.vendor',
        'pack.app',
        'pack.view',
        'serve',
        'watch'
    ]);

    // task compile.css
    gulp.task('compile.css', function() {
        gulp.src('./app/styles/**/*.css')
            .pipe(concat('style.css'))
            .pipe(gulp.dest('./dist/styles/'));
    });

    // vendor.css
    gulp.task('vendor.css', function() {
        gulp.src([
            'node_modules/bootstrap/dist/css/bootstrap.css'
        ])
            .pipe(concat('vendor.css'))
            .pipe(gulp.dest('./dist/styles/'))
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

    // pack.view
    gulp.task('pack.view', function () {
        gulp.src('app/components/carousel/view/carousel-template.html')
            .pipe(gulp.dest('./dist/views'));

        gulp.src('app/components/**/*.css')
            .pipe(concat('styles.css'))
            .pipe(gulp.dest('./dist/views/'));
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
        gulp.watch([
            '**/*.html',
            'app/**/*.js',
            'app/**/*.css'
        ], [
            'compile.css',
            'pack.app',
            'pack.view',
            reload
        ]);
    });

})();