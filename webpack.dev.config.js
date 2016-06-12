const path = require('path');
const nodeExternals = require('webpack-node-externals');

const src = path.join(__dirname, '/src');

module.exports = {
  devtool: 'eval',
  target: 'node',
  externals: [nodeExternals()],
  entry: [
    'babel-polyfill',
    './src/migrations',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    root: path.resolve(src),
    extensions: ['', '.config.js', '.web.js', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.resolve(src),
      loader: 'babel',
    }, {
      test: /\.json$/,
      include: path.resolve(src),
      loader: 'json',
    }],
  },
};
