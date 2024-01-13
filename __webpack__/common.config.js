import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const STATIC_DIR = path.resolve(__dirname, '..', 'static');

const plugins = [
  new Dotenv(),
  new HtmlWebpackPlugin({
    template: path.join(PUBLIC_DIR, 'index.html'),
    filename: 'index.html',
  }),
  new FaviconsWebpackPlugin({
    logo: path.resolve(STATIC_DIR, 'favicon.svg'),
    mode: 'light',
  }),
  new webpack.HotModuleReplacementPlugin(),
];

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

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

export default {
  devServer,
  plugins,
  entry: path.join(__dirname, '..', 'src', 'index.tsx'),
  output: {
    path: BUILD_DIR,
    publicPath: '/',
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@src': path.join(__dirname, '..', 'src'),
      '@assets': path.join(__dirname, '..', 'src/assets'),
      '@jest-dir': path.join(__dirname, '..', '__jest__'),
    },
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
                namedExport: true,
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
            },
          },
        ],
      },
      {
        test: /\.(s[ac])ss$/i,
        use: ['sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[hash][ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash][ext]',
        },
      },
    ],
  },
};
