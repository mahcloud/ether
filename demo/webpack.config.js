const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const WebpackCdnPlugin = require("webpack-cdn-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
  const plugins = [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname,"assets/webpack_template.html"),
      cdnModule: "deps",
      filename: "index.html",
      inject: "head"
    }),
    new WebpackCdnPlugin({
      modules: {
        "deps": [
          { name: "react", var: "React", path: "umd/react.production.min.js" },
          { name: "react-dom", var: "ReactDOM", path: "umd/react-dom.production.min.js" },
          { name: "react-onclickoutside", var: "onClickOutside", path: "dist/react-onclickoutside.min.js" },
          { name: "react-router", var: "ReactRouter", path: "umd/react-router.min.js" },
          { name: "react-router-dom", var: "ReactRouterDOM", path: "umd/react-router-dom.min.js" },
          { name: "prop-types", var: "PropTypes", path: "prop-types.min.js" },
          { name: "emotion", var: "emotion", path: "dist/emotion.umd.min.js" }
        ]
      }
    })
  ];
  // { name: "@alchemyalcove/ether", var: "Ether", path: "dist/ether.js" },

  if(env.production) {
    plugins.push(
      new CleanWebpackPlugin(["dist"])
    )
  }

  return {
    mode: env.production ? "production" : "development",
    devServer: {
      historyApiFallback: true,
      port: 4445
    },
    devtool: env.production || env.nodevtools ? false : "inline-eval-cheap-source-map",
    entry: {
      demo: ["./src/index.js"]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
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
          test: /\.style.js$/,
          exclude: /node_modules/,
          loader: "stylelint-custom-processor-loader",
          options: {
            emitWarning: true
          }
        }, {
          test: /\.(svg|png|gif|jpe?g)$/,
          exclude: /node_modules/,
          use: [{
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              publicPath: "images/"
            }
          }]
        }
      ]
    },
    output: {
      filename: env.production ? "[name].[chunkhash].js" : "[name].js",
      path: path.join(__dirname, "public")
    },
    plugins: plugins
  }
};