import type { FlowbiteClass } from '../common/type-definitions/flowbite.class';

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
