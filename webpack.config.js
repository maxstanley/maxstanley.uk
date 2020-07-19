"use strict";

const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  // Set debugging source maps to be "inline" for
  // simplicity and ease of use
  devtool: "inline-source-map",

  // The application entry point
  entry: "./src/index.tsx",

  // Where to compile the bundle
  // By default the output directory is `dist`
  output: {
    filename: "bundle.js",
	path: path.resolve(__dirname, 'docs')
  },

  // Supported file loaders
  module: {
    rules: [
      {
        test: /\.tsx?$/,
		loader: "ts-loader",
		options: {
		  compilerOptions: {
		    noEmit: false
		  }
	    }
	  },
	  {
        test: /\.css$/i,
	    use: ["style-loader", "css-loader"],
	  }
	]
  },

  // File extensions to support resolving
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  plugins: [
    new webpack.ProvidePlugin({
      "React": "react"
    }),
  ]
};
