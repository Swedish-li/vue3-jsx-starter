import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import serve from 'rollup-plugin-serve'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'
import path from 'path'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const resolvePath = (name) => path.resolve(__dirname, name)

/** @type {import('rollup').RollupOptions} */
const config = {
  input: resolvePath('src/index.tsx'),
  output: {
    dir: resolvePath('dist'),
    format: 'iife',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      babelHelpers: 'bundled',
      include: ['src/**/*'],
      presets: ['@babel/preset-env', '@babel/preset-typescript'],
      plugins: ['@vue/babel-plugin-jsx'],
    }),
  ],
}

if (process.env.NODE_ENV === 'development') {
  config.plugins.push(
    serve({
      contentBase: ['dist', 'public'],
      host: 'localhost',
      port: 10001,
    })
  )
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(terser())
}

export default config
