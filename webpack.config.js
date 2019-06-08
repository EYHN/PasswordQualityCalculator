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
  name: 'password-quality-calculator',
  mode: 'production',
  context: path.resolve(__dirname, './dist/'),
  entry: [
    path.resolve(__dirname, './lib/PasswordQualityCalculator.js')
  ],
  output: {
    library: 'PasswordQualityCalculator',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: 'PasswordQualityCalculator.js',
    publicPath: '/',
    chunkFilename: '[name].js',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
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
    globalObject: 'typeof self !== \'undefined\' ? self : this',
    path: path.resolve(__dirname, './dist/')
  },
  module: {
    rules: [
      babel
    ]
  }
}]