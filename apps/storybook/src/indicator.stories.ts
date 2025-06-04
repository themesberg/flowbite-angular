import { defaultFlowbiteIndicatorConfig, FlowbiteIndicator } from 'flowbite-angular/indicator';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';

type StoryType = FlowbiteIndicator;

export default {
  title: 'Component/Indicator',
  component: FlowbiteIndicator,
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: [
        'default',
        'info',
        'failure',
        'success',
        'warning',
        'primary',
        'dark',
        'light',
        'blue',
        'cyan',
        'gray',
        'green',
        'indigo',
        'lime',
        'pink',
        'purple',
        'red',
        'teal',
        'yellow',
      ],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIndicatorConfig.color),
        },
      },
    },
    size: {
      control: 'select',
      type: 'string',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIndicatorConfig.size),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIndicatorConfig.customTheme),
        },
      },
    },
  },
  args: {
    color: defaultFlowbiteIndicatorConfig.color,
    size: defaultFlowbiteIndicatorConfig.size,
    customTheme: defaultFlowbiteIndicatorConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `<span flowbiteIndicator ${argsToTemplate(args)}></span>`,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
