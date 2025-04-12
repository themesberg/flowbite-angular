import { FlowbiteButtonComponent } from 'flowbite-angular/button';

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
          summary: 'primary',
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
          summary: 'md',
        },
      },
    },
    pill: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: 'false',
        },
      },
    },
    outline: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: 'false',
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
    size: 'md',
    pill: false,
    outline: false,
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
