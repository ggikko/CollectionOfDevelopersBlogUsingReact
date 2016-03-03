/**
 * Created by parkjihong on 16. 3. 2..
 */
const gulp = require('gulp'),
    watch = require('gulp-watch'),
    //webpack = require('webpack'),
    //webpackConfig = require('./webpack.config'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

//webpack
//gulp.task('build', function(param) {
//    return webpack(webpackConfig, function(err, stats){
//        param();
//    });
//});

//uglify
//gulp.task('scripts', function(){
    //gulp.src('src/js/*.js')
        //.pipe(plumber())
        //.pipe(uglify())
        //.pipe(gulp.dest('js'));
//});

//sass
//gulp.task('sass', function(){
//    gulp.src('src/scss/*.scss')
//        .pipe(plumber())
        //.pipe(sass({
            //outputStyle : 'compressed'
        //}))
//        .pipe(gulp.dest('css'));
//});

//watch
gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', ['react']);
});

gulp.task('react', function(){
    return browserify('js/App.js',{
        debug:true
    })
    .transform(babelify.configure({
            presets:['es2015', 'react' ]
        }))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public'));
})

//all task
gulp.task('default', ['watch','react']);