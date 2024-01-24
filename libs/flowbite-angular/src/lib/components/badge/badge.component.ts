import * as properties from './theme';
import { BaseComponent } from '../base.component';
import { FlowbiteBoolean } from '../../common/flowbite.theme';

import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterLink],
  selector: 'flowbite-badge',
  templateUrl: './badge.component.html',
})
export class BadgeComponent extends BaseComponent implements OnInit {
  @Input() color: keyof properties.BadgeColors = 'blue';
  @Input() size: keyof properties.BadgeSizes = 'xs';
  @Input() isIconOnly: keyof FlowbiteBoolean = 'disabled';
  @Input() isPill: keyof FlowbiteBoolean = 'disabled';
  @Input() href?: string;
  @Input() customStyle: Partial<properties.BadgeBaseTheme> = {};

  ngOnInit(): void {
    this.componentClass = properties.getClasses({
      color: this.color,
      size: this.size,
      isIconOnly: this.isIconOnly,
      isPill: this.isPill,
      href: this.href,
      customStyle: this.customStyle,
    });
  }
}
