import { FlowbiteIcon } from 'flowbite-angular/icon';
import { cart } from 'flowbite-angular/icon/solid/e-commerce';
import { chartPie, drawSquare, inbox } from 'flowbite-angular/icon/solid/general';
import { users } from 'flowbite-angular/icon/solid/user';
import {
  defaultFlowbiteSidebarConfig,
  FlowbiteSidebar,
  FlowbiteSidebarContent,
  FlowbiteSidebarItem,
  FlowbiteSidebarToggle,
} from 'flowbite-angular/sidebar';

import { provideIcons } from '@ng-icons/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = FlowbiteSidebar;

export default {
  title: 'Component/Sidebar',
  component: FlowbiteSidebar,
  decorators: [
    moduleMetadata({
      providers: [provideIcons({ chartPie, inbox, users, cart, drawSquare })],
      imports: [FlowbiteSidebarContent, FlowbiteSidebarToggle, FlowbiteSidebarItem, FlowbiteIcon],
    }),
  ],
  argTypes: {
    open: {
      control: 'boolean',
      type: 'boolean',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteSidebarConfig.open),
        },
      },
    },
    color: {
      control: 'select',
      type: 'string',
      options: [
        'default',
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
          summary: JSON.stringify(defaultFlowbiteSidebarConfig.color),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteSidebarConfig.customTheme),
        },
      },
    },
  },
  args: {
    open: defaultFlowbiteSidebarConfig.open,
    color: defaultFlowbiteSidebarConfig.color,
    customTheme: defaultFlowbiteSidebarConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <aside flowbiteSidebar ${argsToTemplate(args)} #sidebar>
        <div flowbiteSidebarContent>
          <li><a flowbiteSidebarItem><flowbite-icon name="chartPie" />Dashboard</a></li>
          <li><a flowbiteSidebarItem><flowbite-icon name="drawSquare" />Kanban</a></li>
          <li><a flowbiteSidebarItem><flowbite-icon name="inbox" />Inbox</a></li>
          <li><a flowbiteSidebarItem><flowbite-icon name="users" />Users</a></li>
          <li><a flowbiteSidebarItem><flowbite-icon name="cart" />Products</a></li>
          <li><a flowbiteSidebarItem>Sign In</a></li>
          <li><a flowbiteSidebarItem>Sign Up</a></li>
        </div>
      </aside>
      <div class="lg:ml-64">
        <button
          flowbiteSidebarToggle
          [sidebar]="sidebar"></button>

        <div class="p-4">
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
      </div>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
