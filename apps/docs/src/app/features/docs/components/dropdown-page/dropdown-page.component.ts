import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';
import { DemoPageComponent } from '../../../../shared/components/demo-page/demo-page.component';

import {
  DropdownComponent,
  DropdownDividerComponent,
  DropdownHeaderComponent,
  DropdownItemComponent,
} from 'flowbite-angular';
import type { BundledLanguage } from 'shiki/bundle-web.mjs';

import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    DemoPageComponent,
    DemoExampleComponent,
    DropdownComponent,
    DropdownItemComponent,
    DropdownDividerComponent,
    DropdownHeaderComponent,
  ],
  selector: 'flowbite-dropdown-page',
  templateUrl: './dropdown-page.component.html',
})
export class DropdownPageComponent {
  examples = [
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-dropdown>
    <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>
`,
    },
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-dropdown>
    <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
    <flowbite-dropdown-divider></flowbite-dropdown-divider>
    <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>
`,
    },
    {
      language: 'html' as BundledLanguage,
      code: `
<flowbite-dropdown>
    <flowbite-dropdown-header>
        <span className="block text-sm">
            Bonnie Green
        </span>
        <span className="block truncate text-sm font-medium">
            bonnie@flowbite.com
        </span>
    </flowbite-dropdown-header>
    <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>
`,
    },
    {
      language: 'html' as BundledLanguage,

      code: `
<flowbite-dropdown [position]="'top-start'" [label]="'Top start'">
    <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>
<flowbite-dropdown [position]="'left-start'" [label]="'Left start'">
    <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>
<flowbite-dropdown [position]="'right-end'" [label]="'Right end'">
    <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>`,
    },
  ];
}
