import {
  defaultFlowbiteNavbarConfig,
  FlowbiteNavbarBrandComponent,
  FlowbiteNavbarComponent,
  FlowbiteNavbarContentComponent,
  FlowbiteNavbarItemComponent,
  FlowbiteNavbarToggleComponent,
} from 'flowbite-angular/navbar';
import { FlowbiteSkeletonComponent } from 'flowbite-angular/skeleton';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = FlowbiteNavbarComponent;

export default {
  title: 'Component/Navbar',
  component: FlowbiteNavbarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        FlowbiteNavbarContentComponent,
        FlowbiteNavbarItemComponent,
        FlowbiteNavbarToggleComponent,
        FlowbiteNavbarBrandComponent,
        FlowbiteSkeletonComponent,
      ],
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
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <button flowbiteNavbarToggle></button>
        <div flowbiteNavbarContent>
          <li><a flowbiteNavbarItem href="#">Item 1</a></li>
          <li><a flowbiteNavbarItem href="#">Item 2</a></li>
          <li><a flowbiteNavbarItem href="#">Item 3</a></li>
        </div>
      </nav>

      <div flowbiteSkeleton></div>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
