const path = require('path');
const webpack = require('webpack'); //to access built-in plugins


module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),

  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,

        loader: "babel-loader",

        options: {
          presets: ['env','react']
        },
      },
    ],
  },

  devtool: "cheap-eval-source-map",

  target: "web",

  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],

}
