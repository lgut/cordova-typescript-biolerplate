const path = require("path");

const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const WebpackHtmlPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = env => {
  return {
    mode: env,
    node: {
      __dirname: false,
      __filename: false
    },
    resolve: {
      alias: {
        //env: path.resolve(__dirname, `../config/env_${env}.json`)
      },
      extensions: ['.ts', '.js', '.json']
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: ["ts-loader"]
        },
        {
          test: /\.(s*)css$/,
          use: ["style-loader", "css-loader", 'sass-loader']
        },
        {
          test: /\.html$/,
          use: {
            loader:"html-loader",
            options:{
              interpolate:true
            }
          }
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        }
      ]
    },
    plugins: [
      new FriendlyErrorsWebpackPlugin({ clearConsole: env === "development" }),
      new WebpackHtmlPlugin({
        template: path.resolve(__dirname, `../src/index.html`)
      }),
      new CleanWebpackPlugin(['www'])
    ]
  };
};