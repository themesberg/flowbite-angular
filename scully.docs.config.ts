import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './apps/docs/src',
  projectName: 'docs',
  distFolder: './dist/apps/docs',
  outDir: './dist/static',
  routes: {},
};
