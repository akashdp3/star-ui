// Ref: https://gist.github.com/kamleshchandnani/36118e0cbd7a4af2dd4029e4fa60a66a
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input: pkg.source,
    output: [{ file: pkg.main, format: 'cjs' }],
    plugins: [
      typescript(),
      resolve({
        mainFields: ['module', 'main', 'jsnext:main', 'browser'],
        extensions
      }),
      babel({
        presets: ['@babel/preset-typescript'],
        extensions
      })
      // commonjs()
    ]
  }
];
