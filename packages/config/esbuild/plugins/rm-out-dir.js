import { existsSync, rmSync } from 'node:fs'

export const rmOutDirPlugin = () => ({
  name: 'rm out dir',
  setup({ onStart }) {
    onStart(() => {
      if (existsSync('./out')) {
        rmSync('./out', { recursive: true })
      }
    })
  },
})
