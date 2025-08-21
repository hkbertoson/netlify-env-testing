// @ts-check
import { defineConfig, envField } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify({
    devFeatures: true,
  }),
  env: {
    schema: {
      MY_SECRET_VALUE: envField.string({context: 'server', access: 'secret'}),
      MY_NON_SECRET_VALUE: envField.string({context: 'client', access: 'public'}),
  }
},
});