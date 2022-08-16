import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-button-page',
  template: `<flowbite-demo-page>
    <flowbite-demo-example title="Default button" [codes]="[examples[0]]">
      <div class="flex flex-wrap gap-2">
        <flowbite-button>Default</flowbite-button>
        <flowbite-button color="gray">Gray</flowbite-button>
        <flowbite-button color="dark">Dark</flowbite-button>
        <flowbite-button color="light">Light</flowbite-button>
        <flowbite-button color="success">Success</flowbite-button>
        <flowbite-button color="failure">Failure</flowbite-button>
        <flowbite-button color="warning">Warning</flowbite-button>
        <flowbite-button color="purple">Purple</flowbite-button>
      </div>
    </flowbite-demo-example>
  </flowbite-demo-page>`,
})
export class ButtonPageComponent {
  examples = [
    {
      language: 'html',
      code: `
<flowbite-button>Default</flowbite-button>
<flowbite-button color="gray">Gray</flowbite-button>
<flowbite-button color="dark">Dark</flowbite-button>
<flowbite-button color="light">Light</flowbite-button>
<flowbite-button color="success">Success</flowbite-button>
<flowbite-button color="failure">Failure</flowbite-button>
<flowbite-button color="warning">Warning</flowbite-button>
<flowbite-button color="purple">Purple</flowbite-button>
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
