import { FlowbiteClass } from './flowbite.theme';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class FlowbiteThemeService<TProperties> {
  public abstract getClasses(properties: TProperties): FlowbiteClass;
}
