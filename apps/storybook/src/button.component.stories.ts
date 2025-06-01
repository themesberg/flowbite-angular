import type { FlowbiteBaseButtonColors, FlowbiteBaseButtonSizes } from 'flowbite-angular/button';
import {
  defaultFlowbiteBaseButtonConfig,
  defaultFlowbiteButtonConfig,
  FlowbiteButtonDirective,
  FlowbiteIconButtonDirective,
} from 'flowbite-angular/button';
import { FlowbiteIconComponent } from 'flowbite-angular/icon';
import { close } from 'flowbite-angular/icon/outline/general';

import { provideIcons } from '@ng-icons/core';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

type StoryType = FlowbiteButtonDirective & {
  disabled: boolean;
  color: keyof FlowbiteBaseButtonColors;
  size: keyof FlowbiteBaseButtonSizes;
  pill: boolean;
  outline: boolean;
};

export default {
  title: 'Component/Button',
  component: FlowbiteButtonDirective,
  decorators: [
    moduleMetadata({
      imports: [FlowbiteIconComponent, FlowbiteIconButtonDirective],
      providers: [provideIcons({ close })],
    }),
  ],
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
          summary: JSON.stringify(defaultFlowbiteBaseButtonConfig.color),
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
          summary: JSON.stringify(defaultFlowbiteBaseButtonConfig.size),
        },
      },
    },
    pill: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteBaseButtonConfig.pill),
        },
      },
    },
    outline: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteBaseButtonConfig.outline),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteButtonConfig.customTheme),
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
    color: defaultFlowbiteBaseButtonConfig.color,
    size: defaultFlowbiteBaseButtonConfig.size,
    pill: defaultFlowbiteBaseButtonConfig.pill,
    outline: defaultFlowbiteBaseButtonConfig.outline,
    customTheme: defaultFlowbiteButtonConfig.customTheme,
    disabled: false,
  },
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
  render: (args) => ({
    props: args,
    template: `
      <button flowbiteButton ${argsToTemplate(args)}>${args.color}</button>
    `,
  }),
};

export const IconButton: StoryObj<StoryType> = {
  name: 'Icon Button',
  render: (args) => ({
    props: args,
    template: `
      <button flowbiteButton ${argsToTemplate(args)}>
        <span>${args.color} button with icon</span>
        <flowbite-icon flowbiteIconButton name="close" />
      </button>
    `,
  }),
};
