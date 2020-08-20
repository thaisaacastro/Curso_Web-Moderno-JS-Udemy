const modoDev = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  mode: modoDev ? "development" : "production",
  entry: "./src/principal.js",
  output: {
    filename: "principal.js",
    path: __dirname + "/public",
  },

  devServer: {
    contentBase: "./pulic",
    port: 9000,
  },

  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),

    new TerserPlugin({
      parallel: true,
      terserOptions: {
        ecma: 6,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/, //expressão regular
        use: [
          MiniCssExtractPlugin.loader, // plugin que extrai o CSS para fora
          // "style-loader", // Adiciona CSS a DOM injetando a tag <style>
          "css-loader", // interpreta @import, url()...
          "sass-loader",
        ],
      },
    ],
  },
};
