import type { FlowbiteBaseButtonColors, FlowbiteBaseButtonSizes } from 'flowbite-angular/button';
import {
  defaultFlowbiteBaseButtonConfig,
  defaultFlowbiteButtonConfig,
  FlowbiteButton,
} from 'flowbite-angular/button';
import { FlowbiteButtonGroup } from 'flowbite-angular/button-group';
import { FlowbiteIcon } from 'flowbite-angular/icon';
import { close } from 'flowbite-angular/icon/outline/general';

import { provideIcons } from '@ng-icons/core';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

type StoryType = FlowbiteButton & {
  disabled: boolean;
  color: keyof FlowbiteBaseButtonColors;
  size: keyof FlowbiteBaseButtonSizes;
  pill: boolean;
  outline: boolean;
};

export default {
  title: 'Component/Button',
  component: FlowbiteButton,
  decorators: [
    moduleMetadata({
      imports: [FlowbiteIcon, FlowbiteButtonGroup],
      providers: [provideIcons({ close })],
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
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    color: defaultFlowbiteBaseButtonConfig.color,
    size: defaultFlowbiteBaseButtonConfig.size,
    pill: defaultFlowbiteBaseButtonConfig.pill,
    outline: defaultFlowbiteBaseButtonConfig.outline,
    disabled: false,
    customTheme: defaultFlowbiteButtonConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <button flowbiteButton ${argsToTemplate(args)}>${args.color}</button>
    `,
  }),
};

export const IconButton: StoryObj<StoryType> = {
  name: 'Icon Button',
  args: {
    color: defaultFlowbiteBaseButtonConfig.color,
    size: defaultFlowbiteBaseButtonConfig.size,
    pill: defaultFlowbiteBaseButtonConfig.pill,
    outline: defaultFlowbiteBaseButtonConfig.outline,
    disabled: false,
    customTheme: defaultFlowbiteButtonConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <button flowbiteButton ${argsToTemplate(args)}>
        ${args.color} button with icon
        <flowbite-icon name="close" />
      </button>
    `,
  }),
};

export const IconButtonOnly: StoryObj<StoryType> = {
  name: 'Icon Button Only',
  args: {
    color: defaultFlowbiteBaseButtonConfig.color,
    size: defaultFlowbiteBaseButtonConfig.size,
    pill: defaultFlowbiteBaseButtonConfig.pill,
    outline: defaultFlowbiteBaseButtonConfig.outline,
    disabled: false,
    customTheme: defaultFlowbiteButtonConfig.customTheme,
  },
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
  args: {
    color: defaultFlowbiteBaseButtonConfig.color,
    size: defaultFlowbiteBaseButtonConfig.size,
    pill: defaultFlowbiteBaseButtonConfig.pill,
    outline: defaultFlowbiteBaseButtonConfig.outline,
    disabled: false,
    customTheme: defaultFlowbiteButtonConfig.customTheme,
  },
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
