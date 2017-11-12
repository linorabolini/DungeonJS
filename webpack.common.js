const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: 'src/index.ejs'
    }),
    new ExtractTextPlugin({ // define where to save the file
      filename: 'dist/[name].bundle.css',
      allChunks: true,
    })
  ],
  module: {
    rules: [{
      test: /\.(sass|scss)$/,
      use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }, {
      test: /\.(js|jsx)$/,
      exclude: [/node_modules/],
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    }]
  }
};
