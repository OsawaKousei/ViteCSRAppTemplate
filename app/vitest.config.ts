import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './test/setup.ts',
      include: [
        'src/**/*.{test,spec}.{js,ts,jsx,tsx}',
        'test/**/*.{test,spec}.{js,ts,jsx,tsx}',
      ],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        include: ['src/features/gomoku/**/*.{ts,tsx}'],
        exclude: [
          'src/features/gomoku/**/index.ts',
          'src/features/gomoku/types.ts',
        ],
      },
    },
  }),
);
