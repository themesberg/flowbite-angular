import type { DeepPartial } from '../../common/flowbite.type';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';
import { BaseComponent } from '../base.component';
import * as properties from './alert.theme';
import { AlertThemeService } from './alert.theme.service';

import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import type { OnInit, TemplateRef } from '@angular/core';
import { booleanAttribute, Component, HostBinding, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  selector: 'flowbite-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent extends BaseComponent implements OnInit {
  @HostBinding('attr.role') role = 'alert';

  public readonly themeService = inject(AlertThemeService);

  public override contentClasses = signal<properties.AlertClass>(properties.AlertClassInstance);

  //#region properties
  public color = input<keyof properties.AlertColors>('blue');
  public isRounded = input(true, { transform: booleanAttribute });
  public hasBorderAccent = input<boolean, string | boolean>(false, {
    transform: booleanAttribute,
  });
  public customStyle = input<DeepPartial<properties.AlertBaseTheme>>({});
  public icon = input<TemplateRef<unknown> | null>(null);
  public additionalContent = input<TemplateRef<unknown> | null>(null);
  public dismiss = input<() => void | undefined>();
  //#endregion

  //#region BaseComponent implementation
  public override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      hasBorderAccent: booleanToFlowbiteBoolean(this.hasBorderAccent()),
      isRounded: booleanToFlowbiteBoolean(this.isRounded()),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  public callDismiss() {
    const func = this.dismiss();

    if (func) func();
  }
}
