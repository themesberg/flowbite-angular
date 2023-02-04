import { AfterViewInit, ChangeDetectionStrategy, Component, ContentChildren, ElementRef, HostBinding, Input, QueryList, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGroupDirective } from './button-group.directive';
import { buttonGroupColorClasses, ButtonGroupColors } from './buttonGroup.properties';


@Component({
  selector: 'flowbite-button-group',
  standalone: true,
  imports: [CommonModule],
  template: `
      <ng-container *ngTemplateOutlet="group" ></ng-container>
      <ng-template #group >
          <ng-content></ng-content>
      </ng-template>

  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent implements AfterViewInit {


  @ContentChildren(ButtonGroupDirective, { read: ElementRef }) button!: QueryList<ElementRef>

  @Input() icon = true;
  @Input() color: ButtonGroupColors = 'info'
  @Input() outline = false;

  @HostBinding('class') class = 'inline-flex'

  ngAfterViewInit() {
    buttonGroupColorClasses[this.color][this.outline ? 'outline' : 'solid'].split(' ').forEach((list) => {
      if (list === '') return;
      this.button.first.nativeElement.classList.add(list, 'border', 'rounded-l-lg')
      this.button.last.nativeElement.classList.add(list, 'border', 'rounded-r-lg')

      this.button.forEach((item, index) => {
        if (index !== 0 && index !== this.button.length - 1) {
          item.nativeElement.classList.add(list, 'border-t', 'border-b')
        }
      })
    })
  }
}

export const FlowbiteButtonGroup = [ButtonGroupComponent, ButtonGroupDirective] as const
