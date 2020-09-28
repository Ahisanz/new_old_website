const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const pug = require('gulp-pug');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify'); 
const babelify = require('babelify'); 
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');

let autoprefixBrowsers = ['> 1%', 'last 2 versions', 'firefox >= 4', 'safari 7', 'safari 8', 'IE 8', 'IE 9', 'IE 10', 'IE 11'];

var jsSRC = 'src/js/app.js';
var jsFILES = [jsSRC];


function css(cb) {
    gulp.src('src/sass/app.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('dest/css'))
    cb();
};

function html(cb) {
    gulp.src('src/pug/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dest'))
    cb();
};

function js(cb) {
    jsFILES.map(function(entry) {
        return browserify({
            entries: [entry]
        })
        .transform(babelify, { presets: ['@babel/preset-env']})
        .bundle()
        .pipe( source(entry) )
        .pipe(rename({extname : '.min.js'}))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps : true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dest/js'))
    })    
    cb();
}


function images(cb) {
    gulp.src('src/images')
    .pipe(gulp.dest('dest/images'))
    cb();
}

// function fonts(cb) {
//     gulp.src('src/fonts')
//     .pipe(gulp.dest('dest/fonts'))
//     cb();
// }

function watch_files() {
    gulp.watch('src/sass/app.scss', css)
    gulp.watch('src/pug/**/*.pug', html)
    gulp.watch('src/js/**/*.js', js)
    // watch images + fonts
};

// add images + fonts (statics features)
// add style + autoprefixer + js + simplify + es6 + babel + pug
// add watch functions

gulp.task("css", css);
gulp.task("html", html);
gulp.task("js", js);
gulp.task("images", images);
// gulp.task("fonts", fonts);
gulp.task("default", gulp.parallel(css, html, js, images));
gulp.task("watch", watch_files);