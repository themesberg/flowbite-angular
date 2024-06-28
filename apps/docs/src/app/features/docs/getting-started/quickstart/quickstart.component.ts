import { Component } from '@angular/core';
import { ShikiComponent } from '../../../../common/shiki/shiki.component';

@Component({
  selector: 'flowbite-quickstart',
  standalone: true,
  imports: [ShikiComponent],
  templateUrl: './quickstart.component.html',
})
export class QuickstartComponent {}
