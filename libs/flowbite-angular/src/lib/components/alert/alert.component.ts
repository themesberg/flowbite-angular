import * as properties from './alert.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';
import { paramNotNull } from '../../utils/param.util';

import { Component, Input, TemplateRef } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgIf, NgClass, NgTemplateOutlet],
  selector: 'flowbite-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent extends BaseComponent {
  //#region properties
  protected $color: keyof properties.AlertColors = 'blue';
  protected $rounded: keyof FlowbiteBoolean = 'enabled';
  protected $borderAccent: keyof FlowbiteBoolean = 'disabled';
  protected $customStyle: Partial<properties.AlertBaseTheme> = {};

  protected $icon: TemplateRef<unknown> | null = null;
  protected $additionalContent: TemplateRef<unknown> | null = null;
  protected $dismiss!: () => void;
  //#endregion
  //#region getter/setter
  public get color(): keyof properties.AlertColors {
    return this.$color;
  }
  @Input() public set color(value: keyof properties.AlertColors) {
    this.$color = value;
    this.fetchClass();
  }

  public get rounded(): keyof FlowbiteBoolean {
    return this.$rounded;
  }
  @Input() public set rounded(value: keyof FlowbiteBoolean) {
    this.$rounded = value;
    this.fetchClass();
  }

  public get borderAccent(): keyof FlowbiteBoolean {
    return this.$borderAccent;
  }
  @Input() public set borderAccent(value: keyof FlowbiteBoolean) {
    this.$borderAccent = value;
    this.fetchClass();
  }

  public get customStyle(): Partial<properties.AlertBaseTheme> {
    return this.$customStyle;
  }
  @Input() public set customStyle(value: Partial<properties.AlertBaseTheme>) {
    this.$customStyle = value;
    this.fetchClass();
  }

  public get icon(): TemplateRef<unknown> | null {
    return this.$icon;
  }
  @Input() public set icon(value: TemplateRef<unknown> | null) {
    this.$icon = value;
    this.fetchClass();
  }

  public get additionalContent(): TemplateRef<unknown> | null {
    return this.$additionalContent;
  }
  @Input() public set additionalContent(value: TemplateRef<unknown> | null) {
    this.$additionalContent = value;
    this.fetchClass();
  }

  public get dismiss(): () => void {
    return this.$dismiss;
  }
  @Input() public set dismiss(value: () => void) {
    this.$dismiss = value;
  }
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    if (
      paramNotNull(
        this.color,
        this.rounded,
        this.borderAccent,
        this.customStyle,
      )
    ) {
      const propertyClass = properties.getClasses({
        color: this.color,
        borderAccent: this.borderAccent,
        rounded: this.rounded,
        customStyle: this.customStyle,
      });

      this.componentClass = propertyClass.alertClass;
      this.contentClasses = {
        alertButton: propertyClass.alertButtonClass,
      };
    }
  }
  //#endregion
}
