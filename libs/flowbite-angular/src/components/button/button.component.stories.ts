import { ButtonComponent } from './button.component';
import { flowbiteButtonTheme } from './theme';

import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';

type StoryType = ButtonComponent & { content: string };

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
  },
  args: {
    color: 'primary',
    size: 'md',
    isPill: false,
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
