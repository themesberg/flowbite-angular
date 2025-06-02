import type { FlowbiteBaseButtonColors, FlowbiteBaseButtonSizes } from 'flowbite-angular/button';
import {
  defaultFlowbiteBaseButtonConfig,
  defaultFlowbiteButtonConfig,
  FlowbiteButtonDirective,
} from 'flowbite-angular/button';
import { FlowbiteButtonGroupDirective } from 'flowbite-angular/button-group';
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
      imports: [FlowbiteIconComponent, FlowbiteButtonGroupDirective],
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
    disabled: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: 'false',
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
  },
  args: {
    color: defaultFlowbiteBaseButtonConfig.color,
    size: defaultFlowbiteBaseButtonConfig.size,
    pill: defaultFlowbiteBaseButtonConfig.pill,
    outline: defaultFlowbiteBaseButtonConfig.outline,
    disabled: false,
    customTheme: defaultFlowbiteButtonConfig.customTheme,
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

export const IconButtonOnly: StoryObj<StoryType> = {
  name: 'Icon Button Only',
  render: (args) => ({
    props: args,
    template: `
      <button flowbiteButton ${argsToTemplate(args)}>
        <flowbite-icon name="close" />
      </button>
    `,
  }),
};

export const ButtonGroup: StoryObj<StoryType> = {
  name: 'Button Group',
  render: (args) => ({
    props: args,
    template: `
      <div flowbiteButtonGroup>
        <button flowbiteButton>Button 1</button>
        <button flowbiteButton>Button 2</button>
        <button flowbiteButton>Button 3</button>
      </div>
    `,
  }),
};
