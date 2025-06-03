import { FlowbiteButton } from 'flowbite-angular/button';
import {
  defaultFlowbiteCardConfig,
  FlowbiteCard,
  FlowbiteCardContent,
  FlowbiteCardHeader,
} from 'flowbite-angular/card';
import { FlowbiteIcon } from 'flowbite-angular/icon';
import { arrowRight } from 'flowbite-angular/icon/outline/arrows';
import { link } from 'flowbite-angular/icon/outline/general';

import { provideIcons } from '@ng-icons/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = FlowbiteCard;

export default {
  title: 'Component/Card',
  component: FlowbiteCard,
  decorators: [
    moduleMetadata({
      imports: [FlowbiteCardHeader, FlowbiteCardContent, FlowbiteButton, FlowbiteIcon],
      providers: [provideIcons({ arrowRight, link })],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['gray'],
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

export const Default: StoryObj<StoryType> = {
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
        <div flowbiteCardContent class="font-normal">
          <h5 flowbiteCardHeader>Noteworthy technology acquisitions 2021</h5>
          <p>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
      </div>
    `,
  }),
};

export const CardButton: StoryObj<StoryType> = {
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
        <div flowbiteCardContent class="font-normal">
          <h5 flowbiteCardHeader>Noteworthy technology acquisitions 2021</h5>
          <p class="mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <button flowbiteButton>
            <span>Read more</span>
            <flowbite-icon name="arrowRight" />
          </button>
        </div>
      </div>
    `,
  }),
};

export const CardLink: StoryObj<StoryType> = {
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
        <div flowbiteCardContent class="font-normal">
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

export const CardImage: StoryObj<StoryType> = {
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
        <div flowbiteCardContent class="font-normal">
          <h5 flowbiteCardHeader>Noteworthy technology acquisitions 2021</h5>
          <p class="mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <button flowbiteButton>
            <span>Read more</span>
            <flowbite-icon name="arrowRight" />
          </button>
        </div>
      </div>
    `,
  }),
};

export const CardOrientation: StoryObj<StoryType> = {
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
        <div flowbiteCardContent class="font-normal">
          <h5 flowbiteCardHeader>Noteworthy technology acquisitions 2021</h5>
          <p class="mb-3">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <button flowbiteButton>
            <span>Read more</span>
            <flowbite-icon name="arrowRight" />
          </button>
        </div>
      </div>
    `,
  }),
};
