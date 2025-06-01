import type { NgDocApi } from '@ng-doc/core';

const api: NgDocApi = {
  title: 'API Reference',
  order: 999,
  scopes: [
    {
      name: 'core',
      route: 'core',
      include: 'libs/flowbite-angular/core/src/index.ts',
    },
    {
      name: 'components',
      route: 'components',
      include: [
        'libs/flowbite-angular/accordion/src/index.ts',
        'libs/flowbite-angular/alert/src/index.ts',
        'libs/flowbite-angular/badge/src/index.ts',
        'libs/flowbite-angular/breadcrumb/src/index.ts',
        'libs/flowbite-angular/button/src/index.ts',
        'libs/flowbite-angular/button-group/src/index.ts',
        'libs/flowbite-angular/card/src/index.ts',
        'libs/flowbite-angular/clipboard/src/index.ts',
        'libs/flowbite-angular/core/src/index.ts',
        'libs/flowbite-angular/dropdown/src/index.ts',
        'libs/flowbite-angular/form/src/index.ts',
        'libs/flowbite-angular/icon/src/index.ts',
        'libs/flowbite-angular/indicator/src/index.ts',
        'libs/flowbite-angular/modal/src/index.ts',
        'libs/flowbite-angular/navbar/src/index.ts',
        'libs/flowbite-angular/pagination/src/index.ts',
        'libs/flowbite-angular/sidebar/src/index.ts',
        'libs/flowbite-angular/theme-toggle/src/index.ts',
        'libs/flowbite-angular/tooltip/src/index.ts',
      ],
    },
  ],
};

export default api;
