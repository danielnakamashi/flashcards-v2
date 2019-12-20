import path from 'path';
import webpack from 'webpack';
import Dotenv from 'dotenv-webpack';

export default (
  env: { [key: string]: string },
  argv: webpack.Configuration,
): webpack.Configuration => {
  const config: webpack.Configuration = {
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

  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  return config;
};
