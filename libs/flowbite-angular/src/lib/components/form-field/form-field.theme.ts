import { FlowbiteBoolean, FlowbiteSizes } from '../../common/flowbite.theme';

export interface FormFieldProperties {
  type: keyof FormFieldTypes;
  floatingLabelType?: keyof FormFieldFloatingLabelTypes;
  size: keyof FormFieldSizes;
  disabled: keyof FlowbiteBoolean;
  validate?: keyof FormFieldValidations;
  prefix?: keyof FormFieldPrefixes;
}

export interface FormFieldTypes {
  email: string;
  password: string;
  file: string;
  number: string;
  search: string;
  tel: string;
  text: string;
  url: string;
}

export interface FormFieldFloatingLabelTypes {
  standard: string;
  fill: string;
  outline: string;
}

export interface FormFieldSizes
  extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}

export interface FormFieldValidations {
  success: string;
  error: string;
}

export interface FormFieldPrefixes {
  addon: string;
  icon: string;
}
