import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';

import {
  flowbiteFormControlTheme,
  flowbiteFormFieldTheme,
  flowbiteHelperTheme,
  flowbiteLabelTheme,
} from 'flowbite-angular/form';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Input: NgDocPage = {
  title: 'Input field',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
  },
  data: {
    themes: [
      { title: 'Form control', content: toIndentedJson(flowbiteFormControlTheme) },
      { title: 'Form field', content: toIndentedJson(flowbiteFormFieldTheme) },
      { title: 'Helper', content: toIndentedJson(flowbiteHelperTheme) },
      { title: 'Label', content: toIndentedJson(flowbiteLabelTheme) },
    ] satisfies DocThemes,
  },
};

export default Input;
