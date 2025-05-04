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
  readonly flowbiteSize = input<keyof FlowbiteIconSizes>(this.flowbiteConfig.size, {
    // eslint-disable-next-line @angular-eslint/no-input-rename
    alias: 'size',
  });
  readonly flowbiteColor = input<keyof FlowbiteIconColors>(this.flowbiteConfig.color, {
    // eslint-disable-next-line @angular-eslint/no-input-rename
    alias: 'color',
  });
  readonly flowbiteStrokeWidth = input<keyof FlowbiteIconStrokeWidths>(
    this.flowbiteConfig.strokeWidth,
    {
      // eslint-disable-next-line @angular-eslint/no-input-rename
      alias: 'strokeWidth',
    }
  );
  /**
   * @see {@link injectFlowbiteIconConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteIconTheme>>(this.flowbiteConfig.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.flowbiteConfig.baseTheme, this.state.customTheme());

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
