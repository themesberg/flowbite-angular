import { Button } from 'flowbite-angular/button';
import { Icon } from 'flowbite-angular/icon';
import { messages } from 'flowbite-angular/icon/outline/general';
import { defaultFlowbiteIndicatorConfig, Indicator } from 'flowbite-angular/indicator';

import { provideIcons } from '@ng-icons/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = Indicator;

export default {
  title: 'Component/Indicator',
  component: Indicator,
  decorators: [
    moduleMetadata({
      imports: [Button, Icon],
      providers: [provideIcons({ messages })],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['default', 'info', 'failure', 'success', 'warning', 'primary'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIndicatorConfig.color),
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
          summary: JSON.stringify(defaultFlowbiteIndicatorConfig.size),
        },
      },
    },
    border: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIndicatorConfig.border),
        },
      },
    },
    position: {
      control: 'select',
      type: 'string',
      options: [
        'bottom-left',
        'bottom-right',
        'bottom-center',
        'top-left',
        'top-center',
        'top-right',
        'center-left',
        'center',
        'center-right',
        undefined,
      ],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIndicatorConfig.border),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIndicatorConfig.customTheme),
        },
      },
    },
  },
} as Meta<StoryType>;

export const DefaultStory: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    color: defaultFlowbiteIndicatorConfig.color,
    size: defaultFlowbiteIndicatorConfig.size,
    border: defaultFlowbiteIndicatorConfig.border,
    customTheme: defaultFlowbiteIndicatorConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `<span flowbiteIndicator ${argsToTemplate(args)}></span>`,
  }),
};

export const LegendIndicatorStory: StoryObj<StoryType> = {
  name: 'Legend indicator',
  args: {
    color: defaultFlowbiteIndicatorConfig.color,
    size: defaultFlowbiteIndicatorConfig.size,
    border: defaultFlowbiteIndicatorConfig.border,
    position: defaultFlowbiteIndicatorConfig.position,
    customTheme: defaultFlowbiteIndicatorConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <span class="flex items-center gap-1.5">
        <span flowbiteIndicator ${argsToTemplate(args)}></span>
        Visitors
      </span>
    `,
  }),
};

export const IndicatorCountStory: StoryObj<StoryType> = {
  name: 'IndicatorCount',
  args: {
    color: 'primary',
    size: 'lg',
    border: true,
    position: 'top-right',
    customTheme: defaultFlowbiteIndicatorConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <button flowbiteButton color="info" class="relative">
        <flowbite-icon name="messages" />
        <span>Messages</span>
        <span flowbiteIndicator ${argsToTemplate(args)} class="absolute">2</span>
      </button>
    `,
  }),
};
