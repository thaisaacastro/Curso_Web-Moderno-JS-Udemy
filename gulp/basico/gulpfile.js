const gulp = require("gulp"); // importando o gulp
//const { series, parallel } = require("gulp"); //fazer várias tarefas em série
const series = gulp.series;

function copiar(cb) {
  console.log("Tarefa de copiar!");
  return cb();
}

module.exports.default = series(copiar);
