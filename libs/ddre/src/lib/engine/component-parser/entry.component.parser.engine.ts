import type { DDREEngineInput } from '../../core';
import { parseInputToCompiledComponent } from './core.component.parser.engine';

import { ComponentRef, type EnvironmentInjector, type Injector, type ViewContainerRef } from '@angular/core';

export function getCompiledComponent(
  input: DDREEngineInput<unknown> | DDREEngineInput<unknown>[],
  viewContainerRef: ViewContainerRef,
  environmentInjector: EnvironmentInjector,
  injector?: Injector,
): ViewContainerRef {
  viewContainerRef.clear();
  const aze: any[] = [];

  if (Array.isArray(input)) {
    input.forEach((x) => aze.push(getCompiledComponent(x, viewContainerRef, environmentInjector, injector)));
  } else {
    aze.push(parseInputToCompiledComponent(input, environmentInjector, injector));
  }

  aze.forEach((x) => {
    if (x instanceof ComponentRef) {
      viewContainerRef.insert(x.hostView);
    }
  });

  return viewContainerRef;
}
