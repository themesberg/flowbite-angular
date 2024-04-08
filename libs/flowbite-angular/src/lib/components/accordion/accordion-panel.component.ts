import { Component, Input, booleanAttribute } from '@angular/core';
import { FlowbiteBoolean } from '../../common/flowbite.theme';
import {
  booleanToFlowbiteBoolean,
  flowbiteBooleanToBoolean,
} from '../../utils/boolean.util';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-accordion-panel',
  templateUrl: './accordion-panel.component.html',
})
export class AccordionPanelComponent {
  //#region properties
  protected $open: keyof FlowbiteBoolean = 'disabled';
  //#endregion
  //#region getter/setter
  /** @default false */
  public get open(): boolean {
    return flowbiteBooleanToBoolean(this.$open);
  }
  @Input({ transform: booleanAttribute }) public set open(value: boolean) {
    this.$open = booleanToFlowbiteBoolean(value);
  }
  //#endregion

  toggleVisibility() {
    this.open = !this.open;
  }
}
