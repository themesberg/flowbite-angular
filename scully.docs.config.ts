import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

const defaultPostRenderers = ['seoHrefOptimise'];

export const config: ScullyConfig = {
  projectRoot: './apps/docs/src',
  sourceRoot: "./apps/docs/src",
  projectName: 'docs',
  distFolder: './dist/apps/docs',
  outDir: './dist/docs-static',
  routes: {},
  defaultPostRenderers,
  target: 'targets',
  puppeteerLaunchOptions: {
    args: ['--no-sandbox'],
  },
};
