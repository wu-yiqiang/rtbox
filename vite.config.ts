import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('/src/')
      }
    ]
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 9627,
    open: false,
    hmr: true
  }
})
