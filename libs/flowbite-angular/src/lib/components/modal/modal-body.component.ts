import * as properties from './modal-body.theme';
import { BaseComponent } from '../base.component';

import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-body',
  templateUrl: './modal-body.component.html',
})
export class ModalBodyComponent extends BaseComponent implements OnInit {
  @Input() customStyle: Partial<properties.ModalBodyBaseTheme> = {};

  ngOnInit(): void {
    const t = properties.getClasses({
      customStyle: this.customStyle,
    });

    this.componentClass = t;
  }
}
