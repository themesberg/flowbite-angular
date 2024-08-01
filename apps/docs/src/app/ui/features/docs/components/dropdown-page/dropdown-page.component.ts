import { FlowbiteIFrameWrapperComponent } from '../../../../../frames/iframe-wrapper.component';
import * as examples from '../../../../examples/dropdown.example';
import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';
import { ShikiComponent } from '../../../../shared/components/shiki/shiki.component';

import {
  DropdownComponent,
  DropdownDividerComponent,
  DropdownHeaderComponent,
  DropdownItemComponent,
} from 'flowbite-angular';

import { Component, HostBinding } from '@angular/core';

@Component({
  standalone: true,
  imports: [
    DemoExampleComponent,
    DropdownComponent,
    DropdownItemComponent,
    DropdownDividerComponent,
    DropdownHeaderComponent,
    ShikiComponent,
    FlowbiteIFrameWrapperComponent,
  ],
  selector: 'flowbite-dropdown-page',
  templateUrl: './dropdown-page.component.html',
})
export class DropdownPageComponent {
  @HostBinding('class')
  protected readonly hostClass = 'flex flex-col gap-8';

  protected readonly examples = examples;
}
