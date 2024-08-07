/**
 * @todo Implement Top-level async/await to use @getHighlighterCore function
 * Otherwise, building for every themes and every languages provided in shiki.style library
 */
import { getSingletonHighlighterCore } from 'shiki/core';
import html from 'shiki/langs/html.mjs';
import typescript from 'shiki/langs/typescript.mjs';
import materialThemeLighter from 'shiki/themes/material-theme-lighter.mjs';
import materialTheme from 'shiki/themes/material-theme.mjs';
import getWasm from 'shiki/wasm';

export const highlighter = getSingletonHighlighterCore({
  langs: [typescript, html],
  themes: [materialTheme, materialThemeLighter],
  loadWasm: getWasm,
});
