const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  return {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      hot: true,
      open: true,
      port: 2000,
      clientLogLevel: 'silent',
      contentBase: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css',
      }),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: '/src/index.html',
        title: 'React Calculator',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.(jsx|js)$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  "targets": "defaults" 
                }],
                '@babel/preset-react'
              ]
            }
          }]
        },
      ]
    },
  };
};