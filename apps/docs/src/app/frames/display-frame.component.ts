import { NgClass } from '@angular/common';
import { booleanAttribute, Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'flowbite-frame-display',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      class="flex items-center justify-around grow gap-3"
      [ngClass]="{
        'flex-col': orientation() === 'col',
        'flex-row': orientation() === 'row',
        'flex-wrap': wrap(),
      }">
      <ng-content />
    </div>
  `,
})
export class FlowbiteFrameDisplayComponent {
  @HostBinding('class')
  protected get hostBaseClass() {
    return `
        flex pb-4 gap-3 justify-around items-center m-6
        ${this.orientation() === 'col' ? 'flex-col' : 'flex-row'}
        ${this.wrap() ? 'flex-wrap' : ''}
    `;
  }

  public orientation = input<'row' | 'col'>('row');
  public wrap = input<boolean, string | boolean>(true, { transform: booleanAttribute });
}
