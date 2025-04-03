import { ButtonComponent } from 'libs/flowbite-angular/src/components/button/button.component';
import { flowbiteButtonTheme } from 'libs/flowbite-angular/src/components/button/theme';

import { argsToTemplate } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

type StoryType = ButtonComponent & { disabled: boolean };

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: Object.keys(flowbiteButtonTheme.root.color),
      table: {
        category: 'Input',
      },
    },
    size: {
      control: 'select',
      type: 'string',
      options: Object.keys(flowbiteButtonTheme.root.size),
      table: {
        category: 'Input',
      },
    },
    isPill: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
      },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
      },
    },
    customStyle: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
      },
    },
  },
  args: {
    color: 'primary',
    isPill: false,
    size: 'md',
    disabled: false,
    customStyle: {},
  },
  render: (args) => ({
    props: args,
    template: `
      <button flowbite-button ${argsToTemplate(args)}>Button</button>
    `,
  }),
} as Meta<StoryType>;
type Story = StoryObj<StoryType>;

export const Default: Story = {
  name: 'Default',
};
