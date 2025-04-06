import { fb_it_button } from './i';
import type { ButtonColors, ButtonSizes, FlowbiteButtonTheme } from './theme';
import { flowbiteButtonTheme } from './theme';

import type { DeepPartial } from 'next-flowbite-angular';
import { mergeDeep } from 'next-flowbite-angular';

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
  readonly ngpButton = inject(NgpButton, { self: true });
  readonly baseTheme = inject(fb_it_button);

  readonly color = model<keyof ButtonColors>('primary');
  readonly size = model<keyof ButtonSizes>('md');
  readonly isPill = model<boolean>(false);
  readonly customTheme = model<DeepPartial<FlowbiteButtonTheme>>({});

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(flowbiteButtonTheme, this.customTheme());

    return {
      host: twMerge(
        mergedTheme.host.base,
        mergedTheme.host.focus,
        mergedTheme.host.disabled,
        mergedTheme.host.size[this.size()],
        mergedTheme.host.isPill[this.isPill() ? 'on' : 'off'],
        mergedTheme.host.color[this.color()]
      ),
    };
  });
}
