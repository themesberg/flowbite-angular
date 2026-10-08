import nx from '@nx/eslint-plugin';
import tseslint from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import jsoncParser from 'jsonc-eslint-parser';

export default [
  // plugin:@nx/angular (already includes @nx/typescript, which pulls in
  // @typescript-eslint/recommended, so it is not listed again here)
  ...nx.configs['flat/angular'],

  // "prettier" in the legacy `extends`
  prettierConfig,
  {
    files: ['**/*.json'],
    languageOptions: { parser: jsoncParser },
    rules: {},
  },
  {
    files: ['**/*.ts'],
    plugins: { prettier: prettierPlugin, '@typescript-eslint': tseslint, '@nx': nx },
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
      'no-extra-semi': 'off',
      'comma-dangle': 'off',
      'no-empty-function': 'off',
      // '@typescript-eslint/no-extra-semi' removed: dropped in typescript-eslint v8
      // (formatting rule; prettier/prettier already enforces it)
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@nx/enforce-module-boundaries': 'error',
    },
  },
];
