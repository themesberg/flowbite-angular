/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */

const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const sharedTailwindConfig = require('flowbite-angular/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, '**/!(*.stories|*.spec).{ts,html,md}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [],
};
