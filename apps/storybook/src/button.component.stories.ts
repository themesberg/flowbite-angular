import { defaultFlowbiteButtonConfig, FlowbiteButtonComponent } from 'flowbite-angular/button';

import { argsToTemplate } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

type StoryType = FlowbiteButtonComponent & { disabled: boolean };

export default {
  title: 'Component/Button',
  component: FlowbiteButtonComponent,
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['primary', 'dark', 'light', 'green', 'red', 'yellow', 'purple'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteButtonConfig.color),
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
          summary: JSON.stringify(defaultFlowbiteButtonConfig.size),
        },
      },
    },
    pill: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteButtonConfig.pill),
        },
      },
    },
    outline: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteButtonConfig.outline),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteButtonConfig.customTheme),
        },
      },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        subcategory: 'NG-PRIMITIVES',
        defaultValue: {
          summary: 'false',
        },
      },
    },
  },
  args: {
    color: defaultFlowbiteButtonConfig.color,
    size: defaultFlowbiteButtonConfig.size,
    pill: defaultFlowbiteButtonConfig.pill,
    outline: defaultFlowbiteButtonConfig.outline,
    customTheme: defaultFlowbiteButtonConfig.customTheme,
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <button flowbite-button ${argsToTemplate(args)}>Button</button>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
