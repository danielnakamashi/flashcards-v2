import path from 'path';
import { Configuration } from 'webpack';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import htmlWebpackTemplate from 'html-webpack-template';
import TerserPlugin from 'terser-webpack-plugin';

export default (env: { [key: string]: string }, argv: Configuration): Configuration => {
  return {
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
      path: path.resolve(__dirname, './dist'),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias:
        argv.mode === 'development'
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
          use: {
            loader: 'babel-loader',
            options: {
              rootMode: 'upward',
            },
          },
        },
      ],
    },
    devtool: 'source-map',
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          sourceMap: true,
          terserOptions: {
            ecma: 2015,
          },
        }),
      ],
    },
    devServer:
      argv.mode === 'development'
        ? {
            historyApiFallback: true,
            liveReload: false,
          }
        : {},
  };
};
