import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/entry.esm.js'),
      name: 'DescomUi',
      formats: ['es', 'umd'],
      // .mjs para ESM (import) y .umd.js para UMD (require/CDN), de modo que
      // ambos se resuelvan con el parse goal correcto en Node y bundlers.
      fileName: (format) => (format === 'es' ? 'descom-ui.mjs' : 'descom-ui.umd.js'),
    },
    rollupOptions: {
      // Vue se trata como dependencia externa, no se incluye en el bundle
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
        exports: 'named',
        assetFileNames: 'descom-ui.[ext]',
      },
    },
  },
})
