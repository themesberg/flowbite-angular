import { Button } from 'flowbite-angular/button';
import { Card, CardContent, CardHeader, defaultFlowbiteCardConfig } from 'flowbite-angular/card';
import { Dropdown, DropdownItem } from 'flowbite-angular/dropdown';
import { Icon } from 'flowbite-angular/icon';
import { arrowRight } from 'flowbite-angular/icon/outline/arrows';
import { dotsHorizontal, link } from 'flowbite-angular/icon/outline/general';

import { provideIcons } from '@ng-icons/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import { NgpMenuTrigger } from 'ng-primitives/menu';

type StoryType = Card;

export default {
  title: 'Component/Card',
  component: Card,
  decorators: [
    moduleMetadata({
      imports: [CardHeader, CardContent, Button, Icon, NgpMenuTrigger, Dropdown, DropdownItem],
      providers: [provideIcons({ arrowRight, link, dotsHorizontal })],
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
          summary: JSON.stringify(defaultFlowbiteCardConfig.color),
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
          summary: JSON.stringify(defaultFlowbiteCardConfig.size),
        },
      },
    },
    orientation: {
      control: 'select',
      type: 'string',
      options: ['vertical', 'horizontal'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteCardConfig.orientation),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteCardConfig.customTheme),
        },
      },
    },
  },
} as Meta<StoryType>;

export const DefaultStory: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    color: defaultFlowbiteCardConfig.color,
    size: defaultFlowbiteCardConfig.size,
    orientation: defaultFlowbiteCardConfig.orientation,
    customTheme: defaultFlowbiteCardConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <div flowbiteCard ${argsToTemplate(args)}>
        <div flowbiteCardContent>
          <h5 flowbiteCardHeader>Noteworthy technology acquisitions 2021</h5>
          <p>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
      </div>
    `,
  }),
};

export const CardButtonStory: StoryObj<StoryType> = {
  name: 'Card with button',
  args: {
    color: defaultFlowbiteCardConfig.color,
    size: defaultFlowbiteCardConfig.size,
    orientation: defaultFlowbiteCardConfig.orientation,
    customTheme: defaultFlowbiteCardConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <div flowbiteCard ${argsToTemplate(args)}>
        <div flowbiteCardContent>
          <h5 flowbiteCardHeader>Noteworthy technology acquisitions 2021</h5>
          <p class="mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <button flowbiteButton color="info">
            <span>Read more</span>
            <flowbite-icon name="arrowRight" />
          </button>
        </div>
      </div>
    `,
  }),
};

export const CardLinkStory: StoryObj<StoryType> = {
  name: 'Card with link',
  args: {
    color: defaultFlowbiteCardConfig.color,
    size: defaultFlowbiteCardConfig.size,
    orientation: defaultFlowbiteCardConfig.orientation,
    customTheme: defaultFlowbiteCardConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <div flowbiteCard ${argsToTemplate(args)}>
        <div flowbiteCardContent>
          <h5 flowbiteCardHeader>Need a help in Claim?</h5>
          <p class="mb-3">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
          <a href="#" class="inline-flex text-blue-600 hover:underline">
            See our guideline
            <flowbite-icon name="link" />
          </a>
        </div>
      </div>
    `,
  }),
};

export const CardImageStory: StoryObj<StoryType> = {
  name: 'Card with image',
  args: {
    color: defaultFlowbiteCardConfig.color,
    size: defaultFlowbiteCardConfig.size,
    orientation: defaultFlowbiteCardConfig.orientation,
    customTheme: defaultFlowbiteCardConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <div flowbiteCard ${argsToTemplate(args)}>
        <img class="rounded-t-lg size-full object-cover" src="images/image-1.jpg" alt="" />
        <div flowbiteCardContent>
          <h5 flowbiteCardHeader>Noteworthy technology acquisitions 2021</h5>
          <p class="mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <button flowbiteButton color="info">
            <span>Read more</span>
            <flowbite-icon name="arrowRight" />
          </button>
        </div>
      </div>
    `,
  }),
};

export const CardOrientationStory: StoryObj<StoryType> = {
  name: 'Horizontal Card',
  args: {
    color: defaultFlowbiteCardConfig.color,
    size: defaultFlowbiteCardConfig.size,
    orientation: 'horizontal',
    customTheme: defaultFlowbiteCardConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <div flowbiteCard ${argsToTemplate(args)}>
        <img class="rounded-t-lg h-96 object-cover" src="images/image-2.jpg" alt="" />
        <div flowbiteCardContent>
          <h5 flowbiteCardHeader>Noteworthy technology acquisitions 2021</h5>
          <p class="mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <button flowbiteButton color="info">
            <span>Read more</span>
            <flowbite-icon name="arrowRight" />
          </button>
        </div>
      </div>
    `,
  }),
};

export const UserProfileCardStory: StoryObj<StoryType> = {
  name: 'User profile Card',
  args: {
    color: defaultFlowbiteCardConfig.color,
    size: 'sm',
    orientation: defaultFlowbiteCardConfig.orientation,
    customTheme: defaultFlowbiteCardConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <div flowbiteCard ${argsToTemplate(args)}>
        <div class="flex justify-end px-4 pt-4">
          <button flowbiteButton color="default" class="border-none dark:border-none" [ngpMenuTrigger]="dropdownMenu">
            <flowbite-icon name="dotsHorizontal" class="size-4 stroke-2" />
          </button>

          <ng-template #dropdownMenu>
            <div flowbiteDropdown ${argsToTemplate(args)}>
              <li flowbiteDropdownItem>Edit</li>
              <li flowbiteDropdownItem>Export data</li>
              <li flowbiteDropdownItem class="text-red-400">Delete</li>
            </div>
          </ng-template>
        </div>
        <div flowbiteCardContent>
          <div class="flex flex-col items-center pb-10">
            <div>
              <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="images/people/profile-1.jpg" alt="" />
            </div>
            <h5 flowbiteCardHeader>Bonnie Green</h5>
            <span>Visual designer</span>
            <div class="flex mt-4 md:mt-6 gap-2">
              <button flowbiteButton color="info">Add frient</button>
              <button flowbiteButton outline color="default">Message</button>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
