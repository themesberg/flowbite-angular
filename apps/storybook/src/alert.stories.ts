import {
  Alert,
  AlertButton,
  AlertContent,
  defaultFlowbiteAlertConfig,
} from 'flowbite-angular/alert';
import { Button } from 'flowbite-angular/button';
import { Icon } from 'flowbite-angular/icon';
import { close, eye, infoCircle } from 'flowbite-angular/icon/outline/general';

import { provideIcons } from '@ng-icons/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = Alert;

export default {
  title: 'Component/Alert',
  component: Alert,
  decorators: [
    moduleMetadata({
      imports: [Icon, AlertButton, AlertContent, Button],
      providers: [provideIcons({ infoCircle, close, eye })],
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
} as Meta<StoryType>;

export const DefaultStory: StoryObj<StoryType> = {
  name: 'Default',
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
          <div flowbiteAlertContent>
            <span>
              <span class="font-medium">${args.color} alert!</span> Change a few things up and try submitting again.
            </span>
          </div>
      </div>
    `,
  }),
};

export const AlertIconStory: StoryObj<StoryType> = {
  name: 'Alert with icon',
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
          <div flowbiteAlertContent>
            <span class="inline-flex gap-2 items-center">
              <flowbite-icon name="infoCircle" class="size-5 stroke-2" />
              <span class="font-medium">${args.color} alert!</span> Change a few things up and try submitting again.
            </span>
          </div>
      </div>
    `,
  }),
};

export const DismissableAlertStory: StoryObj<StoryType> = {
  name: 'Dismissable Alert',
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
          <div flowbiteAlertContent>
            <span class="inline-flex gap-2 items-center">
              <flowbite-icon name="infoCircle" class="size-5 stroke-2" />
              <span>
                <span class="font-medium">${args.color} alert!</span> Change a few things up and try submitting again.
              </span>
            </span>
            <button flowbiteAlertButton>
              <flowbite-icon name="close" class="size-5 stroke-2" />
            </button>
          </div>
      </div>
    `,
  }),
};

export const AlertMoreContentStory: StoryObj<StoryType> = {
  name: 'Alert with more content',
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
        <div flowbiteAlertContent>
          <span class="inline-flex gap-2 items-center">
            <flowbite-icon name="infoCircle" class="size-5 stroke-2" />
            <h3 class="font-medium text-lg">This is a ${args.color} alert</h3>
          </span>
          <button flowbiteAlertButton>
            <flowbite-icon name="close" class="size-5 stroke-2" />
          </button>
        </div>
        <div>
          <div class="mt-2 mb-4 text-sm leading-6">
            More ${args.color} about this ${args.color} alert goes here. This example text is going to run a bit longer so
            that you can see how spacing within an alert works with this kind of content.
          </div>
          <div class="flex gap-2 items-center">
            <button flowbiteButton>
              <flowbite-icon name="eye" />
              View more
            </button>
            <button flowbiteButton outline>Dismiss</button>
          </div>
        </div>
      </div>
    `,
  }),
};
