---
keyword: QuickstartPage
---

## Introduction

Flowbite Angular can easily be integrated into your project using NPM. It functions as a common
Angular library.

## Require via NPM

Make sure that TailwindCSS is installed.

```bash
npm install tailwindcss
```

Install Flowbite as a dependency using NPM by running this command:

```bash
npm install flowbite-angular
```

## Init function

By default, Flowbite Angular provides a style for each of it's components. In order to use them, you
have to call the init function inside the provider's list of your application.

For more informations about styling, check the `*OverrideBaseStylePage`.

```typescript
import { initFlowbite } from 'flowbite-angular/core';

import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [initFlowbite()],
};
```

## Tailwind configuration

Make sure to use the TailwindCSS configuration preset in your tailwind.config.js

```javascript {2,7-8}
const { join } = require('path');
const flowbiteAngularTailwindConfig = require('flowbite-angular/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    // Use flowbite-angular's TailwindCSS configuration
    flowbiteAngularTailwindConfig,
  ],
  content: [
    // Include every *.mjs files of flowbite-angular
    join(__dirname, '../../node_modules/flowbite-angular/**/*.{html,ts,mjs}'),
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html,md}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
