import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({})
export abstract class BaseInputDirective implements OnInit {
  _classes: string[] = [];
  @HostBinding('class') get classes() {
    return [...this._classes];
  }
  @HostBinding('id') get id() {
    return this._id;
  }
  @Input() _id!: string;

  ngOnInit(): void {
    this.handleClasses();
  }

  abstract handleClasses(): void;
}
