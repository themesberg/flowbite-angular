import type { FlowbiteInputFieldColors, FlowbiteInputFieldSizes } from 'flowbite-angular/form';
import {
  defaultFlowbiteInputFieldConfig,
  FlowbiteInputFieldComponent,
} from 'flowbite-angular/form';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';

type StoryType = FlowbiteInputFieldComponent & {
  disabled: boolean;
  color: keyof FlowbiteInputFieldColors;
  size: keyof FlowbiteInputFieldSizes;
};

export default {
  title: 'Component/InputField',
  component: FlowbiteInputFieldComponent,
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
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteInputFieldConfig.color),
        },
      },
    },
    size: {
      control: 'select',
      type: 'string',
      options: ['sm', 'md', 'lg'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteInputFieldConfig.size),
        },
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
    color: defaultFlowbiteInputFieldConfig.color,
    size: defaultFlowbiteInputFieldConfig.size,
    disabled: false,
    customTheme: defaultFlowbiteInputFieldConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <input flowbiteInputField id="input" name="input" placeholder="Input" ${argsToTemplate(args)} />
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
