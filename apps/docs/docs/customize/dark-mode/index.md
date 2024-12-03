---
keyword: DarkModePage
---

## Enable dark mode

All you need to do is add `flowbiteThemeDirective` as an hostDirective in you `app.component.ts`.

```angular-ts
...
import { FlowbiteThemeDirective } from 'flowbite-angular/theme';
...

@Component({
  ...
  hostDirectives: [FlowbiteThemeDirective],
})
export class AppComponent {
  ...
}
```

If your TailwindCSS configuration is based on the one provided by flowbite-angular, then everything
will be setup. Otherwise, you have to update your TailwindCSS configuration like this :

```javascript
module.exports = {
  darkMode: 'class',
};
```
