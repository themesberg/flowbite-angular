import { FLOWBITE_SETTINGS_ROUTER_DISPLAY_ERROR } from '.';
import {
  accordionContentTheme,
  AccordionContentThemeService,
  accordionPanelTheme,
  AccordionPanelThemeService,
  accordionTheme,
  AccordionThemeService,
  accordionTitleTheme,
  AccordionTitleThemeService,
  addonDirectiveTheme,
  AddonDirectiveThemeService,
  alertTheme,
  AlertThemeService,
  badgeTheme,
  BadgeThemeService,
  breadcrumbItemTheme,
  BreadcrumbItemThemeService,
  breadcrumbTheme,
  BreadcrumbThemeService,
  buttonTheme,
  ButtonThemeService,
  darkThemeToggleTheme,
  DarkThemeToggleThemeService,
  dropdownDividerTheme,
  DropdownDividerThemeService,
  dropdownHeaderTheme,
  DropdownHeaderThemeService,
  dropdownItemTheme,
  DropdownItemThemeService,
  dropdownTheme,
  DropdownThemeService,
  FLOWBITE_ACCORDION_CONTENT_THEME_TOKEN,
  FLOWBITE_ACCORDION_PANEL_THEME_TOKEN,
  FLOWBITE_ACCORDION_THEME_TOKEN,
  FLOWBITE_ACCORDION_TITLE_THEME_TOKEN,
  FLOWBITE_ALERT_THEME_TOKEN,
  FLOWBITE_BADGE_THEME_TOKEN,
  FLOWBITE_BREADCRUMB_ITEM_THEME_TOKEN,
  FLOWBITE_BREADCRUMB_THEME_TOKEN,
  FLOWBITE_BUTTON_THEME_TOKEN,
  FLOWBITE_DARK_THEME_TOGGLE_THEME_TOKEN,
  FLOWBITE_DIRECTIVE_ADDON_THEME_TOKEN,
  FLOWBITE_DIRECTIVE_HELPER_THEME_TOKEN,
  FLOWBITE_DIRECTIVE_ICON_THEME_TOKEN,
  FLOWBITE_DIRECTIVE_INPUT_THEME_TOKEN,
  FLOWBITE_DIRECTIVE_LABEL_THEME_TOKEN,
  FLOWBITE_DROPDOWN_DIVIDER_THEME_TOKEN,
  FLOWBITE_DROPDOWN_HEADER_THEME_TOKEN,
  FLOWBITE_DROPDOWN_ITEM_THEME_TOKEN,
  FLOWBITE_DROPDOWN_THEME_TOKEN,
  FLOWBITE_FORM_FIELD_THEME_TOKEN,
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
  FLOWBITE_SCROLL_TOP_THEME_TOKEN,
  FLOWBITE_SIDEBAR_ITEM_GROUP_THEME_TOKEN,
  FLOWBITE_SIDEBAR_ITEM_THEME_TOKEN,
  FLOWBITE_SIDEBAR_MENU_THEME_TOKEN,
  FLOWBITE_SIDEBAR_PAGE_CONTENT_THEME_TOKEN,
  FLOWBITE_SIDEBAR_THEME_TOKEN,
  FLOWBITE_SIDEBAR_TOGGLE_THEME_TOKEN,
  formFieldTheme,
  FormFieldThemeService,
  helperDirectiveTheme,
  HelperDirectiveThemeService,
  iconDirectiveTheme,
  IconDirectiveThemeService,
  indicatorTheme,
  IndicatorThemeService,
  inputDirectiveTheme,
  InputDirectiveThemeService,
  labelDirectiveTheme,
  LabelDirectiveThemeService,
  modalBodyTheme,
  ModalBodyThemeService,
  modalFooterTheme,
  ModalFooterThemeService,
  modalHeaderTheme,
  ModalHeaderThemeService,
  modalTheme,
  ModalThemeService,
  navbarBrandTheme,
  NavbarBrandThemeService,
  navbarContentTheme,
  NavbarContentThemeService,
  navbarItemTheme,
  NavbarItemThemeService,
  navbarTheme,
  NavbarThemeService,
  NavbarToggleThemeService,
  navbarToogleTheme,
  scrollTopTheme,
  ScrollTopThemeService,
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
} from '../components';

import type { EnvironmentProviders } from '@angular/core';
import { makeEnvironmentProviders } from '@angular/core';

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
      provide: FormFieldThemeService,
      useClass: FormFieldThemeService,
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
    {
      provide: IconDirectiveThemeService,
      useClass: IconDirectiveThemeService,
    },
    {
      provide: AddonDirectiveThemeService,
      useClass: AddonDirectiveThemeService,
    },
    {
      provide: InputDirectiveThemeService,
      useClass: InputDirectiveThemeService,
    },
    {
      provide: LabelDirectiveThemeService,
      useClass: LabelDirectiveThemeService,
    },
    {
      provide: HelperDirectiveThemeService,
      useClass: HelperDirectiveThemeService,
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
      provide: FLOWBITE_FORM_FIELD_THEME_TOKEN,
      useValue: formFieldTheme,
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
    {
      provide: FLOWBITE_DIRECTIVE_ADDON_THEME_TOKEN,
      useValue: addonDirectiveTheme,
    },
    {
      provide: FLOWBITE_DIRECTIVE_HELPER_THEME_TOKEN,
      useValue: helperDirectiveTheme,
    },
    {
      provide: FLOWBITE_DIRECTIVE_LABEL_THEME_TOKEN,
      useValue: labelDirectiveTheme,
    },
    {
      provide: FLOWBITE_DIRECTIVE_ICON_THEME_TOKEN,
      useValue: iconDirectiveTheme,
    },
    {
      provide: FLOWBITE_DIRECTIVE_INPUT_THEME_TOKEN,
      useValue: inputDirectiveTheme,
    },
  ]);

  const settingsProviders = makeEnvironmentProviders([
    {
      provide: FLOWBITE_SETTINGS_ROUTER_DISPLAY_ERROR,
      useValue: true,
    },
  ]);

  return makeEnvironmentProviders([serviceProviders, themeProviders, settingsProviders]);
}
