import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import {
  AccordionComponent,
  AccordionContentComponent,
  AccordionPanelComponent,
  AccordionTitleComponent,
} from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-accordion-default',
  standalone: true,
  imports: [
    AccordionComponent,
    AccordionTitleComponent,
    AccordionContentComponent,
    AccordionPanelComponent,
    FlowbiteFrameDisplayComponent,
  ],
  template: `
    <flowbite-frame-display>
      <flowbite-accordion class="w-full">
        <flowbite-accordion-panel isOpen>
          <flowbite-accordion-title>What is Flowbite ?</flowbite-accordion-title>
          <flowbite-accordion-content>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including
              buttons, dropdowns, modals, navbars, and more.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to
              <a
                class="text-blue-600 hover:underline dark:text-blue-500"
                href="https://flowbite.com/docs/getting-started/introduction/">
                get started
              </a>
              and start developing websites even faster with components on top of Tailwind CSS.
            </p>
          </flowbite-accordion-content>
        </flowbite-accordion-panel>
        <flowbite-accordion-panel>
          <flowbite-accordion-title>Is there a Figma file available ?</flowbite-accordion-title>
          <flowbite-accordion-content>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the
              library has a design equivalent in our Figma file.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out the
              <a
                class="text-blue-600 hover:underline dark:text-blue-500"
                href="https://flowbite.com/figma/">
                Figma design system
              </a>
              based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </flowbite-accordion-content>
        </flowbite-accordion-panel>
        <flowbite-accordion-panel>
          <flowbite-accordion-title>
            What are the differences between Flowbite and Tailwind UI ?
          </flowbite-accordion-title>
          <flowbite-accordion-content>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are open source under the MIT license,
              whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of pages.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
              technical reason stopping you from using the best of two worlds.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies :</p>
            <ul class="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  class="text-blue-600 hover:underline dark:text-blue-500"
                  href="https://flowbite.com/pro/">
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  class="text-blue-600 hover:underline dark:text-blue-500"
                  href="https://tailwindui.com/"
                  rel="nofollow">
                  Tailwind UI
                </a>
              </li>
            </ul>
          </flowbite-accordion-content>
        </flowbite-accordion-panel>
      </flowbite-accordion>
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameAccordionDefaultComponent {}
