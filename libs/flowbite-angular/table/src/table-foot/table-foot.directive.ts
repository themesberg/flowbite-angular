import { injectFlowbiteTableFootConfig } from '../config/table-foot-config';
import { injectFlowbiteTableState } from '../table/table-state';
import { flowbiteTableFootState, provideFlowbiteTableFootState } from './table-foot-state';

import { colorToTheme, mergeDeep } from 'flowbite-angular';

import { computed, Directive, input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Directive({
  standalone: true,
  selector: `
    tr[flowbiteTableFoot]
  `,
  exportAs: 'flowbiteTableFoot',
  hostDirectives: [],
  providers: [provideFlowbiteTableFootState()],
  host: { '[class]': `theme().host.root` },
})
export class TableFoot {
  readonly config = injectFlowbiteTableFootConfig();
  readonly tableState = injectFlowbiteTableState();

  /**
   * @see {@link injectFlowbiteTableFootConfig}
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
  readonly state = flowbiteTableFootState<TableFoot>(this);
}
