import type { DeepPartial } from '../../../common';
import type { FlowbiteBoolean } from '../../../common/type-definitions/flowbite.boolean';
import type { FlowbiteClass } from '../../../common/type-definitions/flowbite.class';
import { createTheme } from '../../../utils/theme/create-theme';
import type {
  FormFieldFloatingLabelTypes,
  FormFieldPrefixes,
  FormFieldSizes,
  FormFieldValidations,
} from '../form-field.theme';

export interface InputDirectiveProperties {
  size: keyof FormFieldSizes;
  disabled: keyof FlowbiteBoolean;
  validate?: keyof FormFieldValidations;
  floatingLabelType?: keyof FormFieldFloatingLabelTypes;
  prefix?: keyof FormFieldPrefixes;
  customStyle: DeepPartial<InputDirectiveBaseTheme>;
}

export interface InputDirectiveBaseTheme {
  base: string;
  default: string;
  size: FormFieldSizes;
  disabled: FlowbiteBoolean;
  validation: FormFieldValidations;
  prefix?: FormFieldPrefixes;
  floatingLabel: Record<keyof FormFieldFloatingLabelTypes, Omit<InputDirectiveBaseTheme, 'floatingLabel'>>;
}

export const inputDirectiveTheme: InputDirectiveBaseTheme = createTheme({
  base: 'border rounded-lg block w-full focus:outline-none',
  default:
    'focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white',
  disabled: {
    enabled:
      'cursor-not-allowed bg-gray-100 border-gray-300 text-gray-900 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:placeholder-gray-400',
    disabled: '',
  },
  prefix: {
    addon: 'rounded-none rounded-r-lg flex-1 min-w-0',
    icon: 'pl-10',
  },
  size: {
    sm: 'text-xs p-2',
    md: 'text-sm p-2.5',
    lg: 'text-md p-4',
  },
  validation: {
    success:
      'text-gray-900 border-green-600 dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:border-green-600 bg-green-50 dark:bg-gray-700',
    error:
      'text-gray-900 border-red-600 dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:border-red-600 bg-red-50 dark:bg-gray-700',
  },
  floatingLabel: {
    standard: {
      base: 'block w-full text-sm bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer',
      default:
        'text-gray-900 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600',
      disabled: {
        enabled:
          'text-gray-900 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600',
        disabled: '',
      },
      size: {
        sm: 'py-2 px-0',
        md: 'py-2.5 px-0',
        lg: '',
      },
      validation: {
        success:
          'text-gray-900 border-green-600 dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:border-green-600',
        error:
          'text-gray-900 border-red-600 dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:border-red-600',
      },
    },
    outline: {
      base: 'block w-full text-sm bg-transparent rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer',
      default:
        'text-gray-900 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600',
      disabled: {
        enabled:
          'text-gray-900 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600',
        disabled: '',
      },
      size: {
        sm: 'px-2.5 pb-1.5 pt-3',
        md: 'px-2.5 pb-2.5 pt-4',
        lg: '',
      },
      validation: {
        success:
          'text-gray-900 border-green-600 dark:text-white dark:border-green-500 dark:focus:border-green-500 focus:border-green-600',
        error:
          'text-gray-900 border-red-600 dark:text-white dark:border-red-500 dark:focus:border-red-500 focus:border-red-600',
      },
    },
    fill: {
      base: 'block rounded-t-lg w-full text-sm border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer',
      default:
        'text-gray-900 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600',
      disabled: {
        enabled:
          'text-gray-900 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600',
        disabled: '',
      },
      size: {
        sm: 'px-2.5 pb-1.5 pt-4',
        md: 'px-2.5 pb-2.5 pt-5',
        lg: '',
      },
      validation: {
        success:
          'text-gray-900 bg-gray-50 dark:bg-gray-700 border-green-600 dark:border-green-500 dark:text-white dark:focus:border-green-500 focus:border-green-600',
        error:
          'text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-red-500 border-red-600 focus:border-red-600 dark:focus-border-red-500',
      },
    },
  },
});

export type InputDirectiveClass = FlowbiteClass;

export const inputDirectiveClassInstance: InputDirectiveClass = {
  rootClass: '',
};
