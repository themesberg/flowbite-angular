import { Icon } from 'flowbite-angular/icon';
import { bars } from 'flowbite-angular/icon/outline/general';
import {
  defaultFlowbiteNavbarConfig,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarToggle,
} from 'flowbite-angular/navbar';

import { provideIcons } from '@ng-icons/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = Navbar;

export default {
  title: 'Component/Navbar',
  component: Navbar,
  decorators: [
    moduleMetadata({
      imports: [NavbarContent, NavbarItem, NavbarToggle, NavbarBrand, Icon],
      providers: [provideIcons({ bars })],
    }),
  ],
  argTypes: {
    fixed: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteNavbarConfig.fixed),
        },
      },
    },
    open: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteNavbarConfig.open),
        },
      },
    },
    color: {
      control: 'select',
      type: 'string',
      options: ['default', 'info', 'failure', 'success', 'warning', 'primary'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteNavbarConfig.color),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteNavbarConfig.customTheme),
        },
      },
    },
  },
} as Meta<StoryType>;

export const DefaultStory: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    fixed: defaultFlowbiteNavbarConfig.fixed,
    open: defaultFlowbiteNavbarConfig.open,
    color: defaultFlowbiteNavbarConfig.color,
    customTheme: defaultFlowbiteNavbarConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <nav flowbiteNavbar ${argsToTemplate(args)}>
        <a flowbiteNavbarBrand href="#">
          <span class="sr-only">Open navbar</span>
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <button flowbiteNavbarToggle>
          <flowbite-icon
            name="bars"
            class="size-5 stroke-2" />
        </button>
        <div flowbiteNavbarContent>
          <li><a flowbiteNavbarItem href="#">Home</a></li>
          <li><a flowbiteNavbarItem href="#">About</a></li>
          <li><a flowbiteNavbarItem href="#">Services</a></li>
          <li><a flowbiteNavbarItem href="#">Pricing</a></li>
          <li><a flowbiteNavbarItem href="#">Contact</a></li>
        </div>
      </nav>

      <div class="p-4 ${args.fixed ? 'mt-16' : ''}">
          <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
            @for (i of [0, 1]; track $index) {
              <div class="mb-4 grid grid-cols-3 gap-4">
                <div class="flex h-24 items-center justify-center rounded-sm bg-gray-50 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg
                      class="h-3.5 w-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"></path>
                    </svg>
                  </p>
                </div>
                <div class="flex h-24 items-center justify-center rounded-sm bg-gray-50 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg
                      class="h-3.5 w-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"></path>
                    </svg>
                  </p>
                </div>
                <div class="flex h-24 items-center justify-center rounded-sm bg-gray-50 dark:bg-gray-800">
                  <p class="text-2xl text-gray-400 dark:text-gray-500">
                    <svg
                      class="h-3.5 w-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 1v16M1 9h16"></path>
                    </svg>
                  </p>
                </div>
              </div>
              <div
                class="mb-4 flex h-48 items-center justify-center rounded-sm bg-gray-50 dark:bg-gray-800">
                <p class="text-2xl text-gray-400 dark:text-gray-500">
                  <svg
                    class="h-3.5 w-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18">
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 1v16M1 9h16"></path>
                  </svg>
                </p>
              </div>
            }
          </div>
        </div>
    `,
  }),
};
