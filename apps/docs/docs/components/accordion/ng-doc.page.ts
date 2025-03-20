import ComponentCategory from '../ng-doc.category';
import { FlowbiteAlwaysOpenComponent as c_always_open } from './component/_always-open.component';
import { FlowbiteArrowStyleComponent as c_arrow_style } from './component/_arrow-style.component';
import { FlowbiteColorOptionComponent as c_color_option } from './component/_color-option.component';
import { FlowbiteDefaultComponent as c_default } from './component/_default.component';
import { FlowbiteFlushComponent as c_flush } from './component/_flush.component';
import { FlowbiteAlwaysOpenComponent as d_always_open } from './directive/_always-open.component';
import { FlowbiteArrowStyleComponent as d_arrow_style } from './directive/_arrow-style.component';
import { FlowbiteColorOptionComponent as d_color_option } from './directive/_color-option.component';
import { FlowbiteDefaultComponent as d_default } from './directive/_default.component';
import { FlowbiteFlushComponent as d_flush } from './directive/_flush.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Use the accordion component to show hidden information based on the collapse and expand state of the child elements
 *
 * @status:alert BREAKING CHANGES
 */
const Accordion: NgDocPage = {
  title: 'Accordion',
  mdFile: ['./index.md', './component.md'],
  category: ComponentCategory,
  order: 1,
  demos: {
    c_default: c_default,
    c_always_open: c_always_open,
    c_color_option: c_color_option,
    c_arrow_style: c_arrow_style,
    c_flush: c_flush,
    d_default: d_default,
    d_always_open: d_always_open,
    d_color_option: d_color_option,
    d_arrow_style: d_arrow_style,
    d_flush: d_flush,
  },
};

export default Accordion;
