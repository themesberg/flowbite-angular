import type { DeepPartial } from '../../core';
import { mergeDeep } from '../../core/utils/merge-theme';
import type { ButtonColors, ButtonSizes, FlowbiteButtonTheme } from './theme';
import { flowbiteButtonTheme } from './theme';

import { Component, computed, inject, model } from '@angular/core';
import { NgpButton } from 'ng-primitives/button';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    button[flowbite-button],
    a[flowbite-button]
  `,
  hostDirectives: [{ directive: NgpButton, inputs: ['disabled'] }],
  host: { '[class]': `theme().host` },
  template: `<ng-content />`,
})
export class ButtonComponent {
  ngpButton = inject(NgpButton, { optional: false, self: true });

  color = model<keyof ButtonColors>('primary');
  size = model<keyof ButtonSizes>('md');
  isPill = model<boolean>(false);
  customStyle = model<DeepPartial<FlowbiteButtonTheme>>({});

  theme = computed(() => {
    const mergedTheme = mergeDeep(flowbiteButtonTheme, this.customStyle());

    return {
      host: twMerge(
        mergedTheme.root.base,
        mergedTheme.root.focus,
        mergedTheme.root.disabled,
        mergedTheme.root.size[this.size()],
        mergedTheme.root.isPill[this.isPill() ? 'on' : 'off'],
        mergedTheme.root.color[this.color()]
      ),
    };
  });
}
