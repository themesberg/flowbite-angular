import { injectFlowbiteIconConfig } from '../config/icon-config';
import { flowbiteIconState, provideFlowbiteIconState } from './icon-state';
import type {
  FlowbiteIconColors,
  FlowbiteIconSizes,
  FlowbiteIconStrokeWidths,
  FlowbiteIconTheme,
} from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `flowbite-icon`,
  exportAs: 'flowbiteIcon',
  hostDirectives: [],
  imports: [],
  providers: [provideFlowbiteIconState()],
  host: {
    '[class]': `theme().host.root`,
    role: 'img',
  },
  template: ``,
  styles: [
    `
      :host ::ng-deep svg {
        width: inherit;
        height: inherit;
        vertical-align: inherit;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteIconComponent extends NgIcon {
  protected readonly flowbiteConfig = injectFlowbiteIconConfig();

  /**
   * @see {@link injectFlowbiteIconConfig}
   */
  readonly flowbiteSize = input<keyof FlowbiteIconSizes>(this.flowbiteConfig.flowbiteSize);
  /**
   * @see {@link injectFlowbiteIconConfig}
   */
  readonly flowbiteColor = input<keyof FlowbiteIconColors>(this.flowbiteConfig.flowbiteColor);
  /**
   * @see {@link injectFlowbiteIconConfig}
   */
  readonly flowbiteStrokeWidth = input<keyof FlowbiteIconStrokeWidths>(
    this.flowbiteConfig.flowbiteStrokeWidth
  );
  /**
   * @see {@link injectFlowbiteIconConfig}
   */
  readonly flowbiteCustomTheme = input<DeepPartial<FlowbiteIconTheme>>(
    this.flowbiteConfig.flowbiteCustomTheme
  );

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.flowbiteConfig.baseTheme, this.state.flowbiteCustomTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.size[this.state.flowbiteSize()],
          mergedTheme.host.color[this.state.flowbiteColor()],
          mergedTheme.host.strokeWidth[this.state.flowbiteStrokeWidth()]
        ),
      },
    };
  });

  protected readonly state = flowbiteIconState<FlowbiteIconComponent>(this);
}
