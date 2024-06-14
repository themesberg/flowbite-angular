import {
  AccordionContentThemeService,
  AccordionPanelThemeService,
  AccordionThemeService,
  AccordionTitleThemeService,
  BadgeThemeService,
  BreadcrumbItemThemeService,
  BreadcrumbThemeService,
  ButtonThemeService,
  DarkThemeToggleThemeService,
  DropdownDividerThemeService,
  DropdownHeaderThemeService,
  DropdownItemThemeService,
  DropdownThemeService,
  FLOWBITE_ACCORDION_CONTENT_THEME_TOKEN,
  FLOWBITE_ACCORDION_PANEL_THEME_TOKEN,
  FLOWBITE_ACCORDION_THEME_TOKEN,
  FLOWBITE_ACCORDION_TITLE_THEME_TOKEN,
  FLOWBITE_BADGE_THEME_TOKEN,
  FLOWBITE_BREADCRUMB_ITEM_THEME_TOKEN,
  FLOWBITE_BREADCRUMB_THEME_TOKEN,
  FLOWBITE_BUTTON_THEME_TOKEN,
  FLOWBITE_DARK_THEME_TOGGLE_THEME_TOKEN,
  FLOWBITE_DROPDOWN_DIVIDER_THEME_TOKEN,
  FLOWBITE_DROPDOWN_HEADER_THEME_TOKEN,
  FLOWBITE_DROPDOWN_ITEM_THEME_TOKEN,
  FLOWBITE_DROPDOWN_THEME_TOKEN,
  FLOWBITE_INDICATOR_THEME_TOKEN,
  FLOWBITE_MODAL_BODY_THEME_TOKEN,
  FLOWBITE_MODAL_FOOTER_THEME_TOKEN,
  FLOWBITE_MODAL_HEADER_THEME_TOKEN,
  FLOWBITE_MODAL_THEME_TOKEN,
  FLOWBITE_NAVBAR_BRAND_THEME_TOKEN,
  FLOWBITE_NAVBAR_CONTENT_THEME_TOKEN,
  FLOWBITE_NAVBAR_ITEM_THEME_TOKEN,
  FLOWBITE_NAVBAR_THEME_TOKEN,
  FLOWBITE_NAVBAR_TOGGLE_THEME_TOKEN,
  FLOWBITE_SIDEBAR_ITEM_GROUP_THEME_TOKEN,
  FLOWBITE_SIDEBAR_ITEM_THEME_TOKEN,
  FLOWBITE_SIDEBAR_THEME_TOKEN,
  IndicatorThemeService,
  ModalBodyThemeService,
  ModalFooterThemeService,
  ModalHeaderThemeService,
  ModalThemeService,
  NavbarBrandThemeService,
  NavbarContentThemeService,
  NavbarItemThemeService,
  NavbarThemeService,
  NavbarToggleThemeService,
  SidebarItemGroupThemeService,
  SidebarItemThemeService,
  SidebarThemeService,
  accordionContentTheme,
  accordionTheme,
  accordionTitleTheme,
  alertTheme,
  badgeTheme,
  breadcrumbItemTheme,
  breadcrumbTheme,
  buttonTheme,
  darkThemeToggleTheme,
  dropdownDividerTheme,
  dropdownHeaderTheme,
  dropdownItemTheme,
  dropdownTheme,
  indicatorTheme,
  modalBodyTheme,
  modalFooterTheme,
  modalHeaderTheme,
  modalTheme,
  navbarBrandTheme,
  navbarContentTheme,
  navbarItemTheme,
  navbarTheme,
  navbarToogleTheme,
  sidebarItemGroupTheme,
  sidebarItemTheme,
  sidebarTheme,
} from '../components';
import {
  AlertThemeService,
  FLOWBITE_ALERT_THEME_TOKEN,
} from '../components/alert/alert.theme.service';
import { accordionPanelTheme } from '../components/accordion/accordion-panel.theme';

import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';

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
      provide: NavbarThemeService,
      useClass: NavbarThemeService,
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
      useValue: navbarToogleTheme,
    },
    {
      provide: FLOWBITE_NAVBAR_THEME_TOKEN,
      useValue: navbarTheme,
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
      provide: FLOWBITE_SIDEBAR_THEME_TOKEN,
      useValue: sidebarTheme,
    },
  ]);

  return makeEnvironmentProviders([serviceProviders, themeProviders]);
}
