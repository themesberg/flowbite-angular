import {
  FlowbiteBoolean,
  FlowbiteColors,
  FlowbiteSizes,
} from '../../common/flowbite.theme';

export interface BadgeProperties {
  color: keyof BadgeColors;
  size: keyof BadgeSizes;
  isIconOnly: keyof FlowbiteBoolean;
  isPill: keyof FlowbiteBoolean;
  href?: string;
  customStyle?: string;
}

export interface BadgeColors
  extends Pick<
    FlowbiteColors,
    'blue' | 'dark' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink'
  > {}

export interface BadgeSizes extends Pick<FlowbiteSizes, 'xs' | 'sm'> {}

export class BadgeTheme {
  private static instance: BadgeTheme;

  private constructor() {}

  public static getInstance(): BadgeTheme {
    if (!BadgeTheme.instance) BadgeTheme.instance = new BadgeTheme();
    return BadgeTheme.instance;
  }

  public getClasses(properties: BadgeProperties): string {
    const output = this.baseClass.concat(
      ` ${this.colorClass[properties.color]}`,
      ` ${this.sizeClass[properties.size]}`,
      ` ${
        this.pillClass[
          properties.isPill == 'enabled' || properties.isIconOnly == 'enabled'
            ? 'enabled'
            : properties.isPill
        ]
      }`,
      ` ${this.iconClass[properties.isIconOnly]}`,
      ` ${this.hrefClass[properties.href ? 'enabled' : 'disabled']}`,
      ` ${properties.customStyle}`,
    );

    return output;
  }

  private baseClass = 'flex h-fit items-center gap-1 font-semibold';

  private colorClass: Record<keyof BadgeColors, string> = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300',
    dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600',
    red: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300',
    green:
      'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300',
    yellow:
      'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300',
    indigo:
      'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300',
    purple:
      'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300',
    pink: 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300',
  };

  private sizeClass: Record<keyof BadgeSizes, string> = {
    xs: 'text-xs p-1',
    sm: 'text-sm',
  };

  private pillClass: Record<keyof FlowbiteBoolean, string> = {
    enabled: 'rounded-full',
    disabled: 'rounded',
  };

  private iconClass: Record<keyof FlowbiteBoolean, string> = {
    enabled: 'p-1.5',
    disabled: 'px-2 py-0.5',
  };

  private hrefClass: Record<keyof FlowbiteBoolean, string> = {
    enabled: 'cursor-pointer',
    disabled: '',
  };
}
