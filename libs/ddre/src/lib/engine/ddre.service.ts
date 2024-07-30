import type { DDREEngineInput } from '../core';
import type { DDREEngineOutput } from '../core/engine-output';
import { getCompiledComponent } from './component-parser';
import { getString } from './html-parser/entry.html.parser.engine';

import type { Injector, ViewContainerRef } from '@angular/core';
import { EnvironmentInjector, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DDREService {
  protected environmentInjector = inject(EnvironmentInjector);

  /**
   * Generate EngineOutput from EngineInput
   *
   * @param input Describes what to generate
   * @returns
   */
  public generateString<T>(
    input: DDREEngineInput<T>,
    viewContainerRef: ViewContainerRef,
    injector?: Injector,
  ): DDREEngineOutput {
    return {
      plainHtml: getString(input),
      compiledHtml: getCompiledComponent(input, viewContainerRef, this.environmentInjector, injector), //TODO: Implement logic for compiledHtml
    };
  }
}
