import { NgClass } from '@angular/common';
import { booleanAttribute, Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'flowbite-frame-display',
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      class="flex items-center justify-around h-full w-full grow gap-3"
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
    return 'flex min-h-screen gap-3 justify-around items-center p-6';
  }

  public orientation = input<'row' | 'col'>('row');
  public wrap = input<boolean, string | boolean>(true, { transform: booleanAttribute });
}
