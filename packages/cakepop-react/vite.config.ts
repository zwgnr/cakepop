import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const externals = [...Object.keys(peerDependencies)];

export default defineConfig({
  build: {
    //cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      // output: {
      // Change .css.js files to something else so that they don't get re-processed by consumer's setup
      //entryFileNames({ name }) {
      //    return `${name.replace(/\.css$/, '.css.vanilla')}.js`;
      //   },
      //entryFileNames: '[name].js',
      //preserveModules: true,
      //preserveModulesRoot: 'src',
      //format: 'esm',
      // dir: 'dist',
      //},
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
