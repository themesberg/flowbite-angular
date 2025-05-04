import {
  defaultFlowbiteBaseButtonConfig,
  defaultFlowbiteIconButtonConfig,
  FlowbiteIconButtonComponent,
} from 'flowbite-angular/button';
import { close } from 'flowbite-angular/icon/outline/general';

import { provideIcons } from '@ng-icons/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = FlowbiteIconButtonComponent & { disabled: boolean };

export default {
  title: 'Component/IconButton',
  component: FlowbiteIconButtonComponent,
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
          summary: JSON.stringify(defaultFlowbiteIconButtonConfig.customTheme),
        },
      },
    },
    iconName: {
      control: 'select',
      type: 'string',
      options: ['close'],
      table: {
        category: 'Input',
        subcategory: 'ICON',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIconButtonConfig.iconName),
        },
      },
    },
    iconStrokeWidth: {
      control: 'select',
      type: 'string',
      options: ['sm', 'md', 'lg'],
      table: {
        category: 'Input',
        subcategory: 'ICON',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIconButtonConfig.iconStrokeWidth),
        },
      },
    },
    iconCustomTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        subcategory: 'ICON',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteIconButtonConfig.iconCustomTheme),
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
    iconName: 'close',
    iconStrokeWidth: defaultFlowbiteIconButtonConfig.iconStrokeWidth,
    iconCustomTheme: defaultFlowbiteIconButtonConfig.iconCustomTheme,
    customTheme: defaultFlowbiteIconButtonConfig.customTheme,
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<button flowbiteIconButton ${argsToTemplate(args)}>Button with icon</button>`,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
