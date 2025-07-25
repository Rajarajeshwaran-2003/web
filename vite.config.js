import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/Rajarajeshwaran-2003/rajarajeshwaran-webfolio-.git', // 👈 This must match your GitHub repo name
  plugins: [react()],
});
