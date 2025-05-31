import type { NgDocApi } from '@ng-doc/core';

/**
 * @status:info NEW
 */
const api: NgDocApi = {
  title: 'API Reference',
  order: 999,
  scopes: [
    {
      name: 'core',
      route: 'core',
      include: 'libs/flowbite-angular/core/index.ts',
    },
    {
      name: 'components',
      route: 'components',
      include: [
        'libs/flowbite-angular/accordion/index.ts',
        'libs/flowbite-angular/alert/index.ts',
        'libs/flowbite-angular/badge/index.ts',
        'libs/flowbite-angular/breadcrumb/index.ts',
        'libs/flowbite-angular/button/index.ts',
        'libs/flowbite-angular/card/index.ts',
        'libs/flowbite-angular/clipboard/index.ts',
        'libs/flowbite-angular/dropdown/index.ts',
        'libs/flowbite-angular/form/index.ts',
        'libs/flowbite-angular/icon/index.ts',
        'libs/flowbite-angular/indicator/index.ts',
        'libs/flowbite-angular/modal/index.ts',
        'libs/flowbite-angular/navbar/index.ts',
        'libs/flowbite-angular/pagination/index.ts',
        'libs/flowbite-angular/sidebar/index.ts',
        'libs/flowbite-angular/skeleton/index.ts',
        'libs/flowbite-angular/theme-toggle/index.ts',
        'libs/flowbite-angular/tooltip/index.ts',
      ],
    },
  ],
};

export default api;
