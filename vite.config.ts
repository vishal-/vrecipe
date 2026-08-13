import { defineConfig } from 'vite'
import devServer from '@hono/vite-dev-server'
import ssrPlugin from 'vite-ssr-components/plugin'

export default defineConfig({
  plugins: [
    devServer({
      entry: 'src/index.tsx'
    }),
    ssrPlugin()
  ]
})
