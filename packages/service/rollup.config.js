import path from 'path';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';

module.exports = {
  input: ['src/index.ts'],
  output: {
    dir: 'lib',
    format: 'cjs',
  },
  external: [/^@babel\/runtime/, /^@flashcards/, /^firebase/],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: path.resolve(__dirname, './tsconfig.build.json'),
      clean: true,
    }),
    babel({
      extensions: [...DEFAULT_EXTENSIONS, '.ts'],
      babelHelpers: 'runtime',
      configFile: path.resolve(__dirname, '../../babel.config.js'),
    }),
    sourcemaps(),
    terser(),
  ],
};
