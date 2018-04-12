const path = require("path");
const merge = require("webpack-merge");
const base = require("./webpack.base.config");

module.exports = env => {
  if(!env){env = "development"};
  return merge(base(env), {
    entry: {
      index: "./src/index.ts"
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "../www")
    }
  });
};