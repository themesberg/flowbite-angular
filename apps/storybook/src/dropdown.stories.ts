import { FlowbiteButton } from 'flowbite-angular/button';
import {
  defaultFlowbiteDropdownConfig,
  FlowbiteDropdown,
  FlowbiteDropdownItem,
} from 'flowbite-angular/dropdown';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { NgpMenuTrigger } from 'ng-primitives/menu';

type StoryType = FlowbiteDropdown;

export default {
  title: 'Component/Dropdown',
  component: FlowbiteDropdown,
  decorators: [
    moduleMetadata({
      imports: [FlowbiteDropdownItem, NgpMenuTrigger, FlowbiteButton],
    }),
  ],
  argTypes: {
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteDropdownConfig.customTheme),
        },
      },
    },
  },
  args: {
    customTheme: defaultFlowbiteDropdownConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <button flowbiteButton [ngpMenuTrigger]="dropdownMenu">Dropdown button</button>

      <ng-template #dropdownMenu>
        <div flowbiteDropdown ${argsToTemplate(args)}>
          <li flowbiteDropdownItem>Hello World !</li>
          <li flowbiteDropdownItem>Hello World 2 !</li>
        </div>
      </ng-template>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
