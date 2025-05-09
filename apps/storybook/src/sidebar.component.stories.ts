import {
  defaultFlowbiteSidebarConfig,
  FlowbiteSidebarComponent,
  FlowbiteSidebarContentComponent,
  FlowbiteSidebarItemComponent,
  FlowbiteSidebarToggleComponent,
} from 'flowbite-angular/sidebar';
import { FlowbiteSkeletonComponent } from 'flowbite-angular/skeleton';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = FlowbiteSidebarComponent;

export default {
  title: 'Component/Sidebar',
  component: FlowbiteSidebarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FlowbiteSidebarContentComponent,
        FlowbiteSidebarToggleComponent,
        FlowbiteSidebarItemComponent,
        FlowbiteSkeletonComponent,
      ],
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
          <li><a flowbiteSidebarItem>Item 1</a></li>
          <li><a flowbiteSidebarItem>Item 2</a></li>
          <li><a flowbiteSidebarItem>Item 3</a></li>
        </div>
      </aside>
      <div class="md:ml-48">
        <button flowbiteSidebarToggle [sidebar]="sidebar"></button>

        <div flowbiteSkeleton></div>
      </div>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
