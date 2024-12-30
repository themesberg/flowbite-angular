import CustomizeCategory from '../ng-doc.category';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Customize flowbite-angular's component style by inheriting component.
 */
const OverrideBaseStyle: NgDocPage = {
  title: 'Inherit component',
  mdFile: './index.md',
  category: CustomizeCategory,
  order: 5,
};

export default OverrideBaseStyle;
