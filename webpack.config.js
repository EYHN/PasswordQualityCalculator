const path = require('path')

const babel = {
  test: /\.m?js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
};

module.exports = [{
  name: 'password-benchmark',
  mode: 'production',
  context: path.resolve(__dirname, './dist/'),
  target: 'web',
  entry: [
    path.resolve(__dirname, './lib/PasswordBenchmark.js')
  ],
  output: {
    library: 'PasswordBenchmark',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: 'PasswordBenchmark.js',
    publicPath: '/',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, './dist/')
  },
  devtool: 'source-map',
  module: {
    rules: [
      babel
    ]
  }
}, {
  name: 'most-popular-passwords',
  mode: 'production',
  context: path.resolve(__dirname, './dist/'),
  target: 'web',
  entry: [
    path.resolve(__dirname, './lib/MostPopularPasswords.js')
  ],
  output: {
    library: 'MostPopularPasswords',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: 'MostPopularPasswords.js',
    publicPath: '/',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, './dist/')
  },
  module: {
    rules: [
      babel
    ]
  }
}]