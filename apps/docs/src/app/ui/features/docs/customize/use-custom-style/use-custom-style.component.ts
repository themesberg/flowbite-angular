import { ShikiComponent } from '../../../../shared/components/shiki/shiki.component';

import { AlertComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-use-custom-style',
  standalone: true,
  imports: [ShikiComponent, AlertComponent],
  templateUrl: './use-custom-style.component.html',
})
export class UseCustomStyleComponent {}
