import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';
import { macaronVitePlugin } from '@macaron-css/vite';

const externals = [...Object.keys(peerDependencies)];

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      fileName: 'index',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: externals,
    },
  },
  plugins: [macaronVitePlugin()],
});
