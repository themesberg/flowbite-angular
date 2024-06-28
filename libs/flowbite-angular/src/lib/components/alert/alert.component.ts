import * as properties from './alert.theme';

import { AlertThemeService } from './alert.theme.service';
import { BaseComponent } from '../base.component';
import { booleanToFlowbiteBoolean } from '../../utils/boolean.util';

import {
  Component,
  HostBinding,
  OnInit,
  TemplateRef,
  booleanAttribute,
  inject,
  input,
  signal,
} from '@angular/core';
import { DeepPartial } from '../../common/flowbite.type';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  selector: 'flowbite-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent extends BaseComponent implements OnInit {
  @HostBinding('role') protected hostRoleValue = 'alert';

  protected override contentClasses = signal<properties.AlertClass>(
    properties.AlertClassInstance,
  );

  protected readonly themeService = inject(AlertThemeService);

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
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      color: this.color(),
      hasBorderAccent: booleanToFlowbiteBoolean(this.hasBorderAccent()),
      isRounded: booleanToFlowbiteBoolean(this.isRounded()),
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion

  protected callDismiss() {
    const func = this.dismiss();

    if (func) func();
  }
}
