import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import {
  HintDirective,
  InputDirective,
  LabelDirective,
  PrefixDirective,
} from './directives';

const DECLARATIONS = [
  FormFieldComponent,
  InputDirective,
  LabelDirective,
  PrefixDirective,
  HintDirective,
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule],
  exports: [...DECLARATIONS],
})
export class FormFieldModule {}
