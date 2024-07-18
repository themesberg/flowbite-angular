import type { Type } from '@angular/core';

/**
 * Interface for DDRE input used to generate both plain string and compiled HTML
 *
 * @example
 * <caption>
 *  const ei: EngineInput<FooComponent> = {
 *    component: FooComponent,
 *    context= ["disabled"]
 *    content: '<p>Hello world !</p>'
 *  }
 * </caption>
 *
 * @interface
 */
export type DDREEngineInput<T> =
  | {
      component: Type<T>;
      context?: string[];
      content: DDREEngineInput<unknown> | DDREEngineInput<unknown>[];
    }
  | string;
