import path from 'path';
import webpack from 'webpack';
import Dotenv from 'dotenv-webpack';

export default (
  env: { [key: string]: string },
  argv: webpack.Configuration,
): webpack.Configuration => {
  return {
    resolve: {
      extensions: ['.js', '.ts'],
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
      ],
    },
  };
};
