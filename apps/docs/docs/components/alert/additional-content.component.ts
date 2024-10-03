import { AlertComponent, ButtonComponent, IconComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-additional-content',
  standalone: true,
  imports: [AlertComponent, IconComponent, ButtonComponent],
  template: `
    <flowbite-alert
      color="primary"
      [additionalContent]="primaryAdditionalContent">
      <h3 class="text-lg font-medium">This is an primary alert</h3>
    </flowbite-alert>
    <flowbite-alert
      color="dark"
      [additionalContent]="darkAdditionalContent">
      <h3 class="text-lg font-medium">This is an dark alert</h3>
    </flowbite-alert>
    <flowbite-alert
      color="blue"
      [additionalContent]="blueAdditionalContent">
      <h3 class="text-lg font-medium">This is an blue alert</h3>
    </flowbite-alert>
    <flowbite-alert
      color="red"
      [additionalContent]="redAdditionalContent">
      <h3 class="text-lg font-medium">This is an red alert</h3>
    </flowbite-alert>
    <flowbite-alert
      color="green"
      [additionalContent]="greenAdditionalContent">
      <h3 class="text-lg font-medium">This is an green alert</h3>
    </flowbite-alert>
    <flowbite-alert
      color="yellow"
      [additionalContent]="yellowAdditionalContent">
      <h3 class="text-lg font-medium">This is an yellow alert</h3>
    </flowbite-alert>

    <ng-template #primaryAdditionalContent>
      <div class="mt-2 mb-4 text-sm">
        More blue about this blue alert goes here. This example text is going to run a bit longer so that you can see
        how spacing within an alert works with this kind of content.
      </div>
      <div class="flex">
        <flowbite-button
          color="primary"
          class="mr-2"
          size="xs">
          <flowbite-icon
            svgIcon="outline:eye"
            class="-ml-0.5 mr-2 h-4 w-4" />
          View more
        </flowbite-button>
        <flowbite-button
          color="primary"
          fill="outline"
          size="xs">
          Dismiss
        </flowbite-button>
      </div>
    </ng-template>
    <ng-template #darkAdditionalContent>
      <div class="mt-2 mb-4 text-sm">
        More blue about this blue alert goes here. This example text is going to run a bit longer so that you can see
        how spacing within an alert works with this kind of content.
      </div>
      <div class="flex">
        <flowbite-button
          color="dark"
          class="mr-2"
          size="xs">
          <flowbite-icon
            svgIcon="outline:eye"
            class="-ml-0.5 mr-2 h-4 w-4" />
          View more
        </flowbite-button>
        <flowbite-button
          color="dark"
          fill="outline"
          size="xs">
          Dismiss
        </flowbite-button>
      </div>
    </ng-template>
    <ng-template #blueAdditionalContent>
      <div class="mt-2 mb-4 text-sm">
        More blue about this blue alert goes here. This example text is going to run a bit longer so that you can see
        how spacing within an alert works with this kind of content.
      </div>
      <div class="flex">
        <flowbite-button
          color="blue"
          class="mr-2"
          size="xs">
          <flowbite-icon
            svgIcon="outline:eye"
            class="-ml-0.5 mr-2 h-4 w-4" />
          View more
        </flowbite-button>
        <flowbite-button
          color="blue"
          fill="outline"
          size="xs">
          Dismiss
        </flowbite-button>
      </div>
    </ng-template>
    <ng-template #redAdditionalContent>
      <div class="mt-2 mb-4 text-sm">
        More blue about this blue alert goes here. This example text is going to run a bit longer so that you can see
        how spacing within an alert works with this kind of content.
      </div>
      <div class="flex">
        <flowbite-button
          color="red"
          class="mr-2"
          size="xs">
          <flowbite-icon
            svgIcon="outline:eye"
            class="-ml-0.5 mr-2 h-4 w-4" />
          View more
        </flowbite-button>
        <flowbite-button
          color="red"
          fill="outline"
          size="xs">
          Dismiss
        </flowbite-button>
      </div>
    </ng-template>
    <ng-template #greenAdditionalContent>
      <div class="mt-2 mb-4 text-sm">
        More blue about this blue alert goes here. This example text is going to run a bit longer so that you can see
        how spacing within an alert works with this kind of content.
      </div>
      <div class="flex">
        <flowbite-button
          color="green"
          class="mr-2"
          size="xs">
          <flowbite-icon
            svgIcon="outline:eye"
            class="-ml-0.5 mr-2 h-4 w-4" />
          View more
        </flowbite-button>
        <flowbite-button
          color="green"
          fill="outline"
          size="xs">
          Dismiss
        </flowbite-button>
      </div>
    </ng-template>
    <ng-template #yellowAdditionalContent>
      <div class="mt-2 mb-4 text-sm">
        More blue about this blue alert goes here. This example text is going to run a bit longer so that you can see
        how spacing within an alert works with this kind of content.
      </div>
      <div class="flex">
        <flowbite-button
          color="yellow"
          class="mr-2"
          size="xs">
          <flowbite-icon
            svgIcon="outline:eye"
            class="-ml-0.5 mr-2 h-4 w-4" />
          View more
        </flowbite-button>
        <flowbite-button
          color="yellow"
          fill="outline"
          size="xs">
          Dismiss
        </flowbite-button>
      </div>
    </ng-template>
  `,
})
export class FlowbiteAdditionalContentComponent {}
