const HtmlWebpackPlugin = require('html-webpack-plugin')
// const path = require('path')
// const CopyWebpackPlugin = require("copy-webpack-plugin");

const cssRule = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader']
}

const javascriptRule = {
  test: /\.js$i/,
  exclude: /node_modules/
}

const imagesRule = {
  test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
  type: 'asset/resource'
}

const eslintRule = {
  rules: [
    {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader']
    }
  ]
}

module.exports = {
  output: {
    filename: 'app.[contenthash].js',
    clean: true
  },
  module: {
    rules: [
      javascriptRule, cssRule, imagesRule, eslintRule
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'Mozzafiato'
    })

  ]
}
