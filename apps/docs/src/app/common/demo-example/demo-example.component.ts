import { Component, Input } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { PrismComponent } from '../prism/prism.component';

@Component({
  standalone: true,
  imports: [PrismComponent, NgClass, NgFor],
  selector: 'flowbite-demo-example',
  template: `<div class="flex flex-col gap-2">
    <span class="text-2xl font-bold">{{ title }}</span>
    <span class="text-base">{{ subtitle }}</span>
    <div
      class="flex w-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800"
      [ngClass]="[codeClassName ?? '']"
    >
      <div class="flex h-full w-full flex-col justify-center gap-6 p-6">
        <ng-content></ng-content>
        <flowbite-prism
          *ngFor="let code of codes"
          [code]="code.code.trim()"
          [language]="code.language"
        ></flowbite-prism>
      </div>
    </div>
  </div>`,
})
export class DemoExampleComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() codes: { language: string; code: string }[] = [];
  @Input() codeClassName?: string;
}
