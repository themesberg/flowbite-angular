/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */

const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const sharedTailwindConfig = require('../../libs/flowbite-angular/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html,md}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  safelist: [
    'p-4',
    'overflow-x-auto',
    'rounded-md',
    'max-w-md',
    'max-w-sm',
    'bg-gray-100',
    'bg-gray-500',
    'z-0',
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
