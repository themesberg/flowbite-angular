import type { DDREEngineInput } from '../core';
import type { DDREEngineOutput } from '../core/engine-output';
import { getString } from './html-parser/entry.html.parser.engine';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DDREService {
  /**
   * Generate EngineOutput from EngineInput
   *
   * @param input Describes what to generate
   * @returns
   */
  public generateString<T>(input: DDREEngineInput<T>): DDREEngineOutput {
    return {
      plainHtml: getString(input),
      compiledHtml: undefined,
    };
  }
}
