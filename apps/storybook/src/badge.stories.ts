import {
  defaultFlowbiteBadgeConfig,
  FlowbiteBadgeButtonDirective,
  FlowbiteBadgeDirective,
  FlowbiteBadgeLinkDirective,
} from 'flowbite-angular/badge';
import { FlowbiteIconComponent } from 'flowbite-angular/icon';
import { close, infoCircle } from 'flowbite-angular/icon/outline/general';
import { clock } from 'flowbite-angular/icon/solid/general';

import { provideIcons } from '@ng-icons/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = FlowbiteBadgeDirective;

export default {
  title: 'Component/Badge',
  component: FlowbiteBadgeDirective,
  decorators: [
    moduleMetadata({
      imports: [FlowbiteBadgeLinkDirective, FlowbiteIconComponent, FlowbiteBadgeButtonDirective],
      providers: [provideIcons({ clock, infoCircle, close })],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['primary', 'dark', 'blue', 'red', 'green', 'yellow', 'indigo', 'purple', 'pink'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteBadgeConfig.color),
        },
      },
    },
    border: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteBadgeConfig.border),
        },
      },
    },
    size: {
      control: 'select',
      type: 'string',
      options: ['xs', 'sm'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteBadgeConfig.size),
        },
      },
    },
    pill: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteBadgeConfig.pill),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteBadgeConfig.customTheme),
        },
      },
    },
  },
  args: {
    color: defaultFlowbiteBadgeConfig.color,
    border: defaultFlowbiteBadgeConfig.border,
    size: defaultFlowbiteBadgeConfig.size,
    pill: defaultFlowbiteBadgeConfig.pill,
    customTheme: defaultFlowbiteBadgeConfig.customTheme,
  },
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
  render: (args) => ({
    props: args,
    template: `
    <span flowbiteBadge ${argsToTemplate(args)}>
      <span>${args.color}</span>
    </span>`,
  }),
};

export const BadgeLink: StoryObj<StoryType> = {
  name: 'Badge as link',
  render: (args) => ({
    props: args,
    template: `
    <a href="#" flowbiteBadgeLink ${argsToTemplate(args)}>
      <span>${args.color}</span>
    </a>`,
  }),
};

export const BadgeIcon: StoryObj<StoryType> = {
  name: 'Badge with icon',
  render: (args) => ({
    props: args,
    template: `
    <span flowbiteBadge ${argsToTemplate(args)}>
      <flowbite-icon name="clock" />
      <span>${args.color}</span>
    </span>`,
  }),
};

export const BadgeIconOnly: StoryObj<StoryType> = {
  name: 'Badge with icon only',
  render: (args) => ({
    props: args,
    template: `
    <span flowbiteBadge ${argsToTemplate(args)}>
      <flowbite-icon name="clock" />
    </span>`,
  }),
};

export const DismissableBadge: StoryObj<StoryType> = {
  name: 'Dismissable Badge',
  render: (args) => ({
    props: args,
    template: `
    <span flowbiteBadge ${argsToTemplate(args)}>
      <flowbite-icon name="infoCircle" />
      <span>${args.color}</span>
      <button flowbiteBadgeButton>
        <flowbite-icon name="close" />
      </button>
    </span>`,
  }),
};
