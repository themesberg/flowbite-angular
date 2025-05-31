import { FlowbiteButtonComponent, FlowbiteIconButtonDirective } from 'flowbite-angular/button';
import { FlowbiteIconComponent } from 'flowbite-angular/icon';
import { close } from 'flowbite-angular/icon/outline/general';

import { provideIcons } from '@ng-icons/core';
import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = FlowbiteIconButtonDirective & { disabled: boolean };

export default {
  title: 'Component/IconButton',
  component: FlowbiteIconButtonDirective,
  decorators: [
    moduleMetadata({
      imports: [FlowbiteIconComponent, FlowbiteButtonComponent],
      providers: [provideIcons({ close })],
    }),
  ],
  argTypes: {},
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <button flowbiteButton>
        <span>Button with icon</span>
        <flowbite-icon flowbiteIconButton name="close" ${argsToTemplate(args)} />
      </button>
    `,
  }),
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
};
