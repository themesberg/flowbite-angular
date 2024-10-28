import type { FlowbiteClass } from './type-definitions';

import { Injectable } from '@angular/core';

/**
 * Provide an abstract class used in theming system of flowbite-angular.
 */
@Injectable({
  providedIn: 'root',
})
export abstract class FlowbiteThemeService<TProperties> {
  /**
   * This function prepare the component's classes, based on properties, used in the template of the component.
   *
   * @param properties Properties of the component being styled.
   */
  public abstract getClasses(properties: TProperties): FlowbiteClass;
}
