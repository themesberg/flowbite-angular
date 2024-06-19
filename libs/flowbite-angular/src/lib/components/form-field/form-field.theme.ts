import {
  FlowbiteBoolean,
  FlowbiteClass,
  FlowbiteSizes,
} from '../../common/flowbite.theme';

//#region Component theme option
export type FormFieldTypes = {
  email: string;
  password: string;
  file: string;
  number: string;
  search: string;
  tel: string;
  text: string;
  url: string;
};

export type FormFieldFloatingLabelTypes = {
  standard: string;
  fill: string;
  outline: string;
};
export type FormFieldValidations = {
  success: string;
  error: string;
};

export type FormFieldPrefixes = {
  addon: string;
  icon: string;
};
export type FormFieldSizes = Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> & {
  [key: string]: string;
};
//#endregion

export type FormFieldProperties = {
  type: keyof FormFieldTypes;
  floatingLabelType?: keyof FormFieldFloatingLabelTypes;
  size: keyof FormFieldSizes;
  disabled: keyof FlowbiteBoolean;
  validate?: keyof FormFieldValidations;
  prefix?: keyof FormFieldPrefixes;
  customStyle: Partial<FormFieldBaseTheme>;
};

export type FormFieldBaseTheme = {
  root: Partial<FormFieldRootTheme>;
};

export type FormFieldRootTheme = {
  base: string;
};

export const formFieldTheme: FormFieldBaseTheme = {
  root: {
    base: '',
  },
};

export type FormFieldClass = FlowbiteClass;

export const FormFieldClassInstance: FormFieldClass = {
  rootClass: '',
};
