import { ShikiComponent } from '../../../../common/shiki/shiki.component';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-introduction',
  standalone: true,
  imports: [ShikiComponent],
  templateUrl: './introduction.component.html',
})
export class IntroductionComponent {}
