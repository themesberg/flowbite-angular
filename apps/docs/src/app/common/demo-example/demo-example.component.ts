import { Component, Input } from '@angular/core';

@Component({
  selector: 'flowbite-demo-example',
  template: `<div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">{{ title }}</span>
    <div
      class="flex w-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
      [ngClass]="[codeClassName ?? '']"
    >
      <div class="flex h-full w-full flex-col justify-center gap-6 p-6">
        <ng-content></ng-content>
        <flowbite-prism [code]="code.trim()" language="xml"></flowbite-prism>
      </div>
    </div>
  </div>`,
})
export class DemoExampleComponent {
  @Input() title?: string;
  @Input() code = '';
  @Input() codeClassName?: string;
}
