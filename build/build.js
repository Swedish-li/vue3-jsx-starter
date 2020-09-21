import { resolvePath, plugins } from './common'
import { terser } from 'rollup-plugin-terser'

const libName = 'myLib'
const input = resolvePath('src/index.ts')
const outDir = resolvePath('dist')
const globals = {
  vue: 'Vue',
}

const resolveFile = (type) => {
  if (type === 'iife') {
    return resolvePath(`${outDir}/${libName}.js`)
  } else if (type === 'iife.min') {
    return resolvePath(`${outDir}/${libName}.min.js`)
  } else {
    return resolvePath(`${outDir}/${libName}.${type}.js`)
  }
}

/** @type {import('rollup').RollupOptions} */
const config = {
  input,
  plugins,
  external: ['vue'],
}

export default () => [
  {
    ...config,
    output: [
      {
        format: 'esm',
        file: resolveFile('esm'),
      },
      {
        format: 'cjs',
        file: resolveFile('cjs'),
      },
      {
        format: 'iife',
        file: resolveFile('iife'),
        name: libName,
        globals,
      },
    ],
  },
  {
    ...config,
    plugins: [...plugins, terser()],
    output: [
      {
        format: 'iife',
        file: resolveFile('iife.min'),
        name: libName,
        globals,
      },
    ],
  },
]
