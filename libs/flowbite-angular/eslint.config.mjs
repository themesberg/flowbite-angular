import baseConfig from '../../eslint.config.mjs';

import nx from '@nx/eslint-plugin';

export default [
  ...baseConfig,

  // "ignorePatterns": ["!**/*", "storybook-static"]
  // ("!**/*" is the flat config default, so only the real ignore is kept)
  { ignores: ['**/storybook-static'] },

  // plugin:@nx/angular + plugin:@angular-eslint/template/process-inline-templates
  // (the Nx flat Angular preset registers the inline-template processor for *.ts)
  ...nx.configs['flat/angular'],

  // plugin:@nx/angular-template
  ...nx.configs['flat/angular-template'],

  {
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'flowbite',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/directive-class-suffix': 'off',
      '@angular-eslint/component-class-suffix': 'off',
    },
  },
  {
    files: ['**/*.html'],
    rules: {},
  },
];
