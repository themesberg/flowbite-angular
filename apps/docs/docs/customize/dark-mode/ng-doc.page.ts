import CustomizeCategory from '../ng-doc.category';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Add dark theme to your application.
 */
const darkMode: NgDocPage = {
  title: 'Dark mode',
  mdFile: './index.md',
  category: CustomizeCategory,
  order: 6,
};

export default darkMode;
