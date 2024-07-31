import { ShikiComponent } from '../../../../shared/components/shiki/shiki.component';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-quickstart',
  standalone: true,
  imports: [ShikiComponent],
  templateUrl: './quickstart.component.html',
})
export class QuickstartComponent {}
