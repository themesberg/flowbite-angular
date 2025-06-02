import { defaultFlowbiteAlertConfig, FlowbiteAlertComponent } from 'flowbite-angular/alert';
import { FlowbiteIconComponent } from 'flowbite-angular/icon';
import { infoCircle } from 'flowbite-angular/icon/outline/general';

import { provideIcons } from '@ng-icons/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = FlowbiteAlertComponent;

export default {
  title: 'Component/Alert',
  component: FlowbiteAlertComponent,
  decorators: [
    moduleMetadata({
      imports: [FlowbiteIconComponent],
      providers: [provideIcons({ infoCircle })],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['primary', 'dark', 'blue', 'red', 'green', 'yellow'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteAlertConfig.color),
        },
      },
    },
    border: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteAlertConfig.border),
        },
      },
    },
    accent: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteAlertConfig.accent),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteAlertConfig.customTheme),
        },
      },
    },
  },
  args: {
    color: defaultFlowbiteAlertConfig.color,
    border: defaultFlowbiteAlertConfig.border,
    accent: defaultFlowbiteAlertConfig.accent,
    customTheme: defaultFlowbiteAlertConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <div flowbiteAlert ${argsToTemplate(args)}>
        <flowbite-icon name="infoCircle" flowbiteSize="lg" />
        <span>
          <span class="font-medium">${args.color} alert!</span> Change a few things up and try submitting again.
        </span>
      </div>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
