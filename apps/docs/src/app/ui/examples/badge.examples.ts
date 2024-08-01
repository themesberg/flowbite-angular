import type { Example } from './examples';

export const defaultBadge: Example[] = [
  {
    language: 'html',
    code: `
<flowbite-badge>Default</flowbite-badge>
<flowbite-badge color="dark">Dark</flowbite-badge>
<flowbite-badge color="red">Red</flowbite-badge>
<flowbite-badge color="green">Green</flowbite-badge>
<flowbite-badge color="yellow">Yellow</flowbite-badge>
<flowbite-badge color="indigo">Indigo</flowbite-badge>
<flowbite-badge color="purple">Purple</flowbite-badge>
<flowbite-badge color="pink">Pink</flowbite-badge>
      `,
  },
];
export const largeBadge: Example[] = [
  {
    language: 'html',
    code: `
<flowbite-badge size="sm">Default</flowbite-badge>
<flowbite-badge color="dark" size="sm">Dark</flowbite-badge>
<flowbite-badge color="red" size="sm">Red</flowbite-badge>
<flowbite-badge color="green" size="sm">Green</flowbite-badge>
<flowbite-badge color="yellow" size="sm">Yellow</flowbite-badge>
<flowbite-badge color="indigo" size="sm">Indigo</flowbite-badge>
<flowbite-badge color="purple" size="sm">Purple</flowbite-badge>
<flowbite-badge color="pink" size="sm">Pink</flowbite-badge>
`,
  },
];
export const linkBadge: Example[] = [
  {
    language: 'html',
    code: `
<flowbite-badge link="/docs/components/badge">Default</flowbite-badge>
<flowbite-badge link="/docs/components/badge" size="sm">Default</flowbite-badge>`,
  },
];
export const iconBadge: Example[] = [
  {
    language: 'html',
    code: `
<flowbite-badge>
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-3 w-3" height="1em"width="1em" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd"d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
  </svg>
  2 minutes ago
</flowbite-badge>
<flowbite-badge color="dark">
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
  </svg>
  3 days ago
</flowbite-badge>
      `,
  },
];
export const iconOnlyBadge: Example[] = [
  {
    language: 'html',
    code: `
<flowbite-badge isIconOnly>
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
  </svg>
</flowbite-badge>
<flowbite-badge isIconOnly color="dark">
  <svg stroke="currentColor"fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
  </svg>
</flowbite-badge>
<flowbite-badge isIconOnly size="sm">
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-3.5 w-3.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
  </svg>
</flowbite-badge>
<flowbite-badge isIconOnly color="dark" size="sm">
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-3.5 w-3.5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
  </svg>
</flowbite-badge>
    `,
  },
];
