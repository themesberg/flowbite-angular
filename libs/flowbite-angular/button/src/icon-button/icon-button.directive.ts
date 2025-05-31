import { injectFlowbiteBaseButtonState } from '../base-button/base-button-state';
import { injectFlowbiteIconButtonConfig } from '../config/icon-button-config';
import { flowbiteIconButtonState, provideFlowbiteIconButtonState } from './icon-button-state';
import type { FlowbiteIconButtonTheme } from './theme';

import type { DeepPartial } from 'flowbite-angular';
import { mergeDeep } from 'flowbite-angular';
import { injectFlowbiteIconState } from 'flowbite-angular/icon';

import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `flowbite-icon[flowbiteIconButton]`,
  exportAs: 'flowbiteIconButton',
  hostDirectives: [],
  providers: [provideFlowbiteIconButtonState()],
  host: { '[class]': `theme().host.root` },
})
export class FlowbiteIconButtonDirective {
  protected readonly config = injectFlowbiteIconButtonConfig();
  protected readonly baseButtonState = injectFlowbiteBaseButtonState();
  protected readonly iconState = injectFlowbiteIconState();

  /**
   * @see {@link injectFlowbiteIconButtonConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteIconButtonTheme>>(this.config.customTheme);

  constructor() {
    this.iconState().flowbiteSize.set(this.baseButtonState().size());
  }

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base),
      },
    };
  });

  protected readonly state = flowbiteIconButtonState<FlowbiteIconButtonDirective>(this);
}
