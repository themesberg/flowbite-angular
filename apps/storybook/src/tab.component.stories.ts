import {
  defaultFlowbiteTabConfig,
  Tab,
  TabButton,
  TabContent,
  TabList,
} from 'flowbite-angular/tab';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = Tab;

export default {
  title: 'Component/Tab',
  component: Tab,
  decorators: [
    moduleMetadata({
      imports: [TabButton, TabContent, TabList],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      type: 'string',
      options: ['sm', 'md', 'lg', 'full'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteTabConfig.size),
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
          summary: JSON.stringify(defaultFlowbiteTabConfig.color),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteTabConfig.customTheme),
        },
      },
    },
  },
} as Meta<StoryType>;

export const DefaultStory: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    size: defaultFlowbiteTabConfig.size,
    color: defaultFlowbiteTabConfig.color,
    customTheme: defaultFlowbiteTabConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <div flowbiteTab ${argsToTemplate(args)}>
        <ul flowbiteTabList>
          <li flowbiteTabButton value="profile">Profile</li>
          <li flowbiteTabButton value="dashboard">Dashboard</li>
          <li flowbiteTabButton value="settings">Settings</li>
          <li flowbiteTabButton value="contacts">Contacts</li>
          <li flowbiteTabButton value="disabled" disabled>Disabled</li>
        </ul>

        <div flowbiteTabContent value="profile">
          <p>
            Nulla cursus urna id felis egestas, ac rhoncus felis egestas. Curabitur placerat at quam vitae volutpat. Nunc at nunc nec ex dapibus sollicitudin nec eget risus. Curabitur id sagittis nisi, sit amet mollis quam. In hac habitasse platea dictumst. Praesent in augue vitae elit egestas euismod. Aliquam in tempus enim, et elementum lacus. Nullam commodo nulla sollicitudin euismod malesuada. Donec sed massa dui. Sed felis ipsum, malesuada eu urna scelerisque, accumsan pharetra odio. Nullam arcu augue, consequat vel faucibus at, dictum non erat. Morbi metus nisl, scelerisque non accumsan quis, fringilla vitae ipsum. Vestibulum fermentum lorem sit amet augue ultrices, eu pretium ex imperdiet. 
          </p>
        </div>
        <div flowbiteTabContent value="dashboard">
          <p>
            Curabitur nibh nisl, tincidunt id purus sed, consectetur vehicula sapien. Cras at malesuada felis, eget imperdiet enim. Maecenas commodo vestibulum turpis non ultrices. Donec ut aliquam ex, id molestie dui. Nullam porttitor ligula vel malesuada ullamcorper. Vivamus aliquam consectetur urna, tempus vehicula est consectetur vitae. Integer vitae commodo quam, eget cursus velit. Nam eget leo diam. 
          </p>
        </div>
        <div flowbiteTabContent value="settings">
          <p>
            Vivamus sed lacinia mauris. Integer vehicula lorem nec interdum rutrum. Curabitur auctor mollis faucibus. Nulla sit amet semper tortor. Vestibulum at tempus nulla, nec interdum orci. Integer sodales quam sit amet cursus interdum. Fusce consequat ultrices magna a iaculis. 
          </p>
        </div>
        <div flowbiteTabContent value="contacts">
          Sed eget pellentesque tellus. Praesent rutrum placerat lacus vitae elementum. Nulla ac orci ac enim dignissim finibus. Duis venenatis rhoncus eros. Etiam euismod tortor in vehicula lacinia. Morbi tempor mollis lacus, nec fringilla mauris vestibulum nec. Donec sapien lacus, semper a commodo eu, ullamcorper et turpis. 
        </div>
        <div flowbiteTabContent value="disabled">
          Disabled content. 
        </div>
      </div>
    `,
  }),
};
