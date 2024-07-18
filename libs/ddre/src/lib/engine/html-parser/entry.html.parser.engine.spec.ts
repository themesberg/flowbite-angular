import type { DDREEngineInput } from '../../core';
import { AComponent } from '../../testing/a.component';
import { getString } from './entry.html.parser.engine';

describe('entry.html.parser.engine', () => {
  it('should give formatted HTML as string', () => {
    const source: DDREEngineInput<AComponent> = {
      component: AComponent,
      context: [],
      content: [
        {
          component: AComponent,
          context: ['disabled'],
          content: '<p>Hello World !</p>',
        },
        {
          component: AComponent,
          context: ['isOpen'],
          content: '<p>Hello World 2 !</p>',
        },
      ],
    };

    const expectedResult = `<a>
  <a disabled>
    <p>Hello World !</p>
  </a>
  <a isOpen>
    <p>Hello World 2 !</p>
  </a>
</a>`;

    const givenResult = getString(source);

    expect(givenResult).toEqual(expectedResult);
  });
});
