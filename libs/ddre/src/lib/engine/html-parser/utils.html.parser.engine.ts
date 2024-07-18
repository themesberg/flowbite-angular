/**
 * Convert a string Array into string with new lines
 * @param value string Array to convert
 * @returns The string Array as string
 */
export function stringArrayToString(value: string[]): string {
  let output: string = '';

  value.forEach((x) => {
    output += `${x}\n`;
  });

  return output;
}
