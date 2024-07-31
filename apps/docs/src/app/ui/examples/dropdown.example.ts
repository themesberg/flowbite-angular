import type { Example } from './examples';

export const defaultDropdown: Example[] = [
  {
    language: 'html',
    code: `
<flowbite-dropdown>
  <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
  <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
  <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>
    `,
  },
];
export const dividerDropdown: Example[] = [
  {
    language: 'html',
    code: `
<flowbite-dropdown>
  <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
  <flowbite-dropdown-divider />
  <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
  <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>
    `,
  },
];
export const headerDropdown: Example[] = [
  {
    language: 'html',
    code: `
<flowbite-dropdown>
  <flowbite-dropdown-header>
    <span className="block text-sm">Bonnie Green</span>
    <span className="block truncate text-sm font-medium">bonnie&#64;flowbite.com</span>
  </flowbite-dropdown-header>
  <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
  <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
  <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>
    `,
  },
];
export const placedDropdown: Example[] = [
  {
    language: 'html',
    code: `
<flowbite-dropdown position="top-center" label="Top start">
    <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>
<flowbite-dropdown position="left-center" label="Left start">
    <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>
<flowbite-dropdown position="right-center" label="Right end">
    <flowbite-dropdown-item>Item 1</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 2</flowbite-dropdown-item>
    <flowbite-dropdown-item>Item 3</flowbite-dropdown-item>
</flowbite-dropdown>
    `,
  },
];
