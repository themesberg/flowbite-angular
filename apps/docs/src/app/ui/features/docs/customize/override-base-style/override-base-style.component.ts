import { ShikiComponent } from '../../../../shared/components/shiki/shiki.component';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-override-base-style',
  standalone: true,
  imports: [ShikiComponent],
  templateUrl: './override-base-style.component.html',
})
export class OverrideBaseStyleComponent {}
