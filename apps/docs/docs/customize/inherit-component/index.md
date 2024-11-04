---
keyword: InheriteComponent
---

## Inheriting components

If you want to add some functionalities to one or multiple components, then you can make a custom
component like this

```typescript
import { IndicatorComponent } from 'flowbite-angular/indicator';

import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-my-custom-indicator',
  imports: [],
  template: ``,
})
export class MyCustomIndicatorComponent extends IndicatorComponent {}
```
