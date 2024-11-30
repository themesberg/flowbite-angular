import {
  accordionContentDefaultValueProvider,
  accordionContentTheme,
  AccordionContentThemeService,
  accordionDefaultValueProvider,
  accordionPanelDefaultValueProvider,
  accordionPanelTheme,
  AccordionPanelThemeService,
  accordionTheme,
  AccordionThemeService,
  accordionTitleDefaultValueProvider,
  accordionTitleTheme,
  AccordionTitleThemeService,
  FLOWBITE_ACCORDION_CONTENT_THEME_TOKEN,
  FLOWBITE_ACCORDION_PANEL_THEME_TOKEN,
  FLOWBITE_ACCORDION_THEME_TOKEN,
  FLOWBITE_ACCORDION_TITLE_THEME_TOKEN,
} from 'flowbite-angular/accordion';
import {
  alertDefaultValueProvider,
  alertTheme,
  AlertThemeService,
  FLOWBITE_ALERT_THEME_TOKEN,
} from 'flowbite-angular/alert';
import {
  badgeDefaultValueProvider,
  badgeTheme,
  BadgeThemeService,
  FLOWBITE_BADGE_THEME_TOKEN,
} from 'flowbite-angular/badge';
import {
  breadcrumbDefaultValueProvider,
  breadcrumbItemDefaultValueProvider,
  breadcrumbItemTheme,
  BreadcrumbItemThemeService,
  breadcrumbTheme,
  BreadcrumbThemeService,
  FLOWBITE_BREADCRUMB_ITEM_THEME_TOKEN,
  FLOWBITE_BREADCRUMB_THEME_TOKEN,
} from 'flowbite-angular/breadcrumb';
import {
  buttonDefaultValueProvider,
  buttonTheme,
  ButtonThemeService,
  FLOWBITE_BUTTON_THEME_TOKEN,
} from 'flowbite-angular/button';
import {
  darkThemeToggleDefaultValueProvider,
  darkThemeToggleTheme,
  DarkThemeToggleThemeService,
  FLOWBITE_DARK_THEME_TOGGLE_THEME_TOKEN,
} from 'flowbite-angular/dark-theme-toggle';
import {
  dropdownDividerTheme,
  DropdownDividerThemeService,
  dropdownHeaderTheme,
  DropdownHeaderThemeService,
  dropdownItemTheme,
  DropdownItemThemeService,
  dropdownTheme,
  DropdownThemeService,
  FLOWBITE_DROPDOWN_DIVIDER_THEME_TOKEN,
  FLOWBITE_DROPDOWN_HEADER_THEME_TOKEN,
  FLOWBITE_DROPDOWN_ITEM_THEME_TOKEN,
  FLOWBITE_DROPDOWN_THEME_TOKEN,
} from 'flowbite-angular/dropdown';
import {
  FLOWBITE_INDICATOR_THEME_TOKEN,
  indicatorTheme,
  IndicatorThemeService,
} from 'flowbite-angular/indicator';
import {
  FLOWBITE_MODAL_BODY_THEME_TOKEN,
  FLOWBITE_MODAL_FOOTER_THEME_TOKEN,
  FLOWBITE_MODAL_HEADER_THEME_TOKEN,
  FLOWBITE_MODAL_THEME_TOKEN,
  modalBodyTheme,
  ModalBodyThemeService,
  modalFooterTheme,
  ModalFooterThemeService,
  modalHeaderTheme,
  ModalHeaderThemeService,
  modalTheme,
  ModalThemeService,
} from 'flowbite-angular/modal';
import {
  FLOWBITE_NAVBAR_BRAND_THEME_TOKEN,
  FLOWBITE_NAVBAR_CONTENT_THEME_TOKEN,
  FLOWBITE_NAVBAR_ICON_BUTTON_THEME_TOKEN,
  FLOWBITE_NAVBAR_ITEM_THEME_TOKEN,
  FLOWBITE_NAVBAR_THEME_TOKEN,
  FLOWBITE_NAVBAR_TOGGLE_THEME_TOKEN,
  navbarBrandTheme,
  NavbarBrandThemeService,
  navbarContentTheme,
  NavbarContentThemeService,
  navbarIconButtonTheme,
  NavbarIconButtonThemeService,
  navbarItemTheme,
  NavbarItemThemeService,
  navbarTheme,
  NavbarThemeService,
  navbarToggleTheme,
  NavbarToggleThemeService,
} from 'flowbite-angular/navbar';
import {
  FLOWBITE_SCROLL_TOP_THEME_TOKEN,
  scrollTopTheme,
  ScrollTopThemeService,
} from 'flowbite-angular/scroll-top';
import {
  FLOWBITE_SIDEBAR_ITEM_GROUP_THEME_TOKEN,
  FLOWBITE_SIDEBAR_ITEM_THEME_TOKEN,
  FLOWBITE_SIDEBAR_MENU_THEME_TOKEN,
  FLOWBITE_SIDEBAR_PAGE_CONTENT_THEME_TOKEN,
  FLOWBITE_SIDEBAR_THEME_TOKEN,
  FLOWBITE_SIDEBAR_TOGGLE_THEME_TOKEN,
  sidebarItemGroupTheme,
  SidebarItemGroupThemeService,
  sidebarItemTheme,
  SidebarItemThemeService,
  sidebarMenuTheme,
  SidebarMenuThemeService,
  sidebarPageContentTheme,
  SidebarPageContentThemeService,
  sidebarTheme,
  SidebarThemeService,
  sidebarToggleTheme,
  SidebarToggleThemeService,
} from 'flowbite-angular/sidebar';

import type { EnvironmentProviders } from '@angular/core';
import { makeEnvironmentProviders } from '@angular/core';

/**
 * This function define base implementation of injected services and value used all over flowbite-angular library.
 *
 * @returns Return the configuration for flowbite-angular ThemeServices, themeProviders and settingsProviders.
 *
 * @see `EnvironmentProviders`
 */
export function initFlowbite(): EnvironmentProviders {
  const serviceProviders = makeEnvironmentProviders([
    {
      provide: AccordionContentThemeService,
      useClass: AccordionContentThemeService,
    },
    {
      provide: AccordionPanelThemeService,
      useClass: AccordionPanelThemeService,
    },
    {
      provide: AccordionTitleThemeService,
      useClass: AccordionTitleThemeService,
    },
    {
      provide: AccordionThemeService,
      useClass: AccordionThemeService,
    },
    {
      provide: AlertThemeService,
      useClass: AlertThemeService,
    },
    {
      provide: BadgeThemeService,
      useClass: BadgeThemeService,
    },
    {
      provide: BreadcrumbItemThemeService,
      useClass: BreadcrumbItemThemeService,
    },
    {
      provide: BreadcrumbThemeService,
      useClass: BreadcrumbThemeService,
    },
    {
      provide: ButtonThemeService,
      useClass: ButtonThemeService,
    },
    {
      provide: DarkThemeToggleThemeService,
      useClass: DarkThemeToggleThemeService,
    },
    {
      provide: DropdownDividerThemeService,
      useClass: DropdownDividerThemeService,
    },
    {
      provide: DropdownHeaderThemeService,
      useClass: DropdownHeaderThemeService,
    },
    {
      provide: DropdownItemThemeService,
      useClass: DropdownItemThemeService,
    },
    {
      provide: DropdownThemeService,
      useClass: DropdownThemeService,
    },
    {
      provide: IndicatorThemeService,
      useClass: IndicatorThemeService,
    },
    {
      provide: ModalBodyThemeService,
      useClass: ModalBodyThemeService,
    },
    {
      provide: ModalFooterThemeService,
      useClass: ModalFooterThemeService,
    },
    {
      provide: ModalHeaderThemeService,
      useClass: ModalHeaderThemeService,
    },
    {
      provide: ModalThemeService,
      useClass: ModalThemeService,
    },
    {
      provide: NavbarBrandThemeService,
      useClass: NavbarBrandThemeService,
    },
    {
      provide: NavbarContentThemeService,
      useClass: NavbarContentThemeService,
    },
    {
      provide: NavbarItemThemeService,
      useClass: NavbarItemThemeService,
    },
    {
      provide: NavbarToggleThemeService,
      useClass: NavbarToggleThemeService,
    },
    {
      provide: NavbarIconButtonThemeService,
      useClass: NavbarIconButtonThemeService,
    },
    {
      provide: NavbarThemeService,
      useClass: NavbarThemeService,
    },
    {
      provide: ScrollTopThemeService,
      useClass: ScrollTopThemeService,
    },
    {
      provide: SidebarItemGroupThemeService,
      useClass: SidebarItemGroupThemeService,
    },
    {
      provide: SidebarItemThemeService,
      useClass: SidebarItemThemeService,
    },
    {
      provide: SidebarMenuThemeService,
      useClass: SidebarMenuThemeService,
    },
    {
      provide: SidebarPageContentThemeService,
      useClass: SidebarPageContentThemeService,
    },
    {
      provide: SidebarToggleThemeService,
      useClass: SidebarToggleThemeService,
    },
    {
      provide: SidebarThemeService,
      useClass: SidebarThemeService,
    },
  ]);

  const themeProviders = makeEnvironmentProviders([
    {
      provide: FLOWBITE_ACCORDION_CONTENT_THEME_TOKEN,
      useValue: accordionContentTheme,
    },
    {
      provide: FLOWBITE_ACCORDION_PANEL_THEME_TOKEN,
      useValue: accordionPanelTheme,
    },
    {
      provide: FLOWBITE_ACCORDION_TITLE_THEME_TOKEN,
      useValue: accordionTitleTheme,
    },
    { provide: FLOWBITE_ACCORDION_THEME_TOKEN, useValue: accordionTheme },
    {
      provide: FLOWBITE_ALERT_THEME_TOKEN,
      useValue: alertTheme,
    },
    {
      provide: FLOWBITE_BADGE_THEME_TOKEN,
      useValue: badgeTheme,
    },
    {
      provide: FLOWBITE_BREADCRUMB_ITEM_THEME_TOKEN,
      useValue: breadcrumbItemTheme,
    },
    {
      provide: FLOWBITE_BREADCRUMB_THEME_TOKEN,
      useValue: breadcrumbTheme,
    },
    {
      provide: FLOWBITE_BUTTON_THEME_TOKEN,
      useValue: buttonTheme,
    },
    {
      provide: FLOWBITE_DARK_THEME_TOGGLE_THEME_TOKEN,
      useValue: darkThemeToggleTheme,
    },
    {
      provide: FLOWBITE_DROPDOWN_DIVIDER_THEME_TOKEN,
      useValue: dropdownDividerTheme,
    },
    {
      provide: FLOWBITE_DROPDOWN_HEADER_THEME_TOKEN,
      useValue: dropdownHeaderTheme,
    },
    {
      provide: FLOWBITE_DROPDOWN_ITEM_THEME_TOKEN,
      useValue: dropdownItemTheme,
    },
    {
      provide: FLOWBITE_DROPDOWN_THEME_TOKEN,
      useValue: dropdownTheme,
    },
    {
      provide: FLOWBITE_INDICATOR_THEME_TOKEN,
      useValue: indicatorTheme,
    },
    {
      provide: FLOWBITE_MODAL_BODY_THEME_TOKEN,
      useValue: modalBodyTheme,
    },
    {
      provide: FLOWBITE_MODAL_FOOTER_THEME_TOKEN,
      useValue: modalFooterTheme,
    },
    {
      provide: FLOWBITE_MODAL_HEADER_THEME_TOKEN,
      useValue: modalHeaderTheme,
    },
    {
      provide: FLOWBITE_MODAL_THEME_TOKEN,
      useValue: modalTheme,
    },
    {
      provide: FLOWBITE_NAVBAR_BRAND_THEME_TOKEN,
      useValue: navbarBrandTheme,
    },
    {
      provide: FLOWBITE_NAVBAR_CONTENT_THEME_TOKEN,
      useValue: navbarContentTheme,
    },
    {
      provide: FLOWBITE_NAVBAR_ITEM_THEME_TOKEN,
      useValue: navbarItemTheme,
    },
    {
      provide: FLOWBITE_NAVBAR_TOGGLE_THEME_TOKEN,
      useValue: navbarToggleTheme,
    },
    {
      provide: FLOWBITE_NAVBAR_ICON_BUTTON_THEME_TOKEN,
      useValue: navbarIconButtonTheme,
    },
    {
      provide: FLOWBITE_NAVBAR_THEME_TOKEN,
      useValue: navbarTheme,
    },
    {
      provide: FLOWBITE_SCROLL_TOP_THEME_TOKEN,
      useValue: scrollTopTheme,
    },
    {
      provide: FLOWBITE_SIDEBAR_ITEM_GROUP_THEME_TOKEN,
      useValue: sidebarItemGroupTheme,
    },
    {
      provide: FLOWBITE_SIDEBAR_ITEM_THEME_TOKEN,
      useValue: sidebarItemTheme,
    },
    {
      provide: FLOWBITE_SIDEBAR_MENU_THEME_TOKEN,
      useValue: sidebarMenuTheme,
    },
    {
      provide: FLOWBITE_SIDEBAR_PAGE_CONTENT_THEME_TOKEN,
      useValue: sidebarPageContentTheme,
    },
    {
      provide: FLOWBITE_SIDEBAR_TOGGLE_THEME_TOKEN,
      useValue: sidebarToggleTheme,
    },
    {
      provide: FLOWBITE_SIDEBAR_THEME_TOKEN,
      useValue: sidebarTheme,
    },
  ]);

  const defaultValueProvider = makeEnvironmentProviders([
    accordionDefaultValueProvider,
    accordionPanelDefaultValueProvider,
    accordionTitleDefaultValueProvider,
    accordionContentDefaultValueProvider,
    alertDefaultValueProvider,
    badgeDefaultValueProvider,
    breadcrumbDefaultValueProvider,
    breadcrumbItemDefaultValueProvider,
    buttonDefaultValueProvider,
    darkThemeToggleDefaultValueProvider,
  ]);

  return makeEnvironmentProviders([serviceProviders, themeProviders, defaultValueProvider]);
}
