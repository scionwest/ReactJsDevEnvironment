const webpack = require('webpack');

module.exports = {
  entry: [ './src/App.jsx' ],
  output: {
    path: './bin/content/js',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: [ 'es2015', 'react' ],
        cacheDirectory: true
      }
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
  ]
};
