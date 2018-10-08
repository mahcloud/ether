const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const WebpackCdnPlugin = require("webpack-cdn-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const plugins = [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname,"assets/webpack_template.html"),
      cdnModule: "deps",
      filename: "index.html",
      inject: "body"
    }),
    new WebpackCdnPlugin({
      modules: {
        "deps": [
          { name: "prop-types", var: "PropTypes", path: "prop-types.min.js" },
          { name: "react", var: "React", path: "umd/react.production.min.js" },
          { name: "react-onclickoutside", var: "onClickOutside", path: "dist/react-onclickoutside.min.js" }
        ]
      }
    })
  ];

  if(env.production) {
    plugins.push(
      new CleanWebpackPlugin(["dist"])
    )
  }

  if(env.performance) {
    plugins.push(
      new BundleAnalyzerPlugin()
    )
  }

  return {
    mode: env.production ? "production" : "development",
    entry: {
      ether: ["./src/index.js"]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            { loader: "babel-loader" },
            {
              loader: "eslint-loader",
              options: {
                emitWarning: true,
                failOnWarning: false
              }
            }
          ]
        }, {
          test: /\.(css)$/,
          exclude: /node_modules/,
          use: [{
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              publicPath: "css/"
            }
          }]
        }
      ]
    },
    output: {
      filename: "[name].umd.js",
      path: path.join(__dirname, "dist"),
      library: "Ether",
      libraryTarget: "umd",
      publicPath: env.production ? "/dist/" : "/",
      umdNamedDefine: env.production
    },
    plugins: plugins
  }
};