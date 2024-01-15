import { Component, Input } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { PrismComponent } from '../prism/prism.component';

@Component({
  standalone: true,
  imports: [PrismComponent, NgClass, NgFor],
  selector: 'flowbite-demo-example',
  templateUrl: './demo-example.component.html',
})
export class DemoExampleComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() codes: { language: string; code: string }[] = [];
  @Input() codeClassName?: string;
}
