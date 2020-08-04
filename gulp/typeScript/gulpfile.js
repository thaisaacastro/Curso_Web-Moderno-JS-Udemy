const { series } = require("gulp");
const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

function transformacaoTS() {
  return tsProject
    .src() // pegar todo cód fonte
    .pipe(tsProject())
    .pipe(gulp.dest("build")); // passando para pasta de destino
}

exports.default = series(transformacaoTS);
