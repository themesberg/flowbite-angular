# tools

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build tools` to build the library.

## Runing tools

### Component generation tool

Command : `pnpm dlx nx g flowbite-angular-tools:component` | `nx g flowbite-angular-tools:component`

Desc : This component will be located in `libs/flowbite-angular/`.

| parameter     | description                                                 |
| ------------- | ----------------------------------------------------------- |
| directoryName | The directory where the component group will be created     |
| name          | The name of the component created inside the directory name |

Ex :

Params :

| parameter     | description |
| ------------- | ----------- |
| directoryName | test        |
| name          | test1       |

Result :

```bash
CREATE libs/flowbite-angular/test/ng-package.json
CREATE libs/flowbite-angular/test/src/test1/test1-state.ts
CREATE libs/flowbite-angular/test/src/test1/test1.component.ts
CREATE libs/flowbite-angular/test/src/test1/theme.ts
CREATE libs/flowbite-angular/test/src/config/test1-config.ts
CREATE libs/flowbite-angular/test/src/index.ts
```
