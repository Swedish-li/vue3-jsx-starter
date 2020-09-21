import { resolvePath, plugins } from './common'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import html from '@rollup/plugin-html'

const outDir = resolvePath('.temp')

const createConfig = () => {
  /** @type {import('rollup').RollupOptions} */
  const config = {
    input: resolvePath('example/index.tsx'),
    output: {
      dir: outDir,
      format: 'esm',
      entryFileNames: '[name].[hash].js',
    },
    manualChunks: {
      vendor: ['node_modules/vue/index.js'],
    },
    plugins: [
      ...plugins,
      html({
        title: 'vue3 jsx starter',
      }),
      serve({
        contentBase: [outDir, resolvePath('public')],
        host: 'localhost',
        port: 10001,
      }),
      livereload({
        watch: outDir,
      }),
    ],
  }
  return config
}

export default createConfig
