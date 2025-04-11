import { makeFlowbiteProviders } from 'flowbite-angular/injection';

import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { moduleMetadata, type Decorator, type Preview } from '@storybook/angular';

export const decorators: Decorator[] = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
  moduleMetadata({
    providers: makeFlowbiteProviders(),
  }),
];

export default {
  tags: ['autodocs'],
} as Preview;
