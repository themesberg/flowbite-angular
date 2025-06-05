import { injectFlowbiteNavbarContentConfig } from '../config/navbar-content-config';
import { FlowbiteNavbar } from '../navbar/navbar.component';
import {
  flowbiteNavbarContentState,
  provideFlowbiteNavbarContentState,
} from './navbar-content-state';
import type { FlowbiteNavbarContentTheme } from './theme';

import { colorToTheme, mergeDeep, type DeepPartial } from 'flowbite-angular';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
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
export class FlowbiteNavbarContent {
  protected readonly config = injectFlowbiteNavbarContentConfig();

  /**
   * @see {@link injectFlowbiteNavbarContentConfig}
   */
  readonly navbar = input<FlowbiteNavbar>(inject(FlowbiteNavbar));
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
          mergedTheme.host.open[this.navbar().state.open() ? 'on' : 'off']
        ),
      },
      container: {
        root: twMerge(
          mergedTheme.container.base,
          colorToTheme(mergedTheme.container.color, this.navbar().state.color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteNavbarContentState<FlowbiteNavbarContent>(this);
}
