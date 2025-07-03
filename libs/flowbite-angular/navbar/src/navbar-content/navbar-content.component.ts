import { injectFlowbiteNavbarContentConfig } from '../config/navbar-content-config';
import { injectFlowbiteNavbarState } from '../navbar/navbar-state';
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
export class NavbarContent {
  protected readonly config = injectFlowbiteNavbarContentConfig();
  protected readonly navbarState = injectFlowbiteNavbarState();

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
          mergedTheme.host.transition,
          mergedTheme.host.open[this.navbarState().open() ? 'on' : 'off']
        ),
      },
      container: {
        root: twMerge(
          mergedTheme.container.base,
          mergedTheme.container.transition,
          colorToTheme(mergedTheme.container.color, this.navbarState().color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteNavbarContentState<NavbarContent>(this);
}
