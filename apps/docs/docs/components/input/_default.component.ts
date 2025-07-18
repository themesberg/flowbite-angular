import { Button } from 'flowbite-angular/button';
import { FormControl, FormField, Helper, Label } from 'flowbite-angular/form';

import { Component } from '@angular/core';

@Component({
  imports: [FormControl, FormField, Label, Helper, Button],
  templateUrl: './_default.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3 p-6',
  },
})
export class FlowbiteDefaultComponent {}
