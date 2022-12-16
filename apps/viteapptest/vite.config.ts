import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { macaronVitePlugin } from '@macaron-css/vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macaronVitePlugin()],
});
