import type { NgDocApi } from '@ng-doc/core';

const api: NgDocApi = {
  title: 'API Reference',
  order: 999,
  scopes: [
    {
      name: 'common',
      route: 'common',
      include: 'libs/flowbite-angular/src/lib/common/index.ts',
    },
    {
      name: 'components',
      route: 'components',
      include: 'libs/flowbite-angular/src/lib/components/index.ts',
    },
    {
      name: 'services',
      route: 'services',
      include: 'libs/flowbite-angular/src/lib/services/index.ts',
    },
    {
      name: 'directives',
      route: 'directives',
      include: 'libs/flowbite-angular/src/lib/directives/index.ts',
    },
    {
      name: 'pipes',
      route: 'pipes',
      include: 'libs/flowbite-angular/src/lib/pipes/index.ts',
    },
    {
      name: 'utils',
      route: 'utils',
      include: 'libs/flowbite-angular/src/lib/utils/index.ts',
    },
  ],
};

export default api;
