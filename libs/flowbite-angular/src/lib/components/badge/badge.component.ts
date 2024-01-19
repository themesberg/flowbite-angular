import { BadgeColors, BadgeSizes, BadgeThemeService } from './theme';

import { BaseComponent } from '../base.component';
import { Component, Input, OnInit } from '@angular/core';
import { FlowbiteBoolean } from '../../common/flowbite.theme';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgClass, RouterLink],
  selector: 'flowbite-badge',
  templateUrl: './badge.component.html',
})
export class BadgeComponent extends BaseComponent implements OnInit {
  @Input() color: keyof BadgeColors = 'blue';
  @Input() size: keyof BadgeSizes = 'xs';
  @Input() isIconOnly: keyof FlowbiteBoolean = 'disabled';
  @Input() isPill: keyof FlowbiteBoolean = 'disabled';
  @Input() href?: string;
  @Input() customStyle?: string;

  constructor(private badgeThemeService: BadgeThemeService) {
    super();
  }

  ngOnInit(): void {
    this.componentClass = this.badgeThemeService.getClasses({
      color: this.color,
      size: this.size,
      isIconOnly: this.isIconOnly,
      isPill: this.isPill,
      href: this.href,
      customStyle: this.customStyle,
    });
  }
}
