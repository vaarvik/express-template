import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [],
  root: 'src',
  test: {
    coverage: {
      reportsDirectory: '../coverage',
    },
    globals: true,
    environment: 'jsdom',
  },
});
