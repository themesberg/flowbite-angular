---
keyword: QuickstartPage
---

## Introduction

Flowbite Angular can easily be integrated into your project using NPM. It functions as a common Angular library.

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

By default, Flowbite Angular provides a style for each of it's components. In order to use them, you have to call the init function inside the provider's list of your application.

For more informations about styling, check the `*OverrideBaseStylePage`.

```typescript
import { initFlowbite } from 'flowbite-angular/core';

import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [initFlowbite()],
};
```
