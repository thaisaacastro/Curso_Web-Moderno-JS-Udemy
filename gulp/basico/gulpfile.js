const gulp = require("gulp"); // importando o gulp
//const { series } = require("gulp"); //fazer várias tarefas em série
const series = gulp.series;

function copiar(cb) /*callback*/ {
  console.log("Tarefa de copiar!");
  return cb();
} // determinar qual tarefa foi concluída para o gulp
