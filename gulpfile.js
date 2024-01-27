const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
sass.compiler = require("node-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const gulp = require("gulp");
const webp = require("gulp-webp");
var htmlmin = require("gulp-html-minifier");
const minify = require("gulp-minify");
var concat = require("gulp-concat");

// Watch css
function css() {
  return src("scss/*.scss")
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(dest("css"));
}

// Watch minifyjs
function minifyjs() {
  return src("./js/*.js", { allowEmpty: true })
    .pipe(minify({ noSource: true }))
    .pipe(concat("main.js"))
    .pipe(dest("./js/min"));
}

// Watch webp
gulp.task("webp", function () {
  gulp.src("media/**/*.*").pipe(webp()).pipe(gulp.dest("media/webp"));
});

// Watch minify
gulp.task("minify", function () {
  gulp
    .src("./src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./dist"));
});

//Watch files
function watchFiles() {
  watch(["scss"], css);
  watch(["./js/*.js"], minifyjs);
}

exports.default = series(css, minify, minifyjs);
exports.watch = watchFiles;
