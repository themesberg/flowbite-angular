import { FlowbiteClass, FlowbiteColors } from '../../common/flowbite.theme';

//#region Component theme option
export type NavbarItemColors = Pick<FlowbiteColors, 'blue'> & {
  [key: string]: string;
};
//#endregion

export type NabvarItemProperties = {
  color: keyof NavbarItemColors;
  customStyle: Partial<NavbarItemBaseTheme>;
};

export type NavbarItemBaseTheme = {
  root: Partial<NavbarItemRootTheme>;
};

export type NavbarItemRootTheme = {
  base: string;
  color: Record<keyof NavbarItemColors, string>;
};

export const navbarItemTheme: NavbarItemBaseTheme = {
  root: {
    base: 'block py-2 px-3 rounded text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent',
    color: {
      blue: 'md:hover:text-blue-700 md:dark:hover:text-blue-500',
    },
  },
};

export type NavbarItemClass = FlowbiteClass & {
  navbarItemClass: string;
};

export const NavbarItemClassInstance: NavbarItemClass = {
  navbarItemClass: '',
  rootClass: '',
};
