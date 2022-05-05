import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-page',
  template: `<div class="mx-auto flex max-w-4xl flex-col gap-8 dark:text-white">
    <ng-content></ng-content>
  </div>`,
})
export class DemoPageComponent {}
