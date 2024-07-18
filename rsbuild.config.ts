import {defineConfig} from '@rsbuild/core';
import {pluginLess} from '@rsbuild/plugin-less';
import {pluginReact} from '@rsbuild/plugin-react';
import {pluginSvgr} from '@rsbuild/plugin-svgr';
// @ts-ignore don't know why this doesn't work
import tailwindcss from 'tailwindcss';

export default defineConfig({
  dev: {
    client: {
      port: '',
    },
  },
  html: {
    template: './public/index.html',
  },
  output: {
    distPath: {
      root: './build',
    },
    sourceMap: {
      js: process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : 'source-map',
    },
  },
  plugins: [
    pluginLess({lessLoaderOptions: {lessOptions: {math: 'always'}}}),
    pluginSvgr({
      query: /tsx/,
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
      },
    }),
    pluginReact(),
  ],
  server: {
    port: 3000,
    publicDir: {
      name: './public',
    },
    strictPort: true,
  },
  source: {
    alias: {
      '../../theme.config': './src/semantic-ui/theme.config',
    },
    entry: {
      index: './src/index.tsx',
    },
  },
  tools: {
    postcss: (_config, {addPlugins}) => {
      addPlugins(tailwindcss);
    },
    swc: {
      jsc: {
        experimental: {
          plugins: [
            [
              '@swc/plugin-styled-jsx',
              {
                plugins: ['@styled-jsx/plugin-sass'],
              },
            ],
          ],
        },
      },
    },
  },
});
