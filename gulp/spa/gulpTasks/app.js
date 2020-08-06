const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");

function appHTML(cb) {
  return gulp
    .src("src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true })) // tirar os espaços em brancos
    .pipe(gulp.dest("build"));
}

function appCSS() {
  return gulp
    .src("src/assets/sass/index.scss") //caminho relativo
    .pipe(sass().on("error", sass.logError))
    .pipe(uglifycss({ uglifycss: true }))
    .pipe(concat("app.min.css"))
    .pipe(gulp.dest("build/assets/css"));
}

function appJS() {
  return gulp
    .src("src/assets/js/**/*.js")
    .pipe(babel({ presets: ["ENV"] }))
    .pipe(uglify())
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("build/assets/js"));
}

function appIMG() {
  return gulp
    .src("src/assets/imgs/**/*.*")
    .pipe(gulp.dest("build/assets/imgs"));
}

gulp.task("appHTML", appHTML); //registrar uma task

module.exports = {
  appHTML,
  appCSS,
  appJS,
  appIMG,
};
