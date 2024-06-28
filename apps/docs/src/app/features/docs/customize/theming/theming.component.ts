import { Component } from '@angular/core';
import { ShikiComponent } from '../../../../common/shiki/shiki.component';

@Component({
  selector: 'flowbite-theming',
  standalone: true,
  imports: [ShikiComponent],
  templateUrl: './theming.component.html',
})
export class ThemingComponent {}
