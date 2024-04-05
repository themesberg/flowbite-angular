import * as properties from './badge.theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';

import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterLink],
  selector: 'flowbite-badge',
  templateUrl: './badge.component.html',
})
export class BadgeComponent extends BaseComponent {
  @Input() color: keyof properties.BadgeColors = 'blue';
  @Input() size: keyof properties.BadgeSizes = 'xs';
  @Input() isIconOnly: keyof FlowbiteBoolean = 'disabled';
  @Input() isPill: keyof FlowbiteBoolean = 'disabled';
  @Input() href?: string;
  @Input() customStyle: Partial<properties.BadgeBaseTheme> = {};

  protected override fetchClass(): void {
    const propertyClass = properties.getClasses({
      color: this.color,
      size: this.size,
      isIconOnly: this.isIconOnly,
      isPill: this.isPill,
      href: this.href,
      customStyle: this.customStyle,
    });

    this.componentClass = propertyClass.root;
  }
}
