import {
  defaultFlowbiteAccordionConfig,
  FlowbiteAccordion,
  FlowbiteAccordionContent,
  FlowbiteAccordionItem,
  FlowbiteAccordionTitle,
} from 'flowbite-angular/accordion';
import { FlowbiteIcon } from 'flowbite-angular/icon';
import { chevronDown } from 'flowbite-angular/icon/outline/arrows';

import { NgClass } from '@angular/common';
import { provideIcons } from '@ng-icons/core';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular';

type StoryType = FlowbiteAccordion & {
  type: string;
  disabled: boolean;
  collapsible: boolean;
};

export default {
  title: 'Component/Accordion',
  component: FlowbiteAccordion,
  decorators: [
    moduleMetadata({
      imports: [
        FlowbiteAccordionItem,
        FlowbiteAccordionTitle,
        FlowbiteAccordionContent,
        FlowbiteIcon,
        NgClass,
      ],
      providers: [provideIcons({ chevronDown })],
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      type: 'string',
      options: ['default'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteAccordionConfig.color),
        },
      },
    },
    flush: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteAccordionConfig.flush),
        },
      },
    },
    type: {
      control: 'select',
      type: 'string',
      options: ['single', 'multiple'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: 'single',
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
    collapsible: {
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
          summary: JSON.stringify(defaultFlowbiteAccordionConfig.customTheme),
        },
      },
    },
  },
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    color: defaultFlowbiteAccordionConfig.color,
    flush: defaultFlowbiteAccordionConfig.flush,
    customTheme: defaultFlowbiteAccordionConfig.customTheme,
    type: 'single',
    disabled: false,
    collapsible: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div flowbiteAccordion ${argsToTemplate(args)}>
        <div flowbiteAccordionItem value="accordion-item-1">
          <h5 flowbiteAccordionTitle>What is Flowbite?</h5>
          <div flowbiteAccordionContent class="p-5">
            <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
            <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
          </div>
        </div>
        <div flowbiteAccordionItem value="accordion-item-2">
        <h5 flowbiteAccordionTitle>Is there a Figma file available?</h5>
          <div flowbiteAccordionContent class="p-5">
            <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
            <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
          </div>
        </div>
        <div flowbiteAccordionItem value="accordion-item-3">
          <h5 flowbiteAccordionTitle>What are the differences between Flowbite and Tailwind UI?</h5>
          <div flowbiteAccordionContent class="p-5">
            <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
              <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
              <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
            </ul>
          </div>
        </div>
      </div>
    `,
  }),
};

export const AccordionIcon: StoryObj<StoryType> = {
  name: 'Accordion with Icon',
  args: {
    color: defaultFlowbiteAccordionConfig.color,
    flush: defaultFlowbiteAccordionConfig.flush,
    customTheme: defaultFlowbiteAccordionConfig.customTheme,
    type: 'single',
    disabled: false,
    collapsible: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div flowbiteAccordion ${argsToTemplate(args)}>
          <div flowbiteAccordionItem value="accordion-item-1" #accordionItem1="flowbiteAccordionItem">
            <h5 flowbiteAccordionTitle>
              What is Flowbite?
              <flowbite-icon name="chevronDown" class="transition-transform duration-150" [ngClass]="{ 'rotate-180': accordionItem1.ngpAccordionItemState().open() }" />
            </h5>
            <div flowbiteAccordionContent class="p-5">
              <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
              <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
            </div>
          </div>
          <div flowbiteAccordionItem value="accordion-item-2" #accordionItem2="flowbiteAccordionItem">
            <h5 flowbiteAccordionTitle>
              Is there a Figma file available?
              <flowbite-icon name="chevronDown" class="transition-transform duration-150" [ngClass]="{ 'rotate-180': accordionItem2.ngpAccordionItemState().open() }" />
            </h5>
            <div flowbiteAccordionContent class="p-5">
              <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
              <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
            </div>
          </div>
          <div flowbiteAccordionItem value="accordion-item-3" #accordionItem3="flowbiteAccordionItem">
            <h5 flowbiteAccordionTitle>
              What are the differences between Flowbite and Tailwind UI?
              <flowbite-icon name="chevronDown" class="transition-transform duration-150" [ngClass]="{ 'rotate-180': accordionItem3.ngpAccordionItemState().open() }" />
            </h5>
            <div flowbiteAccordionContent class="p-5">
              <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
              <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
              <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
              </ul>
            </div>
          </div>
        </div>
    `,
  }),
};
