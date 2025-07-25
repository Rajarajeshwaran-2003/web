import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({ // 👈 This must match your GitHub repo name
  plugins: [react()],
});
