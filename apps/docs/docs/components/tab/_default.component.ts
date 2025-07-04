import { Tab, TabButton, TabContent, TabList } from 'flowbite-angular/tab';

import { Component } from '@angular/core';

@Component({
  imports: [Tab, TabButton, TabContent, TabList],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {}
