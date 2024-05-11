import {
  BreadcrumbComponent,
  BreadcrumbItemComponent,
} from '@flowbite-angular/lib';
import { Component } from '@angular/core';
import { DemoExampleComponent } from '../../../../common/demo-example/demo-example.component';
import { DemoPageComponent } from '../../../../common/demo-page/demo-page.component';

@Component({
  standalone: true,
  imports: [
    DemoPageComponent,
    DemoExampleComponent,
    BreadcrumbComponent,
    BreadcrumbItemComponent,
  ],
  selector: 'flowbite-breadcrumb-page',
  templateUrl: './breadcrumb-page.component.html',
})
export class BreadcrumbPageComponent {
  examples = [
    {
      language: 'html',
      code: `
<flowbite-breadcrumb>
  <flowbite-breadcrumb-item href="#">
    <svg class="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
    Home
  </flowbite-breadcrumb-item>
  <flowbite-breadcrumb-item href="#">Projects</flowbite-breadcrumb-item>
  <flowbite-breadcrumb-item>Flowbite</flowbite-breadcrumb-item>
</flowbite-breadcrumb>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-breadcrumb class="bg-gray-50 py-3 px-5 dark:bg-gray-900">
  <flowbite-breadcrumb-item href="#">
    <svg class="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
    Home
  </flowbite-breadcrumb-item>
  <flowbite-breadcrumb-item href="#">Projects</flowbite-breadcrumb-item>
  <flowbite-breadcrumb-item>Flowbite</flowbite-breadcrumb-item>
</flowbite-breadcrumb>
`,
    },
  ];
}
