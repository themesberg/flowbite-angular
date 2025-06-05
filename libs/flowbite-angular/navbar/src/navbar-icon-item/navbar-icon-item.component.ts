import { injectFlowbiteNavbarIconItemConfig } from '../config/navbar-icon-item-config';
import { FlowbiteNavbar } from '../navbar/navbar.component';
import {
  flowbiteNavbarIconItemState,
  provideFlowbiteNavbarIconItemState,
} from './navbar-icon-item-state';
import type { FlowbiteNavbarIconItemTheme } from './theme';

import { colorToTheme, mergeDeep, type DeepPartial } from 'flowbite-angular';
import { FlowbiteBaseButton, injectFlowbiteBaseButtonState } from 'flowbite-angular/button';
import { FlowbiteIcon } from 'flowbite-angular/icon';

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import type { IconType } from '@ng-icons/core';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    button[flowbiteNavbarIconItem],
    a[flowbiteNavbarIconItem],
  `,
  exportAs: 'flowbiteNavbarIconItem',
  hostDirectives: [
    {
      directive: FlowbiteBaseButton,
      inputs: ['color:color', 'size:size', 'pill:pill', 'outline:outline'],
      outputs: [],
    },
  ],
  imports: [FlowbiteIcon],
  providers: [provideFlowbiteNavbarIconItemState()],
  host: { '[class]': `theme().host.root` },
  template: `<flowbite-icon
    [name]="iconName()"
    [size]="baseButtonState().size()"
    [color]="undefined"
    flowbiteStrokeWidth="lg" />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowbiteNavbarIconItem {
  protected readonly baseButtonState = injectFlowbiteBaseButtonState();
  protected readonly config = injectFlowbiteNavbarIconItemConfig();

  readonly iconName = input.required<IconType>();
  /**
   * @see {@link injectFlowbiteNavbarToggleConfig}
   */
  readonly navbar = input(inject(FlowbiteNavbar));
  /**
   * @see {@link injectFlowbiteNavbarIconItemConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteNavbarIconItemTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          mergedTheme.host.transition,
          mergedTheme.host.focus,
          mergedTheme.host.disabled,
          colorToTheme(mergedTheme.host.color, this.navbar().state.color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteNavbarIconItemState<FlowbiteNavbarIconItem>(this);
}
