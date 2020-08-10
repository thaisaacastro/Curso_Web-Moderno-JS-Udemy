const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/principal.js",
  output: {
    filename: "principal.js",
    path: __dirname + "/public",
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/, //expressão regular
        use: [
          MiniCssExtractPlugin.loader, // plugin que extrai o CSS para fora
          // "style-loader", // Adiciona CSS a DOM injetando a tag <style>
          "css-loader", // interpreta @import, url()...
        ],
      },
    ],
  },
};
