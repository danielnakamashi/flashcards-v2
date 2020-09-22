import path from 'path';
import { Configuration } from 'webpack';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import htmlWebpackTemplate from 'html-webpack-template';
import TerserPlugin from 'terser-webpack-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export default (env: { [key: string]: string }, argv: Configuration): Configuration => {
  const isDev = argv.mode !== 'production';
  return {
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, './dist'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: isDev
        ? {
            '@flashcards/application': path.resolve(__dirname, '../application/src'),
            '@flashcards/core': path.resolve(__dirname, '../core/src'),
            '@flashcards/presentation': path.resolve(__dirname, '../presentation/src'),
            '@flashcards/service': path.resolve(__dirname, '../service/src'),
            '@flashcards/web': path.resolve(__dirname, '../web/src'),
          }
        : {},
    },
    plugins: [
      new Dotenv({ path: path.resolve(__dirname, '../../.env') }),
      new HtmlWebpackPlugin({
        title: 'Flashcards',
        inject: false,
        template: htmlWebpackTemplate,
        appMountId: 'root',
      }),
      ...(isDev ? [new ReactRefreshPlugin()] : []),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(woff2?)$/,
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                rootMode: 'upward',
                plugins: isDev ? [require('react-refresh/babel')] : [],
              },
            },
            {
              loader: 'ts-loader',
              options: {
                configFile: path.resolve(__dirname, '../../tsconfig.build.json'),
              },
            },
          ],
        },
      ],
    },
    devtool: 'inline-source-map',
    optimization: !isDev
      ? {
          minimize: true,
          minimizer: [
            new TerserPlugin({
              sourceMap: true,
              terserOptions: {
                ecma: 2015,
              },
            }),
          ],
          splitChunks: {
            chunks: 'all',
          },
        }
      : {},
    devServer: {
      historyApiFallback: true,
      liveReload: false,
      hot: true,
      hotOnly: false,
      open: true,
    },
  };
};
