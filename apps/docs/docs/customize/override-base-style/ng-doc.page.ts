import CustomizeCategory from '../ng-doc.category';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Customize flowbite-angular's components by override their default style.
 */
const OverrideBaseStyle: NgDocPage = {
  title: 'Override base style',
  mdFile: './index.md',
  category: CustomizeCategory,
  order: 2,
};

export default OverrideBaseStyle;
