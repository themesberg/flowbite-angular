import { ButtonComponent, IndicatorComponent } from '@flowbite-angular/lib';
import { Component } from '@angular/core';
import { DemoExampleComponent, DemoPageComponent } from '../../common';

@Component({
  standalone: true,
  imports: [DemoPageComponent, DemoExampleComponent, IndicatorComponent, ButtonComponent],
  selector: 'flowbite-indicator-page',
  template: `<flowbite-demo-page>
    <flowbite-demo-example subtitle="Use this example to create a simple indicator with mulitple colors and position it anywhere on the website."  title="Default indicator " [codes]="[examples[0]]">
      <div class="flex flex-wrap gap-2">
        <flowbite-indicator></flowbite-indicator>
        <flowbite-indicator color="gray"></flowbite-indicator>
        <flowbite-indicator color="blue"></flowbite-indicator>
        <flowbite-indicator color="green"></flowbite-indicator>
        <flowbite-indicator color="red"></flowbite-indicator>
        <flowbite-indicator color="purple" ></flowbite-indicator>
        <flowbite-indicator color="indigo"></flowbite-indicator>
        <flowbite-indicator color="yellow"></flowbite-indicator>
        <flowbite-indicator color="teal"></flowbite-indicator>
      </div>
    </flowbite-demo-example>
    <flowbite-demo-example subtitle="This example can be used as a legend indicator for charts to also add a text next to the bullet point." title="Legend indicator" [codes]="[examples[1]]">
      <div class="flex flex-wrap gap-2">
        <span class="flex items-center">  <flowbite-indicator size="sm" class="mr-1.5" color="gray"></flowbite-indicator>Visitors</span>
        <span class="flex items-center">  <flowbite-indicator size="sm" class="mr-1.5" color="blue"></flowbite-indicator>Sessions</span>
        <span class="flex items-center">  <flowbite-indicator size="sm" class="mr-1.5" color="green"></flowbite-indicator>Customers</span>
        <span class="flex items-center">  <flowbite-indicator size="sm" class="mr-1.5" color="red"></flowbite-indicator>Revenue</span>
        <span class="flex items-center">  <flowbite-indicator size="sm" class="mr-1.5" color="purple" ></flowbite-indicator>Revenue</span>
      </div>
    </flowbite-demo-example>
    <flowbite-demo-example subtitle="This example can be used to show a number count inside the indicator and position it relative to a button component." title="Indicator count" [codes]="[examples[2]]">
      <div class="flex flex-wrap gap-2">
        <flowbite-button class="relative">
          <svg class="w-5 h-5 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          Messages
          <flowbite-indicator [border]="true" color="red"  size="xl" placement="top-right" color="red">
            <span class="text-white text-xs font-bold">8</span>
          </flowbite-indicator>
        </flowbite-button>
      </div>
    </flowbite-demo-example>
    <flowbite-demo-example subtitle="Use these examples to position the indicator component anywhere relative to the parent element." title="Indicator position" [codes]="[examples[3]]">
      <div class="flex flex-wrap gap-2">
        <div class="w-56 h-56 relative bg-gray-300 borer border-gray-500 rounded-lg dark:bg-gray-900 dark:border-gray-700" >
          <flowbite-indicator placement="top-left" color="gray"></flowbite-indicator>
          <flowbite-indicator placement="top-center" color="blue"></flowbite-indicator>
          <flowbite-indicator placement="top-right" color="green"></flowbite-indicator>
          <flowbite-indicator placement="center-left" color="red"></flowbite-indicator>
          <flowbite-indicator placement="center" color="purple" ></flowbite-indicator>
          <flowbite-indicator placement="center-right" color="indigo"></flowbite-indicator>
          <flowbite-indicator placement="bottom-left" color="yellow"></flowbite-indicator>
          <flowbite-indicator placement="bottom-center" color="teal"></flowbite-indicator>
          <flowbite-indicator placement="bottom-right" color="dark"></flowbite-indicator>
        </div>
      </div>
    </flowbite-demo-example>
  </flowbite-demo-page>`,
})
export class IndicatorPageComponent {
  examples = [
    {
      language: 'html',
      code: `
<flowbite-indicator></flowbite-indicator>
<flowbite-indicator color="gray"></flowbite-indicator>
<flowbite-indicator color="blue"></flowbite-indicator>
<flowbite-indicator color="green"></flowbite-indicator>
<flowbite-indicator color="red"></flowbite-indicator>
<flowbite-indicator color="purple" ></flowbite-indicator>
<flowbite-indicator color="indigo"></flowbite-indicator>
<flowbite-indicator color="yellow"></flowbite-indicator>
<flowbite-indicator color="teal"></flowbite-indicator>
`,
    },
    {
      language: 'html',
      code: `
<span class="flex items-center">  <flowbite-indicator size="sm" class="mr-1.5" color="gray"></flowbite-indicator>Visitors</span>
<span class="flex items-center">  <flowbite-indicator size="sm" class="mr-1.5" color="blue"></flowbite-indicator>Sessions</span>
<span class="flex items-center">  <flowbite-indicator size="sm" class="mr-1.5" color="green"></flowbite-indicator>Customers</span>
<span class="flex items-center">  <flowbite-indicator size="sm" class="mr-1.5" color="red"></flowbite-indicator>Revenue</span>
<span class="flex items-center">  <flowbite-indicator size="sm" class="mr-1.5" color="purple" ></flowbite-indicator>Revenue</span>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-button class="relative">
  <svg class="w-5 h-5 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  Messages
  <flowbite-indicator [border]="true" color="red"  size="xl" placement="top-right" color="red">
    <span class="text-white text-xs font-bold">8</span>
  </flowbite-indicator>
</flowbite-button>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-indicator placement="top-left" color="gray"></flowbite-indicator>
<flowbite-indicator placement="top-center" color="blue"></flowbite-indicator>
<flowbite-indicator placement="top-right" color="green"></flowbite-indicator>
<flowbite-indicator placement="center-left" color="red"></flowbite-indicator>
<flowbite-indicator placement="center" color="purple" ></flowbite-indicator>
<flowbite-indicator placement="center-right" color="indigo"></flowbite-indicator>
<flowbite-indicator placement="bottom-left" color="yellow"></flowbite-indicator>
<flowbite-indicator placement="bottom-center" color="teal"></flowbite-indicator>
<flowbite-indicator placement="bottom-right" color="dark"></flowbite-indicator>
`
    }
  ];
}
