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
  content: [join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'), ...createGlobPatternsForDependencies(__dirname)],
  safelist: ['p-4', 'overflow-x-auto', 'rounded-md'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF0F1',
          100: '#FFE1E4',
          200: '#FFC8CF',
          300: '#FF9BA8',
          400: '#FF637B',
          500: '#FF2C51',
          600: '#F6083B',
          700: '#C3002F',
          800: '#AE0331',
          900: '#940732',
        },
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
