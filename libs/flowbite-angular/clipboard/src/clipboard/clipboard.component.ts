import { injectFlowbiteClipboardConfig } from '../config/clipboard-config';
import { flowbiteClipboardState, provideFlowbiteClipboardState } from './clipboard-state';
import type { FlowbiteClipboardTheme } from './theme';

import { mergeDeep, type DeepPartial } from 'flowbite-angular';
import { Button } from 'flowbite-angular/button';
import { Icon } from 'flowbite-angular/icon';
import { fileCopy } from 'flowbite-angular/icon/outline/files-folders';
import { Tooltip } from 'flowbite-angular/tooltip';

import { Clipboard as CdkClipboard } from '@angular/cdk/clipboard';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { NgpTooltipTrigger } from 'ng-primitives/tooltip';
import { twMerge } from 'tailwind-merge';

@Component({
  standalone: true,
  selector: `
    div[flowbiteClipboard]
  `,
  exportAs: 'flowbiteClipboard',
  hostDirectives: [],
  imports: [Button, Icon, NgpTooltipTrigger, Tooltip],
  providers: [provideFlowbiteClipboardState(), provideIcons({ fileCopy })],
  host: {
    '[class]': `theme().host.root`,
    '(click)': 'onClick()',
  },
  template: `
    <div
      [ngpTooltipTrigger]="tooltip"
      class="flex flex-row *:first:rounded-l-md *:last:rounded-none *:last:rounded-r-md">
      <input
        [id]="id()"
        [name]="id()"
        [value]="value()"
        type="text"
        class="block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
        disabled
        readonly />
      <label
        [for]="id()"
        class="sr-only">
        Label
      </label>
      <button
        flowbiteButton
        color="default">
        <flowbite-icon
          name="fileCopy"
          class="size-4 stroke-2" />
      </button>
    </div>
    <ng-template #tooltip>
      <div flowbiteTooltip>Copy to clipboard</div>
    </ng-template>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Clipboard {
  readonly config = injectFlowbiteClipboardConfig();
  readonly clipboard = inject(CdkClipboard);

  readonly id = input<string>();
  readonly value = input<string>();
  /**
   * @see {@link injectFlowbiteClipboardConfig}
   */
  readonly customTheme = input<DeepPartial<FlowbiteClipboardTheme>>(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(mergedTheme.host.base, mergedTheme.host.transition),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteClipboardState<Clipboard>(this);

  /**
   * @internal
   */
  onClick(): void {
    this.copyToClipboard();
  }

  /**
   * @internal
   */
  copyToClipboard(): void {
    const value = this.value();

    if (value) {
      this.clipboard.copy(value);
    }
  }
}
