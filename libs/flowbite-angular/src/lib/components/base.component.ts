import { Component, OnInit } from '@angular/core';

@Component({
  template: '',
})
export abstract class BaseComponent implements OnInit {
  protected contentClasses?: Record<string, string>;

  public ngOnInit(): void {
    this.fetchClass();
  }

  /**
   * Function to load component's classes
   */
  protected abstract fetchClass(): void;
}
