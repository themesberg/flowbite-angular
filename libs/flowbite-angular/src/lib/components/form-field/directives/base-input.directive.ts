import { FloatingLabelType, InputValidation } from '../form-field.properties';
import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({})
export abstract class BaseInputDirective implements OnInit {
  _classes: string[] = [];
  _validation: InputValidation | null = null;
  _floatingLabelType: FloatingLabelType | null = null;
  @HostBinding('class') get classes() {
    return [...this._classes];
  }
  @HostBinding('id') get id() {
    return this._id;
  }
  @Input() _id!: string;
  @Input() set validation(validation: InputValidation | null) {
    this._validation = validation;
    this.handleClasses();
  }
  @Input() set floatingLabelType(floatingLabelType: FloatingLabelType | null) {
    this._floatingLabelType = floatingLabelType;
    this.handleClasses();
  }

  ngOnInit(): void {
    this.handleClasses();
  }

  abstract handleClasses(): void;
}
