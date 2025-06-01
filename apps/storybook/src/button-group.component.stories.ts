import { FlowbiteButtonDirective } from 'flowbite-angular/button';
import {
  defaultFlowbiteButtonGroupConfig,
  FlowbiteButtonGroupComponent,
} from 'flowbite-angular/button-group';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = FlowbiteButtonGroupComponent;

export default {
  title: 'Component/ButtonGroup',
  component: FlowbiteButtonGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [FlowbiteButtonDirective],
    }),
  ],
  argTypes: {
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteButtonGroupConfig.customTheme),
        },
      },
    },
  },
  args: {
    customTheme: defaultFlowbiteButtonGroupConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <div flowbiteButtonGroup ${argsToTemplate(args)}>
        <button flowbiteButton outline>Button 1</button>
        <button flowbiteButton outline>Button 2</button>
        <button flowbiteButton outline>Button 3</button>
      </div>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
