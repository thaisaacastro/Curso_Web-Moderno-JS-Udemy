const gulp = require("gulp"); // importando o gulp
const { series, parallel } = require("gulp"); //fazer várias tarefas em série
//const series = gulp.series;

const antes1 = (cb) => {
  console.log("Tarefa Antes 1!");
};

function copiar(cb) /*callback*/ {
  gulp.src(["pastaA.arquivo1.txt", "pastaA.arquivo2.txt"]); //serve para selecionar quais arq vc vai usar como entrada para este det arq
  // .pipe(); -> serve para fazer transformaçoes ou aplicar nos arq de entrada para ser workflow
  // .pipe(imagemPelaMetade())
  // .pipe(imagemEmPretoEBranco())
  // .pipe(transformacaoA())
  // .pipe(tranformacaoB())
  // .pipe(transformacaoC())
  pipe(gulp.dest("pastaB"));

  return cb();
} // determinar qual tarefa foi concluída para o gulp

module.exports.default = series(parallel(antes1, antes2), copiar, fim);
