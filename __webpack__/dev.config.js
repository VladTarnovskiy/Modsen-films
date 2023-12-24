import { merge } from "webpack-merge";
import common from "./common.config.js";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const plugins = [
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css",
  }),
];

export default merge(common, {
  mode: "development",
  target: "web",
  plugins,
  devtool: "inline-source-map",
  output: {
    filename: "[name].[contenthash].js",
  },
});
