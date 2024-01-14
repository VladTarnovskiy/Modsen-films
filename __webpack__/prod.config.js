import { merge } from 'webpack-merge';
import common from './common.config.js';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const plugins = [
  new MiniCssExtractPlugin({
    filename: '[contenthash].css',
  }),
  new ImageMinimizerPlugin({
    minimizer: {
      implementation: ImageMinimizerPlugin.imageminMinify,
      options: {
        plugins: [
          ['gifsicle', { interlaced: true }],
          ['jpegtran', { progressive: true }],
          ['optipng', { optimizationLevel: 8 }],
          [
            'svgo',
            {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                      addAttributesToSVGElement: {
                        params: {
                          attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
                        },
                      },
                    },
                  },
                },
              ],
            },
          ],
        ],
      },
    },
  }),
];

export default merge(common, {
  mode: 'production',
  target: 'web',
  plugins,
  devtool: false,
  output: {
    filename: '[fullhash].js',
  },
  optimization: {
    usedExports: false,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false,
          compress: true,
          output: {
            beautify: true,
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
});
