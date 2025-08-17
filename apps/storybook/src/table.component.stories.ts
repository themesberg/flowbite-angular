import {
  defaultFlowbiteTableConfig,
  Table,
  TableBody,
  TableFoot,
  TableHead,
} from 'flowbite-angular/table';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = Table;

export default {
  title: 'Component/Table',
  component: Table,
  decorators: [
    moduleMetadata({
      imports: [TableHead, TableBody, TableFoot],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['default', 'info', 'failure', 'success', 'warning', 'primary'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteTableConfig.color),
        },
      },
    },
    striped: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteTableConfig.striped),
        },
      },
    },
    data: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify([]),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteTableConfig.customTheme),
        },
      },
    },
  },
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    color: defaultFlowbiteTableConfig.color,
    striped: defaultFlowbiteTableConfig.striped,
    data: Array.from({ length: 5 }, (_, i) => i++).map((x) => ({
      name: `Product ${x}`,
      qty: x,
      price: x * x,
    })),
    customTheme: defaultFlowbiteTableConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <table flowbiteTable [tableHead]="tableHeader" [tableBody]="tableBody" [tableFoot]="tableFooter" ${argsToTemplate(args)}>
        <ng-template #tableHeader>
          <tr flowbiteTableHead>
            <th scope="col" class="px-6 py-3 rounded-s-lg">
                Product name
            </th>
            <th scope="col" class="px-6 py-3">
                Qty
            </th>
            <th scope="col" class="px-6 py-3 rounded-e-lg">
                Price
            </th>
          </tr>
        </ng-template>
        <ng-template #tableBody let-data>
          <tr flowbiteTableBody>
            <td scope="row" class="px-6 py-4">
              {{ data.name }}
            </td>
            <td class="px-6 py-4">
                {{ data.qty }}
            </td>
            <td class="px-6 py-4">
                {{ data.price }}
            </td>
          </tr>
        </ng-template>
        <ng-template #tableFooter>
          <tr flowbiteTableFoot>
            <td scope="row" class="px-6 py-4">
              Total
            </td>
            <td class="px-6 py-4">
                10
            </td>
            <td class="px-6 py-4">
                30
            </td>
          </tr>
        </ng-template>
      </table>
    `,
  }),
};
