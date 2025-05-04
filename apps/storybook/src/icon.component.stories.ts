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
    flowbiteSize: {
      control: 'select',
      type: 'string',
      options: ['sm', 'md', 'lg'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIconConfig.flowbiteSize),
        },
      },
    },
    flowbiteColor: {
      control: 'select',
      type: 'string',
      options: ['primary', 'dark', 'light'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIconConfig.flowbiteColor),
        },
      },
    },
    flowbiteStrokeWidth: {
      control: 'select',
      type: 'string',
      options: ['sm', 'md', 'lg'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIconConfig.flowbiteStrokeWidth),
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
    flowbiteSize: defaultFlowbiteIconConfig.flowbiteSize,
    flowbiteColor: defaultFlowbiteIconConfig.flowbiteColor,
    flowbiteStrokeWidth: defaultFlowbiteIconConfig.flowbiteStrokeWidth,
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
