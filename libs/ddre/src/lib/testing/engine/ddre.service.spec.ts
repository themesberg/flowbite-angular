import type { DDREEngineInput, DDREEngineOutput } from '../../../public_api';
import { DDREService } from '../../../public_api';
import { AComponent } from '../a.component';

import { TestBed } from '@angular/core/testing';

describe('DDREService', () => {
  let service: DDREService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DDREService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should give clean DDREEngineOutput', () => {
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

    const expectedResult: DDREEngineOutput = {
      plainHtml: `<a>
  <a disabled>
    <p>Hello World !</p>
  </a>
  <a isOpen>
    <p>Hello World 2 !</p>
  </a>
</a>`,
      compiledHtml: undefined,
    };

    const givenResult = service.generateString(source);

    expect(givenResult).toEqual(expectedResult);
  });
});
