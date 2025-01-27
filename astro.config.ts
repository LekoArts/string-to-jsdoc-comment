import { defineConfig } from 'astro/config'
import { SITE } from './src/constants'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  site: SITE.URL,
})
