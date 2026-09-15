import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'src/index.html'),
        swimSpaHub: resolve(__dirname, 'src/swim-spa/index.html'),
        swimSpa580: resolve(__dirname, 'src/swim-spa/swim-spa-580/index.html'),
        virivkyHub: resolve(__dirname, 'src/virivky/index.html'),
        crownSummit: resolve(__dirname, 'src/virivky/marquis-crown-summit/index.html'),
      },
    },
  },
})
