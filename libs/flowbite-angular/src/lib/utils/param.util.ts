/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Check if source are not empty or undefined
 * @see https://stackoverflow.com/a/5515349
 * @param source List of data to be checked
 * @returns If the all sources are not null
 */
export function paramNotNull(...source: any[]): boolean {
  return source.every((s) => (s ? true : false));
}
