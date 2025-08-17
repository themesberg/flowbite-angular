import { injectFlowbiteTableHeadConfig } from '../config/table-head-config';
import { injectFlowbiteTableState } from '../table/table-state';
import { flowbiteTableHeadState, provideFlowbiteTableHeadState } from './table-head-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    tr[flowbiteTableHead]
  `,
  exportAs: 'flowbiteTableHead',
  hostDirectives: [],
  providers: [provideFlowbiteTableHeadState()],
  host: { '[class]': `theme().host.root` },
})
export class TableHead {
  readonly config = injectFlowbiteTableHeadConfig();
  readonly tableState = injectFlowbiteTableState();

  /**
   * @see {@link injectFlowbiteTableHeadConfig}
   */
  readonly customTheme = input(this.config.customTheme);

  readonly theme = computed(() => {
    const mergedTheme = mergeDeep(this.config.baseTheme, this.state.customTheme());

    return {
      host: {
        root: twMerge(
          mergedTheme.host.base,
          colorToTheme(mergedTheme.host.color, this.tableState().color())
        ),
      },
    };
  });

  /**
   * @internal
   */
  readonly state = flowbiteTableHeadState<TableHead>(this);
}
