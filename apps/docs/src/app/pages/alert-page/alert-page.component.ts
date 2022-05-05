import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-alert-page',
  template: `
    <flowbite-demo-page>
      <flowbite-demo-example title="Default Badge" [codes]="[examples[0]]">
        <flowbite-alert>
          <span class="font-medium">Info alert!</span> Change a few things up
          and try submitting again.
        </flowbite-alert>
      </flowbite-demo-example>
      <flowbite-demo-example title="Alerts with icon" [codes]="[examples[1]]">
        <flowbite-alert [icon]="icon" color="red">
          <span class="font-medium">Info alert!</span> Change a few things up
          and try submitting again.
        </flowbite-alert>
      </flowbite-demo-example>
      <flowbite-demo-example
        title="Dismissible alerts"
        [codes]="[examples[2], examples[3]]"
      >
        <flowbite-alert color="green" [dismiss]="onDismiss">
          <span class="font-medium">Info alert!</span> Change a few things up
          and try submitting again.
        </flowbite-alert>
      </flowbite-demo-example>
      <flowbite-demo-example title="Border accent" [codes]="[examples[4]]">
        <flowbite-alert
          color="yellow"
          [withBorderAccent]="true"
          [rounded]="false"
        >
          <span class="font-medium">Info alert!</span> Change a few things up
          and try submitting again.
        </flowbite-alert>
      </flowbite-demo-example>
      <flowbite-demo-example title="Additional content" [codes]="[examples[5]]">
        <flowbite-alert
          color="gray"
          [icon]="icon"
          [additionalContent]="additionalContent"
        >
          <h3 class="text-lg font-medium text-gray-700 dark:text-gray-100">
            This is an info alert
          </h3>
        </flowbite-alert>
      </flowbite-demo-example>
      <ng-template #icon>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 20 20"
          class="mr-3 inline h-5 w-5 flex-shrink-0"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </ng-template>
      <ng-template #additionalContent>
        <div class="mt-2 mb-4 text-sm text-gray-700 dark:text-gray-100">
          More info about this info alert goes here. This example text is going
          to run a bit longer so that you can see how spacing within an alert
          works with this kind of content.
        </div>
        <div class="flex">
          <button
            type="button"
            class="mr-2 inline-flex items-center rounded-lg bg-gray-700 px-3 py-1.5 text-center text-xs font-medium text-gray-100 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:bg-gray-100 dark:text-gray-700 dark:hover:bg-gray-200"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 20 20"
              class="-ml-0.5 mr-2 h-4 w-4"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
              <path
                fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            View more
          </button>
          <button
            type="button"
            class="rounded-lg border border-gray-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-gray-700 hover:bg-gray-800 hover:text-white focus:ring-4 focus:ring-gray-300 dark:border-gray-100 dark:text-gray-100 dark:hover:text-white"
          >
            Dismiss
          </button>
        </div>
      </ng-template>
    </flowbite-demo-page>
  `,
})
export class AlertPageComponent {
  examples = [
    {
      language: 'html',
      code: `
<flowbite-alert>
  <span class="font-medium">Info alert!</span> Change a few things up
  and try submitting again.
</flowbite-alert>
`,
    },
    {
      language: 'html',
      code: `
<flowbite-alert [icon]="icon" color="red">
  <span class="font-medium">Info alert!</span> Change a few things up
  and try submitting again.
</flowbite-alert>
<ng-template #icon><svg>...</svg></ng-template>`,
    },
    {
      language: 'ts',
      code: `onDismiss = () => alert('Alert dismissed!');`,
    },
    {
      language: 'html',
      code: `
<flowbite-alert color="green" [dismiss]="onDismiss">
  <span class="font-medium">Info alert!</span> Change a few things up
  and try submitting again.
</flowbite-alert>`,
    },
    {
      language: 'html',
      code: `
<flowbite-alert
  color="yellow"
  [withBorderAccent]="true"
  [rounded]="false"
>
  <span class="font-medium">Info alert!</span> Change a few things up
  and try submitting again.
</flowbite-alert>`,
    },
    {
      language: 'html',
      code: `
<flowbite-alert [icon]="icon" [additionalContent]="additionalContent">
  <h3 class="text-lg font-medium text-blue-700 dark:text-blue-800">
    This is an info alert
  </h3>
</flowbite-alert>
<ng-template #icon><svg>...</svg></ng-template>
<ng-template #additionalContent><svg>...</svg></ng-template>
`,
    },
  ];

  onDismiss = () => alert('Alert dismissed!');
}
