import { DeepPartial } from '../../common';
import {
  FlowbiteBoolean,
  FlowbiteClass,
  FlowbiteSizes,
} from '../../common/flowbite.theme';
import { createTheme } from '../../utils/theme/create-theme';

//#region Component theme option
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
export interface FormFieldValidations {
  success: string;
  error: string;
}

export interface FormFieldPrefixes {
  addon: string;
  icon: string;
}
export interface FormFieldSizes
  extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string;
}
//#endregion

export interface FormFieldProperties {
  type: keyof FormFieldTypes;
  floatingLabelType?: keyof FormFieldFloatingLabelTypes;
  size: keyof FormFieldSizes;
  disabled: keyof FlowbiteBoolean;
  validate?: keyof FormFieldValidations;
  prefix?: keyof FormFieldPrefixes;
  customStyle: DeepPartial<FormFieldBaseTheme>;
}

export interface FormFieldBaseTheme {
  base: string;
}

export const formFieldTheme: FormFieldBaseTheme = createTheme({
  base: '',
});

export type FormFieldClass = FlowbiteClass;

export const FormFieldClassInstance: FormFieldClass = {
  rootClass: '',
};
