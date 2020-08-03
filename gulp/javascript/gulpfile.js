const { series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

function padrao(cb) {
  gulp.src("src/**/*.js"); // qualquer sub pasta que esteja.

  return cb();
}
