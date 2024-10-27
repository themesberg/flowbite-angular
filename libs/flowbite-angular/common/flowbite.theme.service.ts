import type { FlowbiteClass } from './type-definitions';

import { Injectable } from '@angular/core';

/**
 * Provide an abstract class used in themeing system of flowbite-angular.
 */
@Injectable({
  providedIn: 'root',
})
export abstract class FlowbiteThemeService<TProperties> {
  public abstract getClasses(properties: TProperties): FlowbiteClass;
}
