import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'
import path from 'path'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const env = process.env.NODE_ENV || 'development'

const resolvePath = (name) => path.resolve(__dirname, name)

const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(env),
  }),
  resolve({ extensions }),
  commonjs(),
  typescript({
    typescript: require('typescript'),
  }),
  babel({
    extensions,
    babelHelpers: 'bundled',
    presets: ['@babel/preset-env'],
    plugins: ['@vue/babel-plugin-jsx'],
  }),

  postcss({
    extract: true,
    plugins: [],
  }),
]

export { extensions, env, resolvePath, plugins }
