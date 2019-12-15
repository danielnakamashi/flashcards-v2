import path from 'path';
import webpack from 'webpack';
import Dotenv from 'dotenv-webpack';

export default (env: { [key: string]: string }, argv: webpack.Configuration): webpack.Configuration => {
  return {
    entry: path.resolve(__dirname, `packages/${env.package}/src/web/index.tsx`),
    output: {
      libraryTarget: 'umd',
      path: path.resolve(__dirname, `packages/${env.package}/dist`),
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: [new Dotenv({ path: path.resolve(__dirname, '.env') })],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            rootMode: 'upward',
          },
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
  };
};
