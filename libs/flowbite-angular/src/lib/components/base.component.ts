import { Component } from '@angular/core';

@Component({
  template: '',
})
export abstract class BaseComponent {
  protected componentClass: string = '';
  protected contentClasses?: Record<string, string>;
}
