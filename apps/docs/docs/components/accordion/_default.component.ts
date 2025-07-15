import {
  AccordionComponent,
  AccordionContentComponent,
  AccordionPanelComponent,
  AccordionTitleComponent,
} from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-demo-accordion-default',
  standalone: true,
  imports: [AccordionComponent, AccordionTitleComponent, AccordionContentComponent, AccordionPanelComponent],
  template: `
    <flowbite-accordion class="w-full">
      <flowbite-accordion-panel [isOpen]="true">
        <flowbite-accordion-title>What is Flowbite ?</flowbite-accordion-title>
        <flowbite-accordion-content>
          <p class="text-base font-normal text-gray-600 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p class="text-base font-normal text-gray-600 dark:text-gray-400">
            Check out this guide to learn how to
            <a
              class="text-base font-medium underline text-gray-600 dark:text-gray-400 decoration-primary-600 dark:decoration-primary-500"
              href="https://flowbite.com/docs/getting-started/introduction/">
              Get started
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </flowbite-accordion-content>
      </flowbite-accordion-panel>
      <flowbite-accordion-panel>
        <flowbite-accordion-title>Is there a Figma file available ?</flowbite-accordion-title>
        <flowbite-accordion-content>
          <p class="text-base font-normal text-gray-600 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p class="text-base font-normal text-gray-600 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/">Figma design system</a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </flowbite-accordion-content>
      </flowbite-accordion-panel>
      <flowbite-accordion-panel>
        <flowbite-accordion-title>What are the differences between Flowbite and Tailwind UI ?</flowbite-accordion-title>
        <flowbite-accordion-content>
          <p class="text-base font-normal text-gray-600 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p class="text-base font-normal text-gray-600 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p class="text-base font-normal text-gray-600 dark:text-gray-400">Learn more about these technologies :</p>
          <ul class="text-base font-normal text-gray-600 dark:text-gray-400 list-disc list-inside">
            <li>
              <a
                class="text-base font-medium underline text-gray-600 dark:text-gray-400 decoration-primary-600 dark:decoration-primary-500"
                href="https://flowbite.com/pro/">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                class="text-base font-medium underline text-gray-600 dark:text-gray-400 decoration-primary-600 dark:decoration-primary-500"
                href="https://tailwindui.com/"
                rel="nofollow">
                Tailwind UI
              </a>
            </li>
          </ul>
        </flowbite-accordion-content>
      </flowbite-accordion-panel>
    </flowbite-accordion>
  `,
})
export class FlowbiteDefaultComponent {}
