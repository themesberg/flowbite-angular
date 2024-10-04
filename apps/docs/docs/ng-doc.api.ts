import type { NgDocApi } from '@ng-doc/core';

const api: NgDocApi = {
  title: 'API Reference',
  scopes: [
    {
      name: 'common',
      route: 'flowbite-angular-common',
      include: 'libs/flowbite-angular/src/lib/common/index.ts',
    },
    {
      name: 'components',
      route: 'flowbite-angular-components',
      include: 'libs/flowbite-angular/src/lib/components/index.ts',
    },

    {
      name: 'directives',
      route: 'flowbite-angular-directives',
      include: 'libs/flowbite-angular/src/lib/directives/index.ts',
    },
    {
      name: 'pipes',
      route: 'flowbite-angular-pipes',
      include: 'libs/flowbite-angular/src/lib/pipes/index.ts',
    },
    {
      name: 'utils',
      route: 'flowbite-angular-utils',
      include: 'libs/flowbite-angular/src/lib/utils/index.ts',
    },
  ],
};

export default api;
