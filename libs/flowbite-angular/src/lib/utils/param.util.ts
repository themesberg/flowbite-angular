/* eslint-disable @typescript-eslint/no-explicit-any */

export function paramNotNull(...source: any[]): boolean {
  return source.every((s) => (s ? true : false));
}
