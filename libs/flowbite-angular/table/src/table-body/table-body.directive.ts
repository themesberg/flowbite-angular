import { injectFlowbiteTableBodyConfig } from '../config/table-body-config';
import { injectFlowbiteTableState } from '../table/table-state';
import { flowbiteTableBodyState, provideFlowbiteTableBodyState } from './table-body-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    tr[flowbiteTableBody]
  `,
  exportAs: 'flowbiteTableBody',
  hostDirectives: [],
  providers: [provideFlowbiteTableBodyState()],
  host: {
    '[class]': `theme().host.root`,
    '[attr.data-striped]': 'tableState().striped() || undefined',
  },
})
export class TableBody {
  readonly config = injectFlowbiteTableBodyConfig();
  readonly tableState = injectFlowbiteTableState();

  /**
   * @see {@link injectFlowbiteTableBodyConfig}
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
  readonly state = flowbiteTableBodyState<TableBody>(this);
}
