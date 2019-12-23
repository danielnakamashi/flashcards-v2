import path from 'path';
import { Configuration } from 'webpack';
import Dotenv from 'dotenv-webpack';

export default (env: { [key: string]: string }, argv: Configuration): Configuration => {
  const config: Configuration = {
    resolve: {
      extensions: ['.js', '.ts'],
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
  };

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  return config;
};
