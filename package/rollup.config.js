import scss from 'rollup-plugin-scss'
import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';

export default {
    input: './src/js/index.js',
    plugins: [
      scss({
        output: 'dist/bundle.min.css',
        outputStyle: 'compressed'
      }),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled'
      }),
      terser()
    ],
    output: [
      { 
        file: 'dist/bundle.esm.min.js', 
        format: 'esm'
      },
      {
        name: 'simpleUI',
        file: 'dist/bundle.umd.min.js',
        format: 'umd'
      },
    ]
};