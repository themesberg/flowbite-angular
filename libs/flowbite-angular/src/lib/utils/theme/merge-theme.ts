import { cloneDeep } from './clone-deep';
import { isObject } from './is-object';

/**
 * Merge two objects into one
 * @param target Object to be merged
 * @param source Object to be merged
 * @returns The merged object
 */
export function mergeTheme<T extends object, S extends object>(target: T, source: S): T & S {
  if (isObject(source) && Object.keys(source).length === 0) {
    return cloneDeep({ ...target, ...source });
  }

  const output = { ...target, ...source };

  if (isObject(source) && isObject(target)) {
    for (const key in source) {
      if (isObject(source[key]) && key in target && isObject(target[key])) {
        (output as Record<string, unknown>)[key] = mergeTheme(target[key] as object, source[key] as object);
      } else {
        (output as Record<string, unknown>)[key] = isObject(source[key]) ? cloneDeep(source[key]) : source[key];
      }
    }
  }

  return output;
}
