---
keyword: OverrideComponentBaseValue
---

Each components provide a set of input to customize their behavior.

They are named following this pattern :

<span class="text-xs md:text-base">

FLOWBITE\_<span class="text-primary-500">COMPONENT_NAME</span>\_<span class="text-primary-500">INPUT_NAME</span>\_DEFAULT_VALUE

</span>

In order to modify the default value of an input, you have to add, after `initFlowbite` function, a
new `Provider` with its value :

```angular-ts
import { FLOWBITE_ALERT_HAS_BORDER_DEFAULT_VALUE } from 'flowbite-angular/alert';
import { initFlowbite } from 'flowbite-angular/core';
import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    ...,
    initFlowbite(),
    {
      provide: FLOWBITE_ALERT_HAS_BORDER_DEFAULT_VALUE,
      useValue: true,
    },
  ],
};

```
