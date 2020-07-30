const gulp = require("gulp"); // importando o gulp
const { series, parallel } = require("gulp"); //fazer várias tarefas em série
//const series = gulp.series;

const antes1 = (cb) => {
  console.log("Tarefa Antes 1!");
  return cb();
};

const antes2 = (cb) => {
  console.log("Tarefa Antes 2!");
  return cb();
};

function copiar(cb) /*callback*/ {
  gulp
    .src(["pastaA.arquivo1.txt", "pastaA.arquivo2.txt"]) //serve para selecionar quais arq vc vai usar como entrada para este det arq
    .pipe(); //
  return cb();
} // determinar qual tarefa foi concluída para o gulp

const fim = (cb) => {
  console.log("Tarefa Fim!");
  return cb();
};

module.exports.default = series(parallel(antes1, antes2), copiar, fim);
