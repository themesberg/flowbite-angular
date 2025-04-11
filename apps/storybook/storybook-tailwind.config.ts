// eslint-disable-next-line @nx/enforce-module-boundaries
import { createGlobPatternsForDependencies } from '@nx/angular/tailwind';

const content = createGlobPatternsForDependencies(__dirname, '**/*.{ts,html}');

/** @type {import('tailwindcss').Config} */
export default {
  content,
  presets: [content],
};
