import { Badge, BadgeButton, BadgeLink, defaultFlowbiteBadgeConfig } from 'flowbite-angular/badge';
import { Icon } from 'flowbite-angular/icon';
import { close, infoCircle } from 'flowbite-angular/icon/outline/general';
import { clock } from 'flowbite-angular/icon/solid/general';

import { provideIcons } from '@ng-icons/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = Badge;

export default {
  title: 'Component/Badge',
  component: Badge,
  decorators: [
    moduleMetadata({
      imports: [BadgeLink, Icon, BadgeButton],
      providers: [provideIcons({ clock, infoCircle, close })],
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
} as Meta<StoryType>;

export const DefaultStory: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    color: defaultFlowbiteBadgeConfig.color,
    border: defaultFlowbiteBadgeConfig.border,
    size: defaultFlowbiteBadgeConfig.size,
    pill: defaultFlowbiteBadgeConfig.pill,
    customTheme: defaultFlowbiteBadgeConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
    <span flowbiteBadge ${argsToTemplate(args)}>
      <span>${args.color}</span>
    </span>
    `,
  }),
};

export const BadgeLinkStory: StoryObj<StoryType> = {
  name: 'Badge as link',
  args: {
    color: defaultFlowbiteBadgeConfig.color,
    border: defaultFlowbiteBadgeConfig.border,
    size: defaultFlowbiteBadgeConfig.size,
    pill: defaultFlowbiteBadgeConfig.pill,
    customTheme: defaultFlowbiteBadgeConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
    <a href="#" flowbiteBadgeLink ${argsToTemplate(args)}>
      <span>${args.color}</span>
    </a>
    `,
  }),
};

export const BadgeIconStory: StoryObj<StoryType> = {
  name: 'Badge with icon',
  args: {
    color: defaultFlowbiteBadgeConfig.color,
    border: defaultFlowbiteBadgeConfig.border,
    size: defaultFlowbiteBadgeConfig.size,
    pill: defaultFlowbiteBadgeConfig.pill,
    customTheme: defaultFlowbiteBadgeConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
    <span flowbiteBadge ${argsToTemplate(args)}>
      <flowbite-icon name="clock" class="size-4 stroke-2" />
      <span class="ml-2">${args.color}</span>
    </span>
    `,
  }),
};

export const BadgeIconOnlyStory: StoryObj<StoryType> = {
  name: 'Badge with icon only',
  args: {
    color: defaultFlowbiteBadgeConfig.color,
    border: defaultFlowbiteBadgeConfig.border,
    size: defaultFlowbiteBadgeConfig.size,
    pill: true,
    customTheme: defaultFlowbiteBadgeConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
    <span flowbiteBadge ${argsToTemplate(args)}>
      <flowbite-icon name="clock" class="size-4 stroke-2" />
    </span>
    `,
  }),
};

export const DismissableBadgeStory: StoryObj<StoryType> = {
  name: 'Dismissable Badge',
  args: {
    color: defaultFlowbiteBadgeConfig.color,
    border: defaultFlowbiteBadgeConfig.border,
    size: defaultFlowbiteBadgeConfig.size,
    pill: defaultFlowbiteBadgeConfig.pill,
    customTheme: defaultFlowbiteBadgeConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
    <span flowbiteBadge ${argsToTemplate(args)}>
      <flowbite-icon name="infoCircle" />
      <span class="ml-2">${args.color}</span>
      <button flowbiteBadgeButton>
        <flowbite-icon name="close" class="size-4 stroke-2" />
      </button>
    </span>
    `,
  }),
};
