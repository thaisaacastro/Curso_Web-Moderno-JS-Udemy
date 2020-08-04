const { series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

function padrao(cb) {
  return gulp
    .src("src/**/*.js") // qualquer sub pasta que esteja.
    .pipe(
      babel({
        comments: false,
        presets: ["env"], //obj de conf/ pegar a version do JS + novo
      })
    )

    .pipe(uglify()) // vai pegar todo cod e converter para ser mimificado
    .on("error", (err) => console.log(err)) // quando acontecer det evento
    .pipe(concat("codigo.min.js")) // todos os arq selecionados que já foram copilados este res será concatenado
    .pipe(gulp.dest("build")); // destino
}

function fim(cb) {
  console.log("FIM!!!");
  return cb();
}
exports.default = series(padrao);
