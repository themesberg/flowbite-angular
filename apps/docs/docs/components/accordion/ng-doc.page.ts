import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteAlwaysOpenComponent } from './_always-open.component';
import { FlowbiteColorComponent } from './_color.component';
import { FlowbiteDefaultComponent } from './_default.component';
import { FlowbiteFlushComponent } from './_flush.component';
import { FlowbiteIconComponent } from './_icon.component';

import {
  flowbiteAccordionContentTheme,
  flowbiteAccordionItemTheme,
  flowbiteAccordionTheme,
  flowbiteAccordionTitleTheme,
} from 'flowbite-angular/accordion';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Use the accordion component to show hidden information based on the collapse and expand state of the child elements
 */
const Accordion: NgDocPage = {
  title: 'Accordion',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbiteAlwaysOpenComponent: FlowbiteAlwaysOpenComponent,
    flowbiteColorComponent: FlowbiteColorComponent,
    flowbiteFlushComponent: FlowbiteFlushComponent,
    flowbiteIconComponent: FlowbiteIconComponent,
  },
  data: {
    themes: [
      { title: 'Accordion theme', content: toIndentedJson(flowbiteAccordionTheme) },
      { title: 'Accordion item content', content: toIndentedJson(flowbiteAccordionItemTheme) },
      { title: 'Accordion title theme', content: toIndentedJson(flowbiteAccordionTitleTheme) },
      { title: 'Accordion content', content: toIndentedJson(flowbiteAccordionContentTheme) },
    ] as DocThemes,
  },
};

export default Accordion;
