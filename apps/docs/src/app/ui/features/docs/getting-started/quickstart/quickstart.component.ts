import { ShikiComponent } from '../../../../shared/components/shiki/shiki.component';

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'flowbite-quickstart',
  standalone: true,
  imports: [ShikiComponent, RouterLink],
  templateUrl: './quickstart.component.html',
})
export class QuickstartComponent {}
