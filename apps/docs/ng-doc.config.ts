import type { NgDocConfiguration } from '@ng-doc/builder';

const config: NgDocConfiguration = {
  cache: true,
  routePrefix: 'docs',
  docsPath: 'apps/docs/docs',
  tsConfig: 'apps/docs/ts-config.app.json',
  repoConfig: {
    url: 'https://github.com/themesberg/flowbite-angular',
    mainBranch: 'main',
    releaseBranch: 'main',
  },
  shiki: {
    themes: {
      light: 'material-theme-lighter',
      dark: 'material-theme',
    },
  },
};

export default config;
