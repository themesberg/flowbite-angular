import { injectFlowbiteTableConfig } from '../config/table-config';
import { flowbiteTableState, provideFlowbiteTableState } from './table-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { NgTemplateOutlet } from '@angular/common';
import type { TemplateRef } from '@angular/core';
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
    table[flowbiteTable]
  `,
  exportAs: 'flowbiteTable',
  hostDirectives: [],
  imports: [NgTemplateOutlet],
  providers: [provideFlowbiteTableState()],
  host: { '[class]': `theme().host.root` },
  template: `
    <thead>
      <ng-container [ngTemplateOutlet]="state.tableHead()" />
    </thead>
    <tbody>
      @for (record of state.data(); track $index) {
        <ng-container
          [ngTemplateOutlet]="state.tableBody()"
          [ngTemplateOutletContext]="{ $implicit: record }" />
      }
    </tbody>
    <tfoot>
      <ng-container [ngTemplateOutlet]="state.tableFoot()" />
    </tfoot>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Table {
  readonly config = injectFlowbiteTableConfig();

  readonly tableHead = input<TemplateRef<unknown>>();
  readonly tableBody = input<TemplateRef<unknown>>();
  readonly data = input<unknown[]>();
  readonly tableFoot = input<TemplateRef<unknown>>();

  /**
   * @see {@link injectFlowbiteTableConfig}
   */
  readonly color = input(this.config.color);
  /**
   * @see {@link injectFlowbiteTableConfig}
   */
  readonly striped = input(this.config.striped);

  /**
   * @see {@link injectFlowbiteTableConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          colorToTheme(mergedTheme.host.color, this.state.color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteTableState<Table>(this);
}
