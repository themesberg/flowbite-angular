import type {
  DeepPartial,
  FlowbiteBoolean,
  FlowbiteClass,
  FlowbiteSizes,
  FlowbiteStandardColors,
  RouterLinkParameter,
  StandardThemeConfiguration,
  StandardThemeInput,
} from 'flowbite-angular';
import { createTheme } from 'flowbite-angular/utils';

//#region Component theme option
/**
 * Available colors for `BadgeComponent`
 */
export interface BadgeColors
  extends Pick<
    FlowbiteStandardColors,
    'primary' | 'dark' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink'
  > {
  [key: string]: StandardThemeConfiguration;
}

/**
 * Available sizes for `BadgeComponent`
 */
export interface BadgeSizes extends Pick<FlowbiteSizes, 'xs' | 'sm'> {
  [key: string]: string;
}
//#endregion

/**
 * Required properties for the class generation of `BadgeComponent`
 */
export interface BadgeProperties {
  color: keyof BadgeColors;
  hasBorder: keyof FlowbiteBoolean;
  size: keyof BadgeSizes;
  isIconOnly: keyof FlowbiteBoolean;
  isPill: keyof FlowbiteBoolean;
  link: RouterLinkParameter;
  standardThemeConfig: StandardThemeInput;
  customStyle: DeepPartial<BadgeTheme>;
}

/**
 * Theme definition for `BadgeComponent`
 */
export interface BadgeTheme {
  root: {
    base: string;
    hasBorder: FlowbiteBoolean;
    color: BadgeColors;
    size: BadgeSizes;
    isPill: FlowbiteBoolean;
    isIconOnly: FlowbiteBoolean;
    link: FlowbiteBoolean;
  };
  closeButton: {
    base: string;
    color: BadgeColors;
  };
}

/**
 * Default theme for `BadgeComponent`
 */
export const badgeTheme: BadgeTheme = createTheme({
  root: {
    base: 'flex h-fit items-center gap-1 font-semibold',
    color: {
      primary: {
        base: {
          light: 'bg-primary-100 text-primary-800 border-primary-300',
          dark: 'dark:bg-primary-700 dark:text-primary-300 dark:border-primary-800',
        },
        hover: {
          light: 'group-hover:bg-primary-200',
          dark: 'dark:group-hover:bg-primary-600',
        },
      },
      dark: {
        base: {
          light: 'bg-gray-100 text-gray-800 border-gray-300',
          dark: 'dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600',
        },
        hover: {
          light: 'group-hover:bg-gray-200',
          dark: 'dark:group-hover:bg-gray-600',
        },
      },
      blue: {
        base: {
          light: 'bg-blue-100 text-blue-800 border-blue-300',
          dark: 'dark:bg-blue-200 dark:text-blue-800 dark:border-blue-800',
        },
        hover: {
          light: 'group-hover:bg-blue-200',
          dark: 'dark:group-hover:bg-blue-300',
        },
      },
      red: {
        base: {
          light: 'bg-red-100 text-red-800 border-red-300',
          dark: 'dark:bg-red-200 dark:text-red-900 dark:border-red-800',
        },
        hover: {
          light: 'group-hover:bg-red-200',
          dark: 'dark:group-hover:bg-red-300',
        },
      },
      green: {
        base: {
          light: 'bg-green-100 text-green-800 border-green-300',
          dark: 'dark:bg-green-200 dark:text-green-900 dark:border-green-800',
        },
        hover: {
          light: 'group-hover:bg-green-200',
          dark: 'dark:group-hover:bg-green-300',
        },
      },
      yellow: {
        base: {
          light: 'bg-yellow-100 text-yellow-800 border-yellow-300',
          dark: 'dark:bg-yellow-200 dark:text-yellow-900 dark:border-yellow-800',
        },
        hover: {
          light: 'group-hover:bg-yellow-200',
          dark: 'dark:group-hover:bg-yellow-300',
        },
      },
      indigo: {
        base: {
          light: 'bg-indigo-100 text-indigo-800 border-indigo-300',
          dark: 'dark:bg-indigo-200 dark:text-indigo-900 dark:border-indigo-800',
        },
        hover: {
          light: 'group-hover:bg-indigo-200',
          dark: 'dark:group-hover:bg-indigo-300',
        },
      },
      purple: {
        base: {
          light: 'bg-purple-100 text-purple-800 border-purple-300',
          dark: 'dark:bg-purple-200 dark:text-purple-900 dark:border-purple-800',
        },
        hover: {
          light: 'group-hover:bg-purple-200',
          dark: 'dark:group-hover:bg-purple-300',
        },
      },
      pink: {
        base: {
          light: 'bg-pink-100 text-pink-800 border-pink-300',
          dark: 'dark:bg-pink-200 dark:text-pink-900 dark:border-pink-800',
        },
        hover: {
          light: 'group-hover:bg-pink-200',
          dark: 'dark:group-hover:bg-pink-300',
        },
      },
    },
    hasBorder: {
      enabled: 'border',
      disabled: 'border-0',
    },
    size: {
      xs: 'text-xs p-1',
      sm: 'text-sm p-1.5',
    },
    isPill: {
      enabled: 'rounded-full',
      disabled: 'rounded',
    },
    link: {
      enabled: 'group cursor-pointer',
      disabled: '',
    },
    isIconOnly: {
      enabled: '',
      disabled: 'px-2 py-0.5',
    },
  },
  closeButton: {
    base: 'ms-1 inline-flex items-center rounded-sm p-1 focus:ring-2',
    color: {
      primary: {
        base: {
          light: 'text-primary-500',
          dark: 'dark:text-primary-600',
        },
        hover: {
          light: 'hover:bg-primary-200',
          dark: 'dark:hover:bg-primary-300',
        },
      },
      dark: {
        base: {
          light: 'text-gray-500',
          dark: 'dark:text-gray-600',
        },
        hover: {
          light: 'hover:bg-gray-200',
          dark: 'dark:hover:bg-gray-300',
        },
      },
      blue: {
        base: {
          light: 'text-blue-500',
          dark: 'dark:text-blue-600',
        },
        hover: {
          light: 'hover:bg-blue-200',
          dark: 'dark:hover:bg-blue-300',
        },
      },
      red: {
        base: {
          light: 'text-red-500',
          dark: 'dark:text-red-600',
        },
        hover: {
          light: 'hover:bg-red-200',
          dark: 'dark:hover:bg-red-300',
        },
      },
      green: {
        base: {
          light: 'text-green-500',
          dark: 'dark:text-green-600',
        },
        hover: {
          light: 'hover:bg-green-200',
          dark: 'dark:hover:bg-green-300',
        },
      },
      yellow: {
        base: {
          light: 'text-yellow-500',
          dark: 'dark:text-yellow-600',
        },
        hover: {
          light: 'hover:bg-yellow-200',
          dark: 'dark:hover:bg-yellow-300',
        },
      },
      indigo: {
        base: {
          light: 'text-indigo-500',
          dark: 'dark:text-indigo-600',
        },
        hover: {
          light: 'hover:bg-indigo-200',
          dark: 'dark:hover:bg-indigo-300',
        },
      },
      purple: {
        base: {
          light: 'text-purple-500',
          dark: 'dark:text-purple-600',
        },
        hover: {
          light: 'hover:bg-purple-200',
          dark: 'dark:hover:bg-purple-300',
        },
      },
      pink: {
        base: {
          light: 'text-pink-500',
          dark: 'dark:text-pink-600',
        },
        hover: {
          light: 'hover:bg-pink-200',
          dark: 'dark:hover:bg-pink-300',
        },
      },
    },
  },
});

/**
 * Generated class definition for `BadgeComponent`
 */
export interface BadgeClass extends FlowbiteClass {
  closeButtonClass: string;
}
