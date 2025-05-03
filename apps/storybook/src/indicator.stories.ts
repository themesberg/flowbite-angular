import {
  defaultFlowbiteIndicatorConfig,
  FlowbiteIndicatorComponent,
} from 'flowbite-angular/indicator';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';

type StoryType = FlowbiteIndicatorComponent;

export default {
  title: 'Component/Indicator',
  component: FlowbiteIndicatorComponent,
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['primary', 'dark', 'blue', 'red', 'green', 'yellow'],
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
    rounded: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIndicatorConfig.rounded),
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
    rounded: defaultFlowbiteIndicatorConfig.rounded,
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
