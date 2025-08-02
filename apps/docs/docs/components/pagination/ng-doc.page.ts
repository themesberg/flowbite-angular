import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';

import {
  flowbitePaginationButtonTheme,
  flowbitePaginationFirstTheme,
  flowbitePaginationLastTheme,
  flowbitePaginationNextTheme,
  flowbitePaginationPreviousTheme,
  flowbitePaginationTheme,
} from 'flowbite-angular/pagination';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Pagination: NgDocPage = {
  title: 'Pagination',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
  data: {
    themes: [
      { title: 'Pagination button', content: toIndentedJson(flowbitePaginationButtonTheme) },
      { title: 'Pagination first', content: toIndentedJson(flowbitePaginationFirstTheme) },
      { title: 'Pagination last', content: toIndentedJson(flowbitePaginationLastTheme) },
      { title: 'Pagination next', content: toIndentedJson(flowbitePaginationNextTheme) },
      { title: 'Pagination previous', content: toIndentedJson(flowbitePaginationPreviousTheme) },
      { title: 'Pagination', content: toIndentedJson(flowbitePaginationTheme) },
    ] satisfies DocThemes,
  },
};

export default Pagination;
