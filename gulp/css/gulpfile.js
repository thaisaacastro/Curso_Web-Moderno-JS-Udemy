const { series } = require("gulp");
const gulp = require("gulp");
const sass = require("gulp-sass");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");

function transformacaoCSS() {
  return gulp
    .src("src/sass/index.scss") // font
    .pipe(sass().on("error", sass.logError)) // passar está function como refer/ converter para CSS
    .pipe(uglifycss({ uglyComments: true }))
    .pipe(concat("estilo.min.css"))
    .pipe(gulp.dest("build/css"));
}

exports.default = series(transformacaoCSS);
