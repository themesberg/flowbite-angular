import { defaultFlowbiteInputFieldConfig, FlowbiteInputField } from 'flowbite-angular/form';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';

type StoryType = FlowbiteInputField & {
  disabled: boolean;
};

export default {
  title: 'Component/Form/Input Field',
  component: FlowbiteInputField,
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: [
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
        defaultValue: JSON.stringify(defaultFlowbiteInputFieldConfig.color),
      },
    },
    size: {
      control: 'select',
      type: 'string',
      options: ['sm', 'md', 'xl'],
      table: {
        category: 'Input',
        defaultValue: JSON.stringify(defaultFlowbiteInputFieldConfig.size),
      },
    },
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: 'false',
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteInputFieldConfig.customTheme),
        },
      },
    },
  },
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    color: defaultFlowbiteInputFieldConfig.color,
    size: defaultFlowbiteInputFieldConfig.size,
    disabled: false,
    customTheme: defaultFlowbiteInputFieldConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <input flowbiteInputField id="name" name="name" placeholder="Name" ${argsToTemplate(args)} />
    `,
  }),
};
