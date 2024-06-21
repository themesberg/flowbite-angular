import {
  FormFieldFloatingLabelTypes,
  FormFieldPrefixes,
  FormFieldSizes,
  FormFieldTypes,
  FormFieldValidations,
} from '../../components';

export interface FormFieldState {
  type: keyof FormFieldTypes;
  size: keyof FormFieldSizes;
  isDisabled: boolean;
  floatingLabelType?: keyof FormFieldFloatingLabelTypes;
  validate?: keyof FormFieldValidations;
  prefix?: keyof FormFieldPrefixes;
}
