import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteBorderAccentComponent } from './_border-accent.component';
import { FlowbiteBorderComponent } from './_border.component';
import { FlowbiteDefaultComponent } from './_default.component';
import { FlowbiteDismissableComponent } from './_dismissable.component';
import { FlowbiteIconComponent } from './_icon.component';

import {
  flowbiteAlertButtonTheme,
  flowbiteAlertContentTheme,
  flowbiteAlertTheme,
} from 'flowbite-angular/alert';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Alert: NgDocPage = {
  title: 'Alert',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbiteIconComponent: FlowbiteIconComponent,
    flowbiteBorderComponent: FlowbiteBorderComponent,
    flowbiteBorderAccentComponent: FlowbiteBorderAccentComponent,
    flowbiteDismissableComponent: FlowbiteDismissableComponent,
  },
  data: {
    themes: [
      { title: 'Alert theme', content: toIndentedJson(flowbiteAlertTheme) },
      { title: 'Alert content theme', content: toIndentedJson(flowbiteAlertContentTheme) },
      { title: 'Alert button theme', content: toIndentedJson(flowbiteAlertButtonTheme) },
    ] satisfies DocThemes,
  },
};

export default Alert;
