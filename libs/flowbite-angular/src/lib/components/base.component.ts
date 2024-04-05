import { Component, OnInit } from '@angular/core';

@Component({
  template: '',
})
export abstract class BaseComponent implements OnInit {
  protected componentClass: string = '';
  protected contentClasses?: Record<string, string>;

  public ngOnInit(): void {
    this.fetchClass();
  }

  protected abstract fetchClass(): void;
}
