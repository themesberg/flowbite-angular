import { defaultFlowbiteIconConfig, FlowbiteIconComponent } from 'flowbite-angular/icon';
import { close } from 'flowbite-angular/icon/outline/general';

import { provideIcons } from '@ng-icons/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = FlowbiteIconComponent;

export default {
  title: 'Component/Icon',
  component: FlowbiteIconComponent,
  decorators: [
    moduleMetadata({
      providers: [provideIcons({ close })],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      type: 'string',
      options: ['sm', 'md', 'lg'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIconConfig.size),
        },
      },
    },
    color: {
      control: 'select',
      type: 'string',
      options: ['primary', 'dark', 'light'],
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
  args: {
    size: defaultFlowbiteIconConfig.size,
    color: defaultFlowbiteIconConfig.color,
    strokeWidth: defaultFlowbiteIconConfig.strokeWidth,
    customTheme: defaultFlowbiteIconConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `<flowbite-icon ${argsToTemplate(args)} name="close" />`,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
