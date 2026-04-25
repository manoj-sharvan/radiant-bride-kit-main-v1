import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'src/routeTree.gen.ts', 
        'src/components/ui/**', 
        'src/tests/**',
        'node_modules/**',
        'dist/**',
        'eslint.config.js'
      ],
    },
  },
}))
