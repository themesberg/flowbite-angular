import { defaultFlowbiteIconConfig, FlowbiteIcon } from 'flowbite-angular/icon';
import { close } from 'flowbite-angular/icon/outline/general';

import { provideIcons } from '@ng-icons/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = FlowbiteIcon;

export default {
  title: 'Component/Icon',
  component: FlowbiteIcon,
  decorators: [
    moduleMetadata({
      providers: [provideIcons({ close })],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: [
        'default',
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
          summary: JSON.stringify(defaultFlowbiteIconConfig.color),
        },
      },
    },
    strokeWidth: {
      control: 'select',
      type: 'string',
      options: ['sm', 'md', 'lg'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIconConfig.strokeWidth),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIconConfig.customTheme),
        },
      },
    },
  },
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    color: defaultFlowbiteIconConfig.color,
    strokeWidth: defaultFlowbiteIconConfig.strokeWidth,
    customTheme: defaultFlowbiteIconConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <span class="block size-6">
        <flowbite-icon ${argsToTemplate(args)} name="close" />
      </span>
    `,
  }),
};
