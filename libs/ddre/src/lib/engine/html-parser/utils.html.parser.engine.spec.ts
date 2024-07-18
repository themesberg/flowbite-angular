import { stringArrayToString } from './utils.html.parser.engine';

describe('utils.html.parser.engine', () => {
  it('should give one string from string array', () => {
    const source = ['Hello', 'World !', 'This', 'is', 'a', 'test', '.'];

    const expectedResult = `Hello
World !
This
is
a
test
.`;

    const givenResult = stringArrayToString(source);

    expect(givenResult).toEqual(expectedResult);
  });
});
