import type { DDREEngineInput } from '../../core';
import { getProjectableNodes } from './utils.component.parser.engine';

import { createComponent, type EnvironmentInjector, type Injector } from '@angular/core';

export function parseInputToCompiledComponent(
  input: DDREEngineInput<unknown>,
  environmentInjector: EnvironmentInjector,
  injector?: Injector,
): any {
  if (typeof input === 'string') {
    return input;
  } else {
    const componentContent: any[] = []; //.location.nativeElement

    if (typeof input.content === 'string') {
      componentContent.push(input.content);
    } else {
      if (Array.isArray(input.content)) {
        input.content.forEach((x) =>
          componentContent.push(parseInputToCompiledComponent(x, environmentInjector, injector)),
        );
      } else {
        componentContent.push(parseInputToCompiledComponent(input.content, environmentInjector, injector));
      }
    }

    const createdComponent = createComponent(input.component, {
      environmentInjector: environmentInjector,
      elementInjector: injector,
      projectableNodes: [getProjectableNodes(componentContent)],
    });

    return createdComponent;
  }
}
