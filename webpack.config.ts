import path from 'path';
import { Configuration } from 'webpack';
import Dotenv from 'dotenv-webpack';
import TerserPlugin from 'terser-webpack-plugin';

export default (env: { [key: string]: string }, argv: Configuration): Configuration => {
  const config: Configuration = {
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [new Dotenv({ path: path.resolve(__dirname, '.env') })],
    module: {
      rules: [
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
    devtool: '#source-map',
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
  };

  if (argv.mode === 'development') {
    config.resolve!.alias = {
      '@flashcards/application': path.resolve(__dirname, './packages/application/src'),
      '@flashcards/core': path.resolve(__dirname, './packages/core/src'),
      '@flashcards/presentation': path.resolve(__dirname, './packages/presentation/src'),
      '@flashcards/service': path.resolve(__dirname, './packages/service/src'),
      '@flashcards/web': path.resolve(__dirname, './packages/web/src'),
    };
  }

  return config;
};
