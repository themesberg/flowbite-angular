---
keyword: OverrideBaseStylePage
---

## Init function

By default, Flowbite Angular provides a style for each of it's components. In order to use them, you
have to call the init function inside the provider's list of your application.

```angular-ts
import { initFlowbite } from 'flowbite-angular/core';

import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [initFlowbite()],
};
```

## Override base style

Behind the scene, <span class="text-primary-500">initFlowbite()</span> setup a bunch of
InjectionToken, later used as base style in flowbite-angular component. You can override base style
by setting, after <span class="text-primary-500">initFlowbite()</span>, some new values for
<span class="text-primary-500">InjectionToken</span>. Each
<span class="text-primary-500">InjectionToken</span> are named as follow :

<span class="text-xs md:text-base">
  <ul class="list-disc list-outside">
    <li>COMPONENT : FLOWBITE\_<span class="text-primary-500">COMPONENT_NAME</span>\_THEME_TOKEN</li>
  </ul>
</span>

Each <span class="text-primary-500">InjectionToken</span> are linked to a
<span class="text-primary-500">default value</span>. <span class="text-primary-500">default
value</span> values are named as follow :

<span class="text-xs md:text-base">
  <ul class="list-disc list-outside">
    <li>COMPONENT : <span class="text-primary-500">componentName</span>Theme</li>
    <li>DIRECTIVE : <span class="text-primary-500">directiveName</span>DirectiveTheme</li>
  </ul>
</span>

In order to combine both base style and component (or directive) parameter, flowbite-angular uses
<span class="text-primary-500">ThemeServices</span>, one for each component. As default style, they
can be override. Each <span class="text-primary-500">ThemeServices</span> are named as follow :

<span class="text-xs md:text-base">
  <ul class="list-disc list-outside">
    <li>COMPONENT : <span class="text-primary-500">ComponentName</span>ThemeService</li>
    <li>DIRECTIVE : <span class="text-primary-500">DirectiveName</span>DirectiveThemeService</li>
  </ul>
</span>

### Examples

#### Component

```angular-ts
import { AlertBaseTheme, FLOWBITE_ALERT_THEME_TOKEN } from 'flowbite-angular/alert';
import { createTheme } from 'flowbite-angular/utils';
import { initFlowbite } from 'flowbite-angular/core';

const customAlertTheme: AlertBaseTheme = createTheme({
  base: 'flex flex-col gap-2 p-4 text-sm rounded-lg',
  color: {
    info: 'text-blue-800 dark:text-blue-400 bg-blue-50 dark:bg-gray-800 border-blue-300 dark:border-blue-800',
    failure: 'text-red-800 dark:text-red-400 bg-red-100 dark:bg-gray-800 border-red-300 dark:border-red-800',
    success: 'text-green-800 dark:text-green-400 bg-green-100 dark:bg-gray-800 border-green-300 dark:border-green-800',
    warning:
      'text-yellow-800 dark:text-yellow-300 bg-yellow-100 dark:bg-gray-800 border-yellow-300 dark:border-yellow-800',
    dark: 'text-gray-800 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600',
  },
  hasBorder: {
    enabled: 'border',
    disabled: 'border-0',
  },
  hasBorderAccent: {
    enabled: 'border-t-4',
    disabled: '',
  },
  closeButton: {
    base: '-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2',
    color: {
      info: 'text-blue-500 dark:text-blue-600 hover:bg-blue-200 dark:hover:bg-blue-300',
      failure: 'text-red-500 dark:text-red-600 hover:bg-red-200 dark:hover:bg-red-300',
      success: 'text-green-500 dark:text-green-600 hover:bg-green-200 dark:hover:bg-green-300',
      warning: 'text-yellow-500 dark:text-yellow-600 hover:bg-yellow-200 dark:hover:bg-yellow-300',
      dark: 'text-gray-500 dark:text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-300',
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    initFlowbite(),
    {
      provide: FLOWBITE_ALERT_THEME_TOKEN,
      useValue: customAlertTheme,
    },
    ...
  ],
};
```

#### Directive

```angular-ts
import { IconDirectiveBaseTheme, FLOWBITE_DIRECTIVE_ICON_THEME_TOKEN } from 'flowbite-angular/icon';
import { createTheme } from 'flowbite-angular/utils';
import { initFlowbite } from 'flowbite-angular/core';

const customIconDirectiveTheme: IconDirectiveBaseTheme = createTheme({
  base: 'w-5 h-5 text-gray-500 dark:text-gray-400',
});

export const appConfig: ApplicationConfig = {
  providers: [
    ...
    initFlowbite(),
    {
      provide: FLOWBITE_DIRECTIVE_ICON_THEME_TOKEN,
      useValue: customIconDirectiveTheme,
    },
    ...
  ],
};
```
