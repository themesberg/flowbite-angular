import { FlowbiteButton } from 'flowbite-angular/button';
import {
  defaultFlowbiteFormFieldConfig,
  FlowbiteFormControl,
  FlowbiteFormField,
  FlowbiteHelper,
  FlowbiteLabel,
} from 'flowbite-angular/form';

import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate, moduleMetadata } from '@storybook/angular';

type StoryType = FlowbiteFormField & {
  disabled: boolean;
};

export default {
  title: 'Component/Form/FormField',
  component: FlowbiteFormField,
  decorators: [
    moduleMetadata({
      imports: [FlowbiteFormControl, FlowbiteLabel, FlowbiteHelper, FlowbiteButton],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      type: 'string',
      options: ['sm', 'md', 'xl'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteFormFieldConfig.size),
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
          summary: JSON.stringify(defaultFlowbiteFormFieldConfig.color),
        },
      },
    },
    mode: {
      control: 'select',
      type: 'string',
      options: ['normal', 'floating'],
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteFormFieldConfig.mode),
        },
      },
    },
    customTheme: {
      control: 'object',
      type: 'symbol',
      table: {
        category: 'Input',
        defaultValue: {
          summary: JSON.stringify(defaultFlowbiteFormFieldConfig.customTheme),
        },
      },
    },
  },
} as Meta<StoryType>;

export const Default: StoryObj<StoryType> = {
  name: 'Default',
  args: {
    size: defaultFlowbiteFormFieldConfig.size,
    color: defaultFlowbiteFormFieldConfig.color,
    mode: defaultFlowbiteFormFieldConfig.mode,
    customTheme: defaultFlowbiteFormFieldConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <form class="max-w-sm mx-auto">
        <div flowbiteFormField ${argsToTemplate(args)}>
          <label flowbiteLabel for="email">Email address</label>
          <input flowbiteFormControl id="email" name="email" placeholder="email@flowbite-angular.com" />
          <p flowbiteHelper>
            We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.
          </p>
        </div>
        <div flowbiteFormField ${argsToTemplate(args)}>
          <label flowbiteLabel for="password">Password</label>
          <input flowbiteFormControl id="password" name="password" placeholder="•••••••••" />
        </div>
        <button flowbiteButton color="info" type="submit" class="w-full">Submit</button>
      </form>
    `,
  }),
};

export const OutlineFormField: StoryObj<StoryType> = {
  name: 'Outline Form Field',
  args: {
    size: defaultFlowbiteFormFieldConfig.size,
    color: defaultFlowbiteFormFieldConfig.color,
    mode: 'floating',
    customTheme: defaultFlowbiteFormFieldConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <form class="max-w-sm mx-auto">
        <div flowbiteFormField ${argsToTemplate(args)}>
          <input flowbiteFormControl id="email" name="email" placeholder="" />
          <label flowbiteLabel for="email">Email address</label>
            <p flowbiteHelper>
              We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.
            </p>
        </div>
        <div flowbiteFormField ${argsToTemplate(args)}>
          <input flowbiteFormControl id="password" name="password" placeholder="" />
          <label flowbiteLabel for="password">Password</label>
        </div>
        <button flowbiteButton color="info" type="submit" class="w-full">Submit</button>
      </form>
    `,
  }),
};

export const DisabledFormControl: StoryObj<StoryType> = {
  name: 'Disabled Form Control',
  args: {
    size: defaultFlowbiteFormFieldConfig.size,
    color: defaultFlowbiteFormFieldConfig.color,
    mode: defaultFlowbiteFormFieldConfig.mode,
    customTheme: defaultFlowbiteFormFieldConfig.customTheme,
  },
  render: (args) => ({
    props: args,
    template: `
      <form class="max-w-sm mx-auto">
        <div flowbiteFormField ${argsToTemplate(args)}>
          <label flowbiteLabel for="email">Email address</label>
          <input flowbiteFormControl disabled id="email" name="email" placeholder="email@flowbite-angular.com" />
            <p flowbiteHelper>
              We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.
            </p>
        </div>
        <div flowbiteFormField ${argsToTemplate(args)}>
          <label flowbiteLabel for="password">Password</label>
          <input flowbiteFormControl disabled id="password" name="password" placeholder="•••••••••" />
        </div>
        <button flowbiteButton color="info" type="submit" class="w-full">Submit</button>
      </form>
    `,
  }),
};
