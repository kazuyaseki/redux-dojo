const webpack = require('webpack');

module.exports = {
  entry: {
      counter: __dirname + "/first-app/counter.js"
  },
  output: {
      path: __dirname + "/dist",
      filename: "[name].js"
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
    extensions: [ ".js" ]
  },
  module: {
      loaders: [
          { exclude: /node_modules/ }
      ]
  },
  plugins: []
};