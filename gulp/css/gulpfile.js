const { parallel } = require("gulp");
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

function copiarHTML() {
  return gulp.src("src/index.html").pipe(gulp.dest("build"));
}

exports.default = parallel(transformacaoCSS, copiarHTML);

// series -> combina tarefas e as executa uma depois da outra
// parallel -> serve para executar diferentes tarefas simultaneamente
