const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'lib'),
        exclude: /(node_modules|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                'targets': {
                  'browsers': ['last 2 versions']
                }
              }],
              'react'
            ],
            plugins: [
              'transform-object-rest-spread'
            ]
          }
        }
      }
    ]
  },
  externals: {
    react: 'react'
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        mangle: false
      }
    })
  ]
}
