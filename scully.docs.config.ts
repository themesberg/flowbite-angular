import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';
import '@scullyio/scully-plugin-puppeteer';

const defaultPostRenderers = ['seoHrefOptimise', baseHrefRewrite];
setPluginConfig(baseHrefRewrite, { href: '/' });

export const config: ScullyConfig = {
  projectRoot: './apps/docs/src',
  projectName: 'docs',
  distFolder: './dist/apps/docs',
  outDir: './dist/docs-static',
  routes: {},
  defaultPostRenderers,
};
