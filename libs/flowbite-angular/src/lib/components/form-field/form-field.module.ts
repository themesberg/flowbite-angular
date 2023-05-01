import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import {
  HelperDirective,
  InputDirective,
  LabelDirective,
  IconDirective,
  AddonDirective,
} from './directives';

const DECLARATIONS = [
  FormFieldComponent,
  InputDirective,
  LabelDirective,
  HelperDirective,
  IconDirective,
  AddonDirective,
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule],
  exports: [...DECLARATIONS],
})
export class FormFieldModule {}
