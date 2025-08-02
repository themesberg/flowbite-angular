import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteBorderComponent } from './_border.component';
import { FlowbiteDefaultComponent } from './_default.component';
import { FlowbiteDismissComponent } from './_dismiss.component';
import { FlowbiteIconComponent } from './_icon.component';
import { FlowbiteLinkComponent } from './_link.component';

import {
  flowbiteBadgeButtonTheme,
  flowbiteBadgeLinkTheme,
  flowbiteBadgeTheme,
} from 'flowbite-angular/badge';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Badge: NgDocPage = {
  title: 'Badge',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbiteBorderComponent: FlowbiteBorderComponent,
    flowbiteLinkComponent: FlowbiteLinkComponent,
    flowbiteIconComponent: FlowbiteIconComponent,
    flowbiteDismissComponent: FlowbiteDismissComponent,
  },
  data: {
    themes: [
      { title: 'Badge', content: toIndentedJson(flowbiteBadgeTheme) },
      { title: 'Badge link', content: toIndentedJson(flowbiteBadgeLinkTheme) },
      { title: 'Badge button', content: toIndentedJson(flowbiteBadgeButtonTheme) },
    ] satisfies DocThemes,
  },
};

export default Badge;
