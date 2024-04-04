import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  standalone: true,
})
export abstract class BaseInputDirective implements OnInit {
  _classes: string[] = [];
  _class: string = '';

  @HostBinding('class') get classes() {
    if (this._class) return this._class;

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
