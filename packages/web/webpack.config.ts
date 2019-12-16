import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpackBase from '../../webpack.config';

export default (env: { [key: string]: string }, argv: webpack.Configuration): webpack.Configuration => {
  const result = merge(webpackBase(env, argv), {
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Flashcards',
        inject: false,
        template: require('html-webpack-template'),
        appMountId: 'root',
      }),
    ],
    devServer: {
      contentBase: path.resolve(__dirname, './dist'),
    },
  } as webpack.Configuration);
  return result;
};
