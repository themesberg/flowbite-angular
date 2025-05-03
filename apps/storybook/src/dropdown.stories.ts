import { FlowbiteButtonComponent } from 'flowbite-angular/button';
import {
  defaultFlowbiteDropdownConfig,
  FlowbiteDropdownComponent,
  FlowbiteDropdownItemComponent,
} from 'flowbite-angular/dropdown';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { NgpMenuTrigger } from 'ng-primitives/menu';

type StoryType = FlowbiteDropdownComponent;

export default {
  title: 'Component/Dropdown',
  component: FlowbiteDropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [FlowbiteDropdownItemComponent, NgpMenuTrigger, FlowbiteButtonComponent],
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
      <button flowbiteButton [ngpMenuTrigger]="dropdownMenu">Dropdown</button>

      <ng-template #dropdownMenu>
        <div flowbiteDropdown flowbiteDropdown ${argsToTemplate(args)}>
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
