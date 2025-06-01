import { FlowbiteButtonComponent, FlowbiteIconButtonDirective } from 'flowbite-angular/button';
import { FlowbiteIconComponent as fic } from 'flowbite-angular/icon';
import { arrowLeft, arrowRight } from 'flowbite-angular/icon/outline/arrows';
import { brain, infoCircle } from 'flowbite-angular/icon/outline/general';

import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';

@Component({
  imports: [FlowbiteButtonComponent, fic, FlowbiteIconButtonDirective],
  providers: [provideIcons({ arrowLeft, arrowRight, infoCircle, brain })],
  templateUrl: './_icon.component.html',
  host: {
    class: 'flex flex-wrap flex-row gap-3',
  },
})
export class FlowbiteIconComponent {}
