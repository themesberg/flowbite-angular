import ComponentCategory from '../ng-doc.category';
import { FlowbiteDefaultComponent as c_default } from './component/_default.component';
import { FlowbiteDisabledComponent as c_disabled } from './component/_disabled.component';
import { FlowbiteGradientDuotoneComponent as c_gradient_duotone } from './component/_gradient-duotone.component';
import { FlowbiteGradientMonochromeComponent as c_gradient_monochrome } from './component/_gradient-monochrome.component';
import { FlowbiteGradientOutlineComponent as c_gradient_outline } from './component/_gradient-outline.component';
import { FlowbiteIconOnlyComponent as c_icon_only } from './component/_icon-only.component';
import { FlowbiteIconComponent as c_icon } from './component/_icon.component';
import { FlowbiteLabelComponent as c_label } from './component/_label.component';
import { FlowbiteOutlineComponent as c_outline } from './component/_outline.component';
import { FlowbitePillComponent as c_pill } from './component/_pill.component';
import { FlowbiteSizeComponent as c_size } from './component/_size.component';
import { FlowbiteDefaultComponent as d_default } from './directive/_default.component';
import { FlowbiteDisabledComponent as d_disabled } from './directive/_disabled.component';
import { FlowbiteGradientDuotoneComponent as d_gradient_duotone } from './directive/_gradient-duotone.component';
import { FlowbiteGradientMonochromeComponent as d_gradient_monochrome } from './directive/_gradient-monochrome.component';
import { FlowbiteGradientOutlineComponent as d_gradient_outline } from './directive/_gradient-outline.component';
import { FlowbiteIconOnlyComponent as d_icon_only } from './directive/_icon-only.component';
import { FlowbiteIconComponent as d_icon } from './directive/_icon.component';
import { FlowbiteLabelComponent as d_label } from './directive/_label.component';
import { FlowbiteOutlineComponent as d_outline } from './directive/_outline.component';
import { FlowbitePillComponent as d_pill } from './directive/_pill.component';
import { FlowbiteSizeComponent as d_size } from './directive/_size.component';

import type { NgDocPage } from '@ng-doc/core';

/**
 * Use the button component inside forms, as links with support for multiple styles, colors, sizes, gradients, and shadows
 *
 * @status:alert BREAKING CHANGES
 */
const button: NgDocPage = {
  title: 'Button',
  mdFile: ['./index.md', './component.md'],
  category: ComponentCategory,
  order: 5,
  demos: {
    c_default: c_default,
    c_disabled: c_disabled,
    c_gradient_duotone: c_gradient_duotone,
    c_gradient_monochrome: c_gradient_monochrome,
    c_gradient_outline: c_gradient_outline,
    c_icon_only: c_icon_only,
    c_icon: c_icon,
    c_label: c_label,
    c_outline: c_outline,
    c_pill: c_pill,
    c_size: c_size,
    d_default: d_default,
    d_disabled: d_disabled,
    d_gradient_duotone: d_gradient_duotone,
    d_gradient_monochrome: d_gradient_monochrome,
    d_gradient_outline: d_gradient_outline,
    d_icon_only: d_icon_only,
    d_icon: d_icon,
    d_label: d_label,
    d_outline: d_outline,
    d_pill: d_pill,
    d_size: d_size,
  },
};

export default button;
