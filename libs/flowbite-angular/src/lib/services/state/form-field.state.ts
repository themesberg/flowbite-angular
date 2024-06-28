import type {
  FormFieldFloatingLabelTypes,
  FormFieldPrefixes,
  FormFieldSizes,
  FormFieldTypes,
  FormFieldValidations,
} from '../../components';
import { SignalStoreService } from '../signal-store.service';

import { Injectable } from '@angular/core';

export interface FormFieldState {
  type: keyof FormFieldTypes;
  size: keyof FormFieldSizes;
  isDisabled: boolean;
  floatingLabelType?: keyof FormFieldFloatingLabelTypes;
  validate?: keyof FormFieldValidations;
  prefix?: keyof FormFieldPrefixes;
}

@Injectable()
export class FormFieldStateService extends SignalStoreService<FormFieldState> {}
