---
keyword: QuickstartPage
---

## Introduction

Flowbite Angular can easily be integrated into your project using NPM. It functions as a common
Angular library.

## Require via NPM

Make sure that TailwindCSS is installed.

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

Install Flowbite as a dependency using NPM by running this command:

```bash
npm install flowbite-angular ng-primitives @ng-icons/core
```

## TailwindCSS configuration

Make sure to use the flowbite-angular configuration preset in your styles.css

> **Note** If your `node_modules` folder is located above the parent directory (e.g., in a monorepo
> setup), you may need to adjust the path with additional `../` to correctly reference it, such as
> `@source "../../../node_modules/flowbite-angular";`.

```css
@import 'tailwindcss';

@source "../node_modules/flowbite-angular";
```

> **Note** If you want a working `primary` color definition, see `*ThemingPage` page

## PostCSS configuration

Create a `postcss.config.json` file in the root of your project and add the `@tailwindcss/postcss`
plugin to your PostCSS configuration.

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```
