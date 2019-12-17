import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import webpackBase from '../../webpack.config';

export default (
  env: { [key: string]: string },
  argv: webpack.Configuration,
): webpack.Configuration => {
  return merge(webpackBase(env, argv), {
    entry: path.resolve(__dirname, './src/App.tsx'),
  } as webpack.Configuration);
};
