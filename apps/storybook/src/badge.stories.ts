import { defaultFlowbiteBadgeConfig, FlowbiteBadgeComponent } from 'flowbite-angular/badge';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';

type StoryType = FlowbiteBadgeComponent;

export default {
  title: 'Component/Badge',
  component: FlowbiteBadgeComponent,
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['primary', 'dark', 'blue', 'red', 'green', 'yellow', 'indigo', 'purple', 'pink'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteBadgeConfig.color),
        },
      },
    },
    border: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteBadgeConfig.border),
        },
      },
    },
    size: {
      control: 'select',
      type: 'string',
      options: ['xs', 'sm'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteBadgeConfig.size),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteBadgeConfig.customTheme),
        },
      },
    },
  },
  args: {
    color: defaultFlowbiteBadgeConfig.color,
    border: defaultFlowbiteBadgeConfig.border,
    size: defaultFlowbiteBadgeConfig.size,
    customTheme: defaultFlowbiteBadgeConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `<span flowbiteBadge ${argsToTemplate(args)}>${args.color}</span>`,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
