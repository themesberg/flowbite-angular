import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';

import {
  flowbiteBreadcrumbContentTheme,
  flowbiteBreadcrumbItemTheme,
  flowbiteBreadcrumbTheme,
} from 'flowbite-angular/breadcrumb';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Breadcrumb: NgDocPage = {
  title: 'Breadcrumb',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
  data: {
    themes: [
      { title: 'Breadcrumb', content: toIndentedJson(flowbiteBreadcrumbTheme) },
      { title: 'Breadcrumb content', content: toIndentedJson(flowbiteBreadcrumbContentTheme) },
      { title: 'Breadcrumb item', content: toIndentedJson(flowbiteBreadcrumbItemTheme) },
    ] as DocThemes,
  },
};

export default Breadcrumb;
