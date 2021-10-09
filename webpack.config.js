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

const imagesRule = {
  test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
  type: "asset/resource"
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
        javascriptRule, cssRule, imagesRule
    ],
  },
};
