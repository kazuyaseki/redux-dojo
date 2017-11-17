const webpack = require('webpack');

module.exports = {
  entry: {
      counter: __dirname + "/first-app/counter.jsx",
      todo: __dirname + "/todo-app/todo.jsx"
  },
  output: {
      path: __dirname + "/dist",
      filename: "[name].js"
  },
  resolve: {
    extensions: [ ".jsx", ".js" ]
  },
  devtool: "source-map",
  module: {
    loaders: [
        { test: /\.jsx?$/, exclude: /node_modules/, loaders: 'babel-loader' }
    ]
  },
  plugins: []
};