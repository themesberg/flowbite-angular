import { FlowbiteDocDemoComponent } from '../../components/flowbite-doc-demo-displayer/flowbite-doc-demo-displayer.component';

import type { Injector } from '@angular/core';
import { Renderer2 } from '@angular/core';
import type { NgDocPageProcessor } from '@ng-doc/app';

export const docDemoDisplayerProcessor: NgDocPageProcessor<FlowbiteDocDemoComponent> = {
  component: FlowbiteDocDemoComponent,
  selector: 'ng-doc-demo',
  nodeToReplace: (element: Element, injector: Injector) => {
    // Get the renderer from the injector
    const renderer: Renderer2 = injector.get(Renderer2);
    // Create an anchor element to insert the `CustomTableComponent` in the correct place.
    const anchor: Element = renderer.createElement('div');

    // Insert the anchor before the table and return it
    return element.parentNode?.insertBefore(anchor, element) ?? element;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  extractOptions: (element: Element) => ({
    content: [[element]],
  }),
};
