import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'flowbite-accordion-panel',
  templateUrl: './accordion-panel.component.html',
})
export class AccordionPanelComponent {
  //#region properties
  protected $open: boolean = false;
  //#endregion
  //#region getter/setter
  /** @default false */
  public get open(): boolean {
    return this.$open;
  }
  @Input() public set open(value: boolean) {
    this.$open = value;
  }
  //#endregion

  toggleVisibility() {
    this.$open = !this.open;
  }
}
