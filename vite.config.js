import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => ({
  root: 'src',
  publicDir: '../public',
  base: mode === 'ghpages' ? '/Swimspa-web/' : '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'src/index.html'),
        swimSpaHub: resolve(__dirname, 'src/swim-spa/index.html'),
        swimSpa580: resolve(__dirname, 'src/swim-spa/swim-spa-580/index.html'),
        swimSpaJednozonove: resolve(__dirname, 'src/swim-spa/jednozonove/index.html'),
        swimSpaDvouzonove: resolve(__dirname, 'src/swim-spa/dvouzonove/index.html'),
        swimSpaGrandSpa: resolve(__dirname, 'src/swim-spa/grand-spa/index.html'),
        swimSpaDeep: resolve(__dirname, 'src/swim-spa/deep/index.html'),
        swimSpaInGround: resolve(__dirname, 'src/swim-spa/in-ground/index.html'),
        virivkyHub: resolve(__dirname, 'src/virivky/index.html'),
        crownSummit: resolve(__dirname, 'src/virivky/marquis-crown-summit/index.html'),
        virivkyKapacita45: resolve(__dirname, 'src/virivky/kapacita-4-5/index.html'),
        virivkyKapacita6Plus: resolve(__dirname, 'src/virivky/kapacita-6-plus/index.html'),
        virivkyKulate: resolve(__dirname, 'src/virivky/kulate/index.html'),
        virivkyLounery: resolve(__dirname, 'src/virivky/lounery/index.html'),
        virivkyNafukovaci: resolve(__dirname, 'src/virivky/nafukovaci/index.html'),
      },
    },
  },
}))
