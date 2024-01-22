import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { merge } from 'webpack-merge';

import common from './common.config.js';

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  }),
];

const devServer = {
  historyApiFallback: true,
  open: true,
  compress: true,
  allowedHosts: 'all',
  hot: true,
  client: {
    overlay: {
      errors: true,
      warnings: true,
    },
    progress: true,
  },
  port: 3000,
};

export default merge(common, {
  devServer,
  mode: 'development',
  target: 'web',
  plugins,
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[contenthash].js',
  },
});
