import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-badge-page',
  template: ` <flowbite-demo-page>
    <flowbite-demo-example title="Default Badge" [code]="examples[0]">
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
    <flowbite-demo-example title="Large badge" [code]="examples[1]">
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
    <flowbite-demo-example title="Badges as links" [code]="examples[2]">
      <div class="flex flex-wrap items-center gap-2">
        <flowbite-badge href="/badges">Default</flowbite-badge>
        <flowbite-badge href="/badges" size="sm">Default</flowbite-badge>
      </div>
    </flowbite-demo-example>
  </flowbite-demo-page>`,
})
export class BadgePageComponent {
  examples = [
    `
<div class="flex flex-wrap gap-2">
  <flowbite-badge>Default</flowbite-badge>
  <flowbite-badge color="dark">Dark</flowbite-badge>
  <flowbite-badge color="red">Red</flowbite-badge>
  <flowbite-badge color="green">Green</flowbite-badge>
  <flowbite-badge color="yellow">Yellow</flowbite-badge>
  <flowbite-badge color="indigo">Indigo</flowbite-badge>
  <flowbite-badge color="purple">Purple</flowbite-badge>
  <flowbite-badge color="pink">Pink</flowbite-badge>
</div>`.trim(),
    `
<div class="flex flex-wrap gap-2">
  <flowbite-badge size="sm">Default</flowbite-badge>
  <flowbite-badge color="dark" size="sm">Dark</flowbite-badge>
  <flowbite-badge color="red" size="sm">Red</flowbite-badge>
  <flowbite-badge color="green" size="sm">Green</flowbite-badge>
  <flowbite-badge color="yellow" size="sm">Yellow</flowbite-badge>
  <flowbite-badge color="indigo" size="sm">Indigo</flowbite-badge>
  <flowbite-badge color="purple" size="sm">Purple</flowbite-badge>
  <flowbite-badge color="pink" size="sm">Pink</flowbite-badge>
</div>`.trim(),
  ];
}
