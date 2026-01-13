// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/angular';

import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  staticDirs: ['../public'],
  addons: [getAbsolutePath('@storybook/addon-themes'), getAbsolutePath('@storybook/addon-docs')],
  framework: {
    name: getAbsolutePath('@storybook/angular'),
    options: {},
  },
  docs: {
    defaultName: 'Documentation',
  },
  webpackFinal: (config) => {
    config.module?.rules?.push({
      test: /\.css$/i,
      exclude: /node_modules/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: ['@tailwindcss/postcss'],
            },
          },
        },
      ],
    });
    return config;
  },
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/recipes/storybook/custom-builder-configs

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
