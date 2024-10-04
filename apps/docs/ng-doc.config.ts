import type { NgDocConfiguration } from '@ng-doc/builder';
import { ngKeywordsLoader, rxjsKeywordsLoader } from '@ng-doc/keywords-loaders';

const config: NgDocConfiguration = {
  cache: false,
  routePrefix: 'docs',
  docsPath: 'apps/docs/docs',
  tsConfig: 'apps/docs/tsconfig.app.json',
  guide: {
    anchorHeadings: ['h1', 'h2', 'h3', 'h4'],
    headerTemplate: 'apps/docs/src/app/shared/header-template.html',
  },
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
  keywords: {
    keywords: {
      MITLicense: {
        title: 'MIT License',
        url: 'https://github.com/themesberg/flowbite-angular/blob/main/README.md',
      },
      CreativeCommons: {
        title: 'CC BY 3.0',
        url: 'https://creativecommons.org/licenses/by/3.0',
      },
      Bootstrap: {
        title: 'Bootstrap',
        url: 'https://github.com/twbs/bootstrap',
      },
      BootstrapAuthors: {
        title: 'Bootstrap authors',
        url: 'https://github.com/twbs/bootstrap/graphs/contributors',
      },
      Twitter: {
        title: 'Twitter Inc',
        url: 'https://twitter.com',
      },
      TailwindConfigurableKeys: {
        title: 'configurable keys on Tailwind CSS',
        url: 'https://tailwindcss.com/docs/theme#configuration-reference',
      },
      TailwindThemingDocumentation: {
        title: 'Tailwind CSS Theming documentation',
        url: 'https://tailwindcss.com/docs/theme',
      },
    },
    loaders: [ngKeywordsLoader(), rxjsKeywordsLoader()],
  },
};

export default config;
