import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackBase from '../../webpack.config';

export default (
  env: { [key: string]: string },
  argv: webpack.Configuration,
): webpack.Configuration => {
  return merge(webpackBase(env, argv), {
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
      libraryTarget: 'umd',
      path: path.resolve(__dirname, './dist'),
    },
    resolve: {
      extensions: ['.tsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Flashcards',
        inject: false,
        template: require('html-webpack-template'),
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
      ],
    },
  } as webpack.Configuration);
};
