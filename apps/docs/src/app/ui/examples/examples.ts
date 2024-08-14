import type { BundledLanguage } from 'shiki/bundle-web.mjs';

export type Example = { language: BundledLanguage; name?: string; rawCode?: string };
