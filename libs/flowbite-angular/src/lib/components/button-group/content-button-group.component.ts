import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'flowbite-content-button-group',
  standalone: true,
  imports: [CommonModule],
  template: `
        <button type="button">
          <ng-content></ng-content>
        </button>
  `,
  styles: [],
})
export class ContentButtonGroupComponent {





}
