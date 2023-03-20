import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const externals = [...Object.keys(peerDependencies)];

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: externals,
    },
  },
  plugins: [
    vanillaExtractPlugin({
      identifiers: 'short',
    }),
    dts({
      beforeWriteFile: (filePath, content) => ({
        content,
        filePath: filePath.replace('src', ''),
      }),
      compilerOptions: {
        baseUrl: './src/',
        emitDeclarationOnly: true,
        noEmit: false,
      },
      exclude: [
        'src/**/*.docs.mdx',
        'src/**/*.snippets.tsx',
        'src/**/*.test.ts*',
        'src/**/*.stories.tsx',
      ],
      outputDir: 'dist/types',
    }),
  ],
});
