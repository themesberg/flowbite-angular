import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent as c_default } from './component/_default.component';
import { FlowbiteDefaultComponent as d_default } from './directive/_default.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Show the location of the current page in a hierarchical structure using the Tailwind CSS breadcrumb components
 *
 * @status:alert BREAKING CHANGES
 */
const breadcrumb: NgDocPage = {
  title: 'Breadcrumb',
  mdFile: ['./index.md', './component.md'],
  category: ComponentCategory,
  order: 4,
  demos: {
    c_default: c_default,
    d_default: d_default,
  },
};

export default breadcrumb;
