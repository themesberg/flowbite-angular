export function getProjectableNodes(input: any[]): Node[] {
  const output: Node[] = [];

  input.forEach((x) => {
    if (typeof x === 'string') {
      const nodes = new DOMParser().parseFromString(x, 'text/html').body.childNodes;

      nodes.forEach((x) => output.push(x));
    } else {
      if (x.location.nativeElement) {
        output.push(x.location.nativeElement);
      }
    }
  });

  return output;
}
