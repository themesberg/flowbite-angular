import { FlowbiteBoolean, FlowbiteSizes } from '../../common/flowbite.theme';

export interface FormFieldProperties {
  type: keyof FormFieldTypes;
  floatingLabelType?: keyof FormFieldFloatingLabelTypes;
  size: keyof FormFieldSizes;
  disabled: keyof FlowbiteBoolean;
  validate?: keyof FormFieldValidations;
  prefix?: keyof FormFieldPrefixes;
}

export interface FormFieldBaseTheme {
  root: Partial<FormFieldRootTheme>;
}

export interface FormFieldRootTheme {
  base: string;
  type: Record<keyof FormFieldTypes, string>;
  size: Record<keyof FormFieldSizes, string>;
  disable: Record<keyof FlowbiteBoolean, string>;
  validate: Record<keyof FormFieldValidations, string>;
  prefix: Record<keyof FormFieldPrefixes, string>;
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
  extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {}

export interface FormFieldValidations {
  success: string;
  error: string;
}

export interface FormFieldPrefixes {
  addon: string;
  icon: string;
}

export const FormFieldTheme: FormFieldBaseTheme = {
  root: {
    base: '',
  },
};
