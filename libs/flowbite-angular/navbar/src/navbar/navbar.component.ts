import { injectFlowbiteNavbarConfig } from '../config/navbar-config';
import { flowbiteNavbarState, provideFlowbiteNavbarState } from './navbar-state';
import type { FlowbiteNavbarColors, FlowbiteNavbarTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';

import type { BooleanInput } from '@angular/cdk/coercion';
import {
  booleanAttribute,
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
    nav[flowbiteNavbar]
  `,
  exportAs: 'flowbiteNavbar',
  hostDirectives: [],
  imports: [],
  providers: [provideFlowbiteNavbarState()],
  host: { '[class]': `theme().host.root` },
  template: `
    <div [class]="theme().container.root">
      <ng-content />
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteNavbar {
  protected readonly config = injectFlowbiteNavbarConfig();

  /**
   * @see {@link injectFlowbiteNavbarConfig}
   */
  readonly fixed = input<boolean, BooleanInput>(this.config.fixed, { transform: booleanAttribute });
  /**
   * @see {@link injectFlowbiteNavbarConfig}
   */
  readonly open = input<boolean, BooleanInput>(this.config.open, { transform: booleanAttribute });
  /**
   * @see {@link injectFlowbiteNavbarConfig}
   */
  readonly color = input<keyof FlowbiteNavbarColors>(this.config.color);
  /**
   * @see {@link injectFlowbiteNavbarConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteNavbarTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.fixed[this.state.fixed() ? 'on' : 'off'],
          mergedTheme.host.color[this.state.color()]
        ),
      },
      container: {
        root: twMerge(mergedTheme.container.base),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteNavbarState<FlowbiteNavbar>(this);

  /**
   * @internal
   */
  toggle(newState?: boolean): void {
    newState ??= !this.state.open();

    this.state.open.set(newState);
  }
}
