import { FlowbiteButtonComponent, flowbiteButtonTheme } from 'flowbite-angular/button';

import { argsToTemplate } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

type StoryType = FlowbiteButtonComponent & { disabled: boolean };

export default {
  title: 'Button',
  component: FlowbiteButtonComponent,
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: Object.keys(flowbiteButtonTheme.host.color),
      table: {
        category: 'Input',
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    size: {
      control: 'select',
      type: 'string',
      options: Object.keys(flowbiteButtonTheme.host.size),
      table: {
        category: 'Input',
        defaultValue: {
          summary: 'md',
        },
      },
    },
    isPill: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: 'true',
        },
      },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: 'false',
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: '{}',
        },
      },
    },
  },
  args: {
    color: 'primary',
    isPill: false,
    size: 'md',
    disabled: false,
    customTheme: {},
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
