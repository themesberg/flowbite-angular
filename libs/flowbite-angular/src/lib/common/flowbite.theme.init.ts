import {
  AccordionContentThemeService,
  AccordionPanelThemeService,
  AccordionThemeService,
  AccordionTitleThemeService,
  AlertThemeService,
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
  FLOWBITE_ALERT_THEME_TOKEN,
  FLOWBITE_BADGE_THEME_TOKEN,
  FLOWBITE_BREADCRUMB_ITEM_THEME_TOKEN,
  FLOWBITE_BREADCRUMB_THEME_TOKEN,
  FLOWBITE_BUTTON_THEME_TOKEN,
  FLOWBITE_DARK_THEME_TOGGLE_THEME_TOKEN,
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
  FLOWBITE_SIDEBAR_ITEM_GROUP_THEME_TOKEN,
  FLOWBITE_SIDEBAR_ITEM_THEME_TOKEN,
  FLOWBITE_SIDEBAR_THEME_TOKEN,
  FLOWBITE_SIDEBAR_TOGGLE_THEME_TOKEN,
  FormFieldThemeService,
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
  SidebarToggleThemeService,
  accordionContentTheme,
  accordionPanelTheme,
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
  formFieldTheme,
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
  sidebarToggleTheme,
} from '../components';
import { FLOWBITE_SETTINGS_ROUTER_DISPLAY_ERROR } from '.';

import {
  AddonDirectiveThemeService,
  FLOWBITE_DIRECTIVE_ADDON_THEME_TOKEN,
} from '../components/form-field/directives/addon.directive.theme.service';
import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import {
  FLOWBITE_DIRECTIVE_HELPER_THEME_TOKEN,
  HelperDirectiveThemeService,
} from '../components/form-field/directives/helper.directive.theme.service';
import {
  FLOWBITE_DIRECTIVE_ICON_THEME_TOKEN,
  IconDirectiveThemeService,
} from '../components/form-field/directives/icon.directive.theme.service';
import {
  FLOWBITE_DIRECTIVE_INPUT_THEME_TOKEN,
  InputDirectiveThemeService,
} from '../components/form-field/directives/input.directive.theme.service';
import {
  FLOWBITE_DIRECTIVE_LABEL_THEME_TOKEN,
  LabelDirectiveThemeService,
} from '../components/form-field/directives/label.directive.theme.service';
import { addonDirectiveTheme } from '../components/form-field/directives/addon.directive.theme';
import { helperDirectiveTheme } from '../components/form-field/directives/helper.directive.theme';
import { iconDirectiveTheme } from '../components/form-field/directives/icon.directive.theme';
import { inputDirectiveTheme } from '../components/form-field/directives/input.directive.theme';
import { labelDirectiveTheme } from '../components/form-field/directives/label.directive.theme';

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
      provide: SidebarItemGroupThemeService,
      useClass: SidebarItemGroupThemeService,
    },
    {
      provide: SidebarItemThemeService,
      useClass: SidebarItemThemeService,
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
      useClass: AddonDirectiveThemeService,
    },
    {
      provide: LabelDirectiveThemeService,
      useClass: LabelDirectiveThemeService,
    },
    {
      provide: HelperDirectiveThemeService,
      useClass: LabelDirectiveThemeService,
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
      provide: FLOWBITE_SIDEBAR_ITEM_GROUP_THEME_TOKEN,
      useValue: sidebarItemGroupTheme,
    },
    {
      provide: FLOWBITE_SIDEBAR_ITEM_THEME_TOKEN,
      useValue: sidebarItemTheme,
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

  return makeEnvironmentProviders([
    serviceProviders,
    themeProviders,
    settingsProviders,
  ]);
}
