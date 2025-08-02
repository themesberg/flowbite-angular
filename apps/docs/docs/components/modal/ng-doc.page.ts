import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';
import { FlowbiteOpenprogramaticallyComponent } from './_open-programatically.component';
import { FlowbitePositionComponent } from './_position.component';

import {
  flowbiteModalContentTheme,
  flowbiteModalFooterTheme,
  flowbiteModalHeaderTheme,
  flowbiteModalOverlayTheme,
  flowbiteModalTheme,
} from 'flowbite-angular/modal';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Modal: NgDocPage = {
  title: 'Modal',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbiteOpenprogramaticallyComponent: FlowbiteOpenprogramaticallyComponent,
    flowbitePositionComponent: FlowbitePositionComponent,
  },
  data: {
    themes: [
      { title: 'Modal content', content: toIndentedJson(flowbiteModalContentTheme) },
      { title: 'Modal footer', content: toIndentedJson(flowbiteModalFooterTheme) },
      { title: 'Modal header', content: toIndentedJson(flowbiteModalHeaderTheme) },
      { title: 'Modal overlay', content: toIndentedJson(flowbiteModalOverlayTheme) },
      { title: 'Modal', content: toIndentedJson(flowbiteModalTheme) },
    ] satisfies DocThemes,
  },
};

export default Modal;
