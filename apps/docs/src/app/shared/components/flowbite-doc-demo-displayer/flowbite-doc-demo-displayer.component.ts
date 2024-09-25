import { ButtonComponent, IconComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-doc-demo',
  standalone: true,
  imports: [ButtonComponent, IconComponent],
  template: `
    <div class="flex flex-col grow rounded-t-xl [&>ng-doc-demo]:!m-0 [&>ng-doc-demo>ng-doc-demo-displayer]:!border-0">
      <div
        class="flex flex-row justify-between items-center rounded-t-xl p-6 bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
        <!--
        <span></span>
        <span class="hidden gap-2 lg:flex lg:flex-row">
          <flowbite-button
            color="light"
            size="sm"
            isPill>
            <flowbite-icon
              svgIcon="outline:desktop-pc"
              class="w-4 h-4" />
          </flowbite-button>
          <flowbite-button
            color="light"
            size="sm"
            isPill>
            <flowbite-icon
              svgIcon="outline:tablet"
              class="w-4 h-4" />
          </flowbite-button>
          <flowbite-button
            color="light"
            size="sm"
            isPill>
            <flowbite-icon
              svgIcon="outline:mobile-phone"
              class="w-4 h-4" />
          </flowbite-button>
        </span>
        <span class="flex flex-row gap-2"></span>
      -->
      </div>
      <ng-content />
    </div>
  `,
  styles: `
    ng-doc-demo {
      margin: 0px;
    }
  `,
})
export class FlowbiteDocDemoComponent {}
