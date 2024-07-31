import { NgClass } from '@angular/common';
import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-demo-example',
  templateUrl: './demo-example.component.html',
})
export class DemoExampleComponent {
  public title = input.required<string>();
  public subtitle = input<string>();

  public orientation = input<'row' | 'col'>('row');
  public wrap = input<boolean, string | boolean>(true, { transform: booleanAttribute });
}
