import type { DocThemes } from '../../doc-theme.model';
import { toIndentedJson } from '../../doc-theme.model';
import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent } from './_default.component';
import { FlowbiteDisabledComponent } from './_disabled.component';
import { FlowbiteGroupComponent } from './_group.component';
import { FlowbiteIconComponent } from './_icon.component';
import { FlowbiteOutlineComponent } from './_outline.component';
import { FlowbitePillComponent } from './_pill.component';
import { FlowbiteSizeComponent } from './_size.component';

import { flowbiteButtonTheme } from 'flowbite-angular/button';

import type { NgDocPage } from '@ng-doc/core';

/**
 *
 */
const Button: NgDocPage = {
  title: 'Button',
  mdFile: './index.md',
  category: ComponentCategory,
  demos: {
    flowbiteDefaultComponent: FlowbiteDefaultComponent,
    flowbitePillComponent: FlowbitePillComponent,
    flowbiteOutlineComponent: FlowbiteOutlineComponent,
    flowbiteSizeComponent: FlowbiteSizeComponent,
    flowbiteIconComponent: FlowbiteIconComponent,
    flowbiteDisabledComponent: FlowbiteDisabledComponent,
    flowbiteGroupComponent: FlowbiteGroupComponent,
  },
  data: {
    themes: [{ title: 'Button', content: toIndentedJson(flowbiteButtonTheme) }] satisfies DocThemes,
  },
};

export default Button;
