import { ButtonComponent } from './button.component';
import { flowbiteButtonTheme } from './theme';

import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';

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
    customStyle: {},
  },
  render: (args) => ({
    props: args,
    template: `
      <button flowbite-button ${argsToTemplate(args)}>Button</button>
    `,
  }),
} as Meta<ButtonComponent>;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  name: 'Default',
};
