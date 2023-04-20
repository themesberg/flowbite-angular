export type InputType =
  | 'email'
  | 'file'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';
export type InputSize = 'large' | 'default' | 'small';
export type InputValidation = 'success' | 'error';
export type FloatingLabelType = 'filled' | 'outlined' | 'standard';
export type InputPrefix = 'addon' | 'icon';

export const InputProperties = {
  floatingLabel: {
    filled: {
      base: [
        'block',
        'rounded-t-lg',
        'w-full',
        'text-sm',
        'border-0',
        'border-b-2',
        'appearance-none',
        'focus:outline-none',
        'focus:ring-0',
        'peer',
      ],
      default: [
        'text-gray-900',
        'bg-gray-50',
        'dark:bg-gray-700',
        'border-gray-300',
        'dark:text-white',
        'dark:border-gray-600',
        'dark:focus:border-blue-500',
        'focus:border-blue-600',
      ],
      size: {
        small: ['px-2.5', 'pb-1.5', 'pt-4'],
        default: ['px-2.5', 'pb-2.5', 'pt-5'],
        large: [],
      },
      disabled: [
        'text-gray-900',
        'bg-gray-50',
        'dark:bg-gray-700',
        'border-gray-300',
        'dark:text-white',
        'dark:border-gray-600',
        'dark:focus:border-blue-500',
        'focus:border-blue-600',
      ],
      validation: {
        success: [
          'text-gray-900',
          'bg-gray-50',
          'dark:bg-gray-700',
          'border-green-600',
          'dark:border-green-500',
          'dark:text-white',
          'dark:focus:border-green-500',
          'focus:border-green-600',
        ],
        error: [
          'text-gray-900',
          'bg-gray-50',
          'dark:bg-gray-700',
          'dark:text-white',
          'dark:border-red-500',
          'border-red-600',
          'focus:border-red-600',
          'dark:focus-border-red-500',
        ],
      },
    },
    outlined: {
      base: [
        'block',
        'w-full',
        'text-sm',
        'bg-transparent',
        'rounded-lg',
        'border-1',
        'appearance-none',
        'focus:outline-none',
        'focus:ring-0',
        'peer',
      ],
      default: [
        'text-gray-900',
        'border-gray-300',
        'dark:text-white',
        'dark:border-gray-600',
        'dark:focus:border-blue-500',
        'focus:border-blue-600',
      ],
      size: {
        small: ['px-2.5', 'pb-1.5', 'pt-3'],
        default: ['px-2.5', 'pb-2.5', 'pt-4'],
        large: [], // large classes missing in documentation
      },
      disabled: [
        'text-gray-900',
        'border-gray-300',
        'dark:text-white',
        'dark:border-gray-600',
        'dark:focus:border-blue-500',
        'focus:border-blue-600',
      ],
      validation: {
        success: [
          'text-gray-900',
          'border-green-600',
          'dark:text-white',
          'dark:border-green-500',
          'dark:focus:border-green-500',
          'focus:border-green-600',
        ],
        error: [
          'text-gray-900',
          'dark:text-white',
          'dark:border-red-500',
          'border-red-600',
          'dark:focus:border-red-500',
          'focus:border-red-600',
        ],
      },
    },
    standard: {
      base: [
        'block',
        'w-full',
        'text-sm',
        'bg-transparent',
        'border-0',
        'border-b-2',
        'appearance-none',
        'focus:outline-none',
        'focus:ring-0',
        'peer',
      ],
      default: [
        'text-gray-900',
        'border-gray-300',
        'dark:text-white',
        'dark:border-gray-600',
        'dark:focus:border-blue-500',
        'focus:border-blue-600',
      ],
      size: {
        small: ['py-2', 'px-0'],
        default: ['py-2.5', 'px-0'],
        large: [],
      },
      disabled: [
        'text-gray-900',
        'border-gray-300',
        'dark:text-white',
        'dark:border-gray-600',
        'dark:focus:border-blue-500',
        'focus:border-blue-600',
      ],
      validation: {
        success: [
          'text-gray-900',
          'border-green-600',
          'dark:text-white',
          'dark:border-green-500',
          'dark:focus:border-green-500',
          'focus:border-green-600',
        ],
        error: [
          'text-gray-900',
          'border-red-600',
          'dark:text-white',
          'dark:border-red-500',
          'dark:focus:border-red-500',
          'focus:border-red-600',
        ],
      },
    },
  },
  default: {
    base: ['border', 'rounded-lg', 'block', 'w-full'],
    defaultState: [
      'focus:ring-blue-500',
      'focus:border-blue-500',
      'dark:focus:ring-blue-500',
      'dark:focus:border-blue-500',
      'dark:bg-gray-700',
      'dark:border-gray-600',
      'dark:placeholder-gray-400',
      'dark:text-white',
    ],
    size: {
      small: ['text-xs', 'p-2'],
      default: ['text-sm', 'p-2.5'],
      large: ['text-md', 'p-4'],
    },
    disabled: [
      'cursor-not-allowed',
      'bg-gray-100',
      'border-gray-300',
      'text-gray-900',
      'dark:text-gray-400',
      'dark:bg-gray-700',
      'dark:border-gray-600',
      'dark:focus:ring-blue-500',
      'dark:focus:border-blue-500',
      'dark:placeholder-gray-400',
    ],
    validation: {
      success: [
        'bg-green-50',
        'border-green-500',
        'text-green-900',
        'placeholder-green-700',
        'dark:placeholder-green-500',
        'dark:text-green-400',
        'dark:border-green-500',
        'focus:ring-green-500',
        'focus:border-green-500',
      ],
      error: [
        'bg-red-50',
        'border-red-500',
        'text-red-900',
        'placeholder-red-700',
        'dark:placeholder-red-500',
        'dark:text-red-500',
        'dark:border-red-500',
        'focus:ring-red-500',
        'focus:border-red-500',
      ],
    },
  },
};

export const LabelProperties = {
  floatingLabel: {
    filled: {
      base: [
        'absolute',
        'text-sm',
        'duration-300',
        'transform',
        '-translate-y-4',
        'scale-75',
        'top-4',
        'z-10',
        'origin-[0]',
        'left-2.5',
        'peer-placeholder-shown:scale-100',
        'peer-placeholder-shown:translate-y-0',
        'peer-focus:scale-75',
        'peer-focus:-translate-y-4',
      ],
      default: [
        'text-gray-500',
        'dark:text-gray-400',
        'peer-focus:text-blue-600',
        'peer-focus:dark:text-blue-500',
      ],
      disabled: [
        'text-gray-400',
        'dark:text-gray-500',
        'peer-focus:text-blue-600',
        'peer-focus:dark:text-blue-500',
      ],
      validation: {
        success: ['text-green-600', 'dark:text-green-500'],
        error: ['text-red-600', 'dark:text-red-500'],
      },
    },
    outlined: {
      base: [
        'absolute',
        'text-sm',
        'duration-300',
        'transform',
        '-translate-y-4',
        'scale-75',
        'top-2',
        'z-10',
        'origin-[0]',
        'px-2',
        'peer-focus:px-2',
        'peer-placeholder-shown:scale-100',
        'peer-placeholder-shown:-translate-y-1/2',
        'peer-placeholder-shown:top-1/2',
        'peer-focus:top-2',
        'peer-focus:scale-75',
        'peer-focus:-translate-y-4',
        'left-1',
      ],
      default: [
        'text-gray-500',
        'dark:text-gray-400',
        'bg-white',
        'dark:bg-gray-900',
        'peer-focus:text-blue-600',
        'peer-focus:dark:text-blue-500',
      ],
      disabled: [
        'text-gray-400',
        'dark:text-gray-500',
        'bg-white',
        'dark:bg-gray-900',
        'peer-focus:text-blue-600',
        'peer-focus:dark:text-blue-500',
      ],
      validation: {
        success: [
          'text-green-600',
          'dark:text-green-500',
          'bg-white',
          'dark:bg-gray-900',
        ],
        error: [
          'text-red-600',
          'dark:text-red-500',
          'bg-white',
          'dark:bg-gray-900',
        ],
      },
    },
    standard: {
      base: [
        'absolute',
        'text-sm',
        'duration-300',
        'transform',
        '-translate-y-6',
        'scale-75',
        'top-3',
        '-z-10',
        'origin-[0]',
        'peer-focus:left-0',
        'peer-placeholder-shown:scale-100',
        'peer-placeholder-shown:translate-y-0',
        'peer-focus:scale-75',
        'peer-focus:-translate-y-6',
      ],
      default: [
        'text-gray-500',
        'dark:text-gray-400',
        'peer-focus:text-blue-600',
        'peer-focus:dark:text-blue-500',
      ],
      disabled: [
        'text-gray-400',
        'dark:text-gray-500',
        'peer-focus:text-blue-600',
        'peer-focus:dark:text-blue-500',
      ],
      validation: {
        success: ['text-green-600', 'dark:text-green-500'],
        error: ['text-red-600', 'dark:text-red-500'],
      },
    },
  },
  default: {
    base: ['block', 'mb-2', 'text-sm', 'font-medium'],
    default: ['text-gray-900', 'dark:text-white'],
    validation: {
      success: ['text-green-700', 'dark:text-green-500'],
      error: ['text-red-700', 'dark:text-red-500'],
    },
  },
};

export const HintProperties = {
  base: ['mt-2', 'text-xs', 'text-gray-500', 'dark:text-gray-400'],
  validation: {
    success: ['mt-2', 'text-xs', 'text-green-600', 'dark:text-green-400'],
    error: ['mt-2', 'text-xs', 'text-red-600', 'dark:text-red-400'],
  },
};

export const PrefixProperties = {
  icon: {},
  addon: {},
};
