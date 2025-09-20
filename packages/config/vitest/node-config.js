export const nodeConfig = {
  test: {
    environment: 'node',
    include: ['**/*.test.js', '**/*.spec.js'],
    timeout: 100_000,
    globals: true
  },
  resolve: {
    alias: {
      '@monorepo-template/shared': new URL('../../shared', import.meta.url).pathname
    }
  }
}
