import path from 'path';
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
    format: 'es',
  },
  external: [/^@babel\/runtime/, /^@flashcards/, /^firebase/],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      configFile: path.resolve(__dirname, '../../babel.config.js'),
    }),
    typescript({
      tsconfig: path.resolve(__dirname, './tsconfig.build.json'),
      clean: true,
    }),
    terser(), // Commented until it has support for optional chaining
    sourcemaps(),
  ],
};
