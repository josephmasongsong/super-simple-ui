import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
const pkg = require('./package.json');

export default {
  input: './src/js/index.js',
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
    {
      name: 'simpleUI',
      file: pkg.browser,
      format: 'umd',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(),
    scss({
      output: 'dist/bundle.min.css',
      outputStyle: 'compressed',
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    terser(),
  ],
};
