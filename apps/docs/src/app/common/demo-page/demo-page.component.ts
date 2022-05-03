import { Component, Input } from '@angular/core';

export type CodeExample = {
  title: string;
  code: string;
};

@Component({
  selector: 'flowbite-demo-page',
  template: `<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
    <ng-content></ng-content>
  </div>`,
})
export class DemoPageComponent {}
