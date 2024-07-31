import { ShikiComponent } from '../../../../shared/components/shiki/shiki.component';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-theming',
  standalone: true,
  imports: [ShikiComponent],
  templateUrl: './theming.component.html',
})
export class ThemingComponent {}
