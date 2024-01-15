import { BadgeComponent } from '@flowbite-angular/lib';
import { Component } from '@angular/core';
import { DemoExampleComponent, DemoPageComponent } from '../../common';

@Component({
  standalone: true,
  imports: [DemoPageComponent, DemoExampleComponent, BadgeComponent],
  selector: 'flowbite-badge-page',
  template: ` <flowbite-demo-page>
    <flowbite-demo-example title="Default Badge" [codes]="[examples[0]]">
      <div class="flex flex-wrap gap-2">
        <flowbite-badge>Default</flowbite-badge>
        <flowbite-badge color="dark">Dark</flowbite-badge>
        <flowbite-badge color="red">Red</flowbite-badge>
        <flowbite-badge color="green">Green</flowbite-badge>
        <flowbite-badge color="yellow">Yellow</flowbite-badge>
        <flowbite-badge color="indigo">Indigo</flowbite-badge>
        <flowbite-badge color="purple">Purple</flowbite-badge>
        <flowbite-badge color="pink">Pink</flowbite-badge>
      </div>
    </flowbite-demo-example>
    <flowbite-demo-example title="Large badge" [codes]="[examples[1]]">
      <div class="flex flex-wrap gap-2">
        <flowbite-badge size="sm">Default</flowbite-badge>
        <flowbite-badge color="dark" size="sm">Dark</flowbite-badge>
        <flowbite-badge color="red" size="sm">Red</flowbite-badge>
        <flowbite-badge color="green" size="sm">Green</flowbite-badge>
        <flowbite-badge color="yellow" size="sm">Yellow</flowbite-badge>
        <flowbite-badge color="indigo" size="sm">Indigo</flowbite-badge>
        <flowbite-badge color="purple" size="sm">Purple</flowbite-badge>
        <flowbite-badge color="pink" size="sm">Pink</flowbite-badge>
      </div>
    </flowbite-demo-example>
    <flowbite-demo-example title="Badges as links" [codes]="[examples[2]]">
      <div class="flex flex-wrap items-center gap-2">
        <flowbite-badge href="/badges">Default</flowbite-badge>
        <flowbite-badge href="/badges" size="sm">Default</flowbite-badge>
      </div>
    </flowbite-demo-example>
    <flowbite-demo-example title="Badges with icon" [codes]="[examples[3]]">
      <div class="flex flex-wrap items-center gap-2">
        <flowbite-badge>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 20 20"
            class="h-3 w-3"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          2 minutes ago
        </flowbite-badge>
        <flowbite-badge color="dark">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 20 20"
            class="h-3 w-3"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clip-rule="evenodd"
            ></path>
          </svg>
          3 days ago
        </flowbite-badge>
      </div>
    </flowbite-demo-example>
    <flowbite-demo-example title="Badge with icon only" [codes]="[examples[4]]">
      <div class="flex flex-wrap items-center gap-2">
        <flowbite-badge [iconOnly]="true">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 20 20"
            class="h-3 w-3"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </flowbite-badge>
        <flowbite-badge [iconOnly]="true" color="dark">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 20 20"
            class="h-3 w-3"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </flowbite-badge>
        <flowbite-badge [iconOnly]="true" size="sm">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 20 20"
            class="h-3.5 w-3.5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </flowbite-badge>
        <flowbite-badge [iconOnly]="true" color="dark" size="sm">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 20 20"
            class="h-3.5 w-3.5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </flowbite-badge>
      </div>
    </flowbite-demo-example>
  </flowbite-demo-page>`,
})
export class BadgePageComponent {
  examples = [
    {
      language: 'html',
      code: `
<flowbite-badge>Default</flowbite-badge>
<flowbite-badge color="dark">Dark</flowbite-badge>
<flowbite-badge color="red">Red</flowbite-badge>
<flowbite-badge color="green">Green</flowbite-badge>
<flowbite-badge color="yellow">Yellow</flowbite-badge>
<flowbite-badge color="indigo">Indigo</flowbite-badge>
<flowbite-badge color="purple">Purple</flowbite-badge>
<flowbite-badge color="pink">Pink</flowbite-badge>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-badge size="sm">Default</flowbite-badge>
<flowbite-badge color="dark" size="sm">Dark</flowbite-badge>
<flowbite-badge color="red" size="sm">Red</flowbite-badge>
<flowbite-badge color="green" size="sm">Green</flowbite-badge>
<flowbite-badge color="yellow" size="sm">Yellow</flowbite-badge>
<flowbite-badge color="indigo" size="sm">Indigo</flowbite-badge>
<flowbite-badge color="purple" size="sm">Purple</flowbite-badge>
<flowbite-badge color="pink" size="sm">Pink</flowbite-badge>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-badge href="/badges">Default</flowbite-badge>
<flowbite-badge href="/badges" size="sm">Default</flowbite-badge>`,
    },
    {
      language: 'html',
      code: `
<flowbite-badge><svg>...</svg> 2 minutes ago</flowbite-badge>
<flowbite-badge color="dark"><svg>...</svg> 3 days ago</flowbite-badge>`,
    },
    {
      language: 'html',
      code: `
<flowbite-badge [iconOnly]="true"><svg>...</svg></flowbite-badge>
<flowbite-badge [iconOnly]="true" color="dark"><svg>...</svg></flowbite-badge>
<flowbite-badge [iconOnly]="true" size="sm"><svg>...</svg></flowbite-badge>
<flowbite-badge [iconOnly]="true" color="dark" size="sm"><svg>...</svg></flowbite-badge>`,
    },
  ];
}
