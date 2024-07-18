/* eslint-disable @typescript-eslint/no-explicit-any */
import type { DDREEngineInput } from '../../core';
import { InvalidInputError } from '../../core/errors/invalid-input.error';
import { AComponent } from '../../testing/a.component';
import { parseInputToArrayString } from './core.html.parser.engine';

describe('core.html.parser.engine', () => {
  it('should give HTML p tag', () => {
    const source: DDREEngineInput<AComponent> = '<p>Hello World !</p>';

    const expectedResult = ['<p>Hello World !</p>'];

    const givenResult = parseInputToArrayString(source);

    expect(givenResult).toEqual(expectedResult);
  });

  it('should give basic component tag', () => {
    const source: DDREEngineInput<AComponent> = {
      component: AComponent,
      content: '<p>Hello World !</p>',
      context: [],
    };

    const expectedResult = ['<a>', '  <p>Hello World !</p>', '</a>'];

    const givenResult = parseInputToArrayString(source);

    expect(givenResult).toEqual(expectedResult);
  });

  it('should thrown error', () => {
    const source: DDREEngineInput<any> = {
      component: class A {},
      content: '',
      context: [],
    };

    expect(() => parseInputToArrayString(source)).toThrow(InvalidInputError);
  });

  it('should create more advanced components', () => {
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

    const expectedResult = [
      '<a>',
      '  <a disabled>',
      '    <p>Hello World !</p>',
      '  </a>',
      '  <a isOpen>',
      '    <p>Hello World 2 !</p>',
      '  </a>',
      '</a>',
    ];

    const givenResult = parseInputToArrayString(source);

    expect(givenResult).toEqual(expectedResult);
  });
});
