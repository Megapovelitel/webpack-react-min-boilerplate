const webpack = require("webpack");
const { merge } = require("webpack-merge");

const webpackCommonConfig = require("./webpack.config.common");

module.exports = merge(webpackCommonConfig, {
	mode: "development",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.EnvironmentPlugin({ NODE_ENV: "development" }),
  ],
  devtool: "source-map",
  devServer: {
    hot: true,
  },
});
