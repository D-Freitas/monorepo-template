import { build } from 'esbuild'
import fg from 'fast-glob'
import { rmOutDirPlugin } from './plugins/rm-out-dir.js'

export const buildNode = async ({ ...args }) => {
  await build({
    entryPoints: await fg('**/index.js'),
    outExtension: { '.js': '.cjs' },
    platform: 'node',
    target: 'es2020',
    format: 'cjs',
    bundle: true,
    minify: true,
    outdir: './out',
    sourcemap: false,
    logLevel: 'info',
    external: [
      'chromedriver'
    ],
    plugins: [rmOutDirPlugin()],
    ...args
  })
}
