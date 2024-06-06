import * as properties from './alert.theme';
import { BaseComponent } from '../base.component';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { paramNotNull } from '../../utils/param.util';

import {
  Component,
  HostBinding,
  OnInit,
  TemplateRef,
  booleanAttribute,
  input,
  signal,
} from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

/**
 * @see https://flowbite.com/docs/components/alerts/
 */
@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  selector: 'flowbite-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent extends BaseComponent implements OnInit {
  @HostBinding('role') protected hostRoleValue = 'alert';

  protected override contentClassesSignal = signal<properties.AlertClass>(
    properties.AlertClassInstance(),
  );

  //#region properties
  public color = input<keyof properties.AlertColors>('blue');
  public rounded = input(true, { transform: booleanAttribute });
  public borderAccent = input(false, { transform: booleanAttribute });
  public customStyle = input<Partial<properties.AlertBaseTheme>>({});

  public icon = input<TemplateRef<unknown> | null>(null);
  public additionalContent = input<TemplateRef<unknown> | null>(null);
  public dismiss = input<() => void | undefined>();

  //#region BaseComponent implementation
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected override fetchClass(): void {}
  //#endregion

  protected callDismiss() {
    const func = this.dismiss();

    if (func) func();
  }

  protected override fetchClassSignal(): void {
    if (
      paramNotNull(
        this.color(),
        booleanToFlowbiteBoolean(this.rounded()),
        booleanToFlowbiteBoolean(this.borderAccent()),
        this.customStyle(),
      )
    ) {
      const propertyClass = properties.getClasses({
        color: this.color(),
        borderAccent: booleanToFlowbiteBoolean(this.borderAccent()),
        rounded: booleanToFlowbiteBoolean(this.rounded()),
        customStyle: this.customStyle(),
      });

      this.contentClassesSignal.set(propertyClass);
    }
  }
}
