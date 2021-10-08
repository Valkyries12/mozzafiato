const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const cssRule = {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
};

const javascriptRule = {
    test: /\.js$i/,
    exclude: /node_modules/
};

module.exports = {
  output: {
    filename: "app.[contenthash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      title: "Mozzafiato"
    }),
  ],
  module: {
    rules: [
        javascriptRule, cssRule
    ],
  },
};
