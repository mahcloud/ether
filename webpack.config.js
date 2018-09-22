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
    })
  ];

  if(env.production) {
    plugins.push(
      new CleanWebpackPlugin(["dist"])
    )
  }
    plugins.push(
      new WebpackCdnPlugin({
        modules: {
          "deps": [
	    { name: "prop-types", var: "PropTypes", path: "prop-types.min.js" },
            { name: "react", var: "React", path: "umd/react.production.min.js" },
            { name: "react-dom", var: "ReactDOM", path: "umd/react-dom.production.min.js" },
	    { name: "react-onclickoutside", var: "onClickOutside", path: "dist/react-onclickoutside.min.js" },
            { name: "react-router", var: "ReactRouter", path: "umd/react-router.min.js" },
            { name: "react-router-dom", var: "ReactRouterDOM", path: "umd/react-router-dom.min.js" },
          ]
        }
      })
    );
  if(env.performance) {
    plugins.push(
      new BundleAnalyzerPlugin()
    )
  }

  return {
    mode: env.production ? "production" : "development",
    devServer: {
      historyApiFallback: true,
      port: 4444
    },
    devtool: env.production || env.nodevtools ? false : "inline-eval-cheap-source-map",
    entry: {
      ether: ["babel-polyfill", "./src/index.js"],
      demo: ["./demo/app.js"]
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
      filename: "[name].js",
      path: path.join(__dirname, "dist"),
      library: "Ether",
      libraryTarget: "umd",
      publicPath: env.production ? "/dist/" : "/",
      umdNamedDefine: env.production
    },
    plugins: plugins
  }
};