// eslint-disable-next-line @nx/enforce-module-boundaries
import sharedTailwindConfig from '../../libs/flowbite-angular/tailwind.config';

import { createGlobPatternsForDependencies } from '@nx/angular/tailwind';

const content = createGlobPatternsForDependencies(__dirname, '**/*.{ts,html}');

/** @type {import('tailwindcss').Config} */
export default {
  content,
  presets: [{ ...sharedTailwindConfig }, content],
  darkMode: ['class', '[data-mode="dark"]'],
};
