import { injectFlowbiteNavbarContentConfig } from '../config/navbar-content-config';
import { injectFlowbiteNavbarState } from '../navbar/navbar-state';
import {
  flowbiteNavbarContentState,
  provideFlowbiteNavbarContentState,
} from './navbar-content-state';
import type { FlowbiteNavbarContentTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    div[flowbiteNavbarContent]
  `,
  exportAs: 'flowbiteNavbarContent',
  hostDirectives: [],
  imports: [],
  providers: [provideFlowbiteNavbarContentState()],
  host: { '[class]': `theme().host.root` },
  template: `
    <ul [class]="theme().container.root">
      <ng-content />
    </ul>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteNavbarContentComponent {
  protected readonly config = injectFlowbiteNavbarContentConfig();
  protected readonly flowbiteNavbarState = injectFlowbiteNavbarState();

  /**
   * @see {@link injectFlowbiteNavbarContentConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteNavbarContentTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.open[this.flowbiteNavbarState().open() ? 'on' : 'off']
        ),
      },
      container: {
        root: twMerge(
          mergedTheme.container.base,
          mergedTheme.container.color[this.flowbiteNavbarState().color()]
        ),
      },
    };
  });

  protected readonly state = flowbiteNavbarContentState<FlowbiteNavbarContentComponent>(this);
}
