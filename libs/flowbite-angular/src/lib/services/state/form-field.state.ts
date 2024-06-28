import {
  FormFieldFloatingLabelTypes,
  FormFieldPrefixes,
  FormFieldSizes,
  FormFieldTypes,
  FormFieldValidations,
} from '../../components';
import { Injectable } from '@angular/core';
import { SignalStoreService } from '../signal-store.service';

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
