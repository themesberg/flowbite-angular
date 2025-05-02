import { defaultFlowbiteAlertConfig, FlowbiteAlertComponent } from 'flowbite-angular/alert';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';

type StoryType = FlowbiteAlertComponent;

export default {
  title: 'Component/Alert',
  component: FlowbiteAlertComponent,
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['primary', 'dark', 'blue', 'red', 'green', 'yellow'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteAlertConfig.color),
        },
      },
    },
    border: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteAlertConfig.border),
        },
      },
    },
    accent: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteAlertConfig.accent),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteAlertConfig.customTheme),
        },
      },
    },
  },
  args: {
    color: defaultFlowbiteAlertConfig.color,
    border: defaultFlowbiteAlertConfig.border,
    accent: defaultFlowbiteAlertConfig.accent,
    customTheme: defaultFlowbiteAlertConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `<div flowbite-alert ${argsToTemplate(args)}>Alert</div>`,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
