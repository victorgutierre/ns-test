const { resolve } = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');
const { getIfUtils } = require('webpack-config-utils');

module.exports = env => {
  const { ifNotProd } = getIfUtils(env)

  return validate({
    entry: './index.js',
    context: __dirname,
    output: {
      path: resolve(__dirname, './build'),
      filename: 'bundle.js',
      publicPath: '/build/',
      pathinfo: ifNotProd(),
    },
    devServer: {
      port: 8080,
      historyApiFallback: true
    },
    module: {
      loaders: [
        {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        {test: /\.css$/, loader: 'style-loader!css-loader'},
        {test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/, loader: 'file-loader'},
      ],
    },
  });
};
