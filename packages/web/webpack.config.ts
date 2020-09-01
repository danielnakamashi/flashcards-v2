import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import htmlWebpackTemplate from 'html-webpack-template';
import webpackBase from '../../webpack.config';

export default (env: { [key: string]: string }, argv: Configuration): Configuration => {
  return merge(webpackBase(env, argv), {
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
      path: path.resolve(__dirname, './dist'),
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                rootMode: 'upward',
              },
            },
          ],
        },
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
      ],
    },
  });
};
