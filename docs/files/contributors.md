# Contributors

If you want to contribute to the project, you will need to follow some rules [described here](https://raw.githubusercontent.com/themesberg/flowbite-angular/refs/heads/main/CODE_OF_CONDUCT.md).

## BUILD-TOOLS

To contribute, you will need (of course) to be able to build and start the documentation locally ; here's how :

1. Make sure you have `Node.js > v20` installed
2. Run `git clone https://github.com/themesberg/flowbite-angular.git`
3. Run `npm i`
   > [!WARNING]
   > If some errors happen, check the logs ; it could be some dependencies outside Node.js (example with [parcel library](https://github.com/parcel-bundler/watcher) ; this library needs a C++ compiler installed on the computer)
4. Run `npm run docs:serve`
   > [!TIP]
   > This will start local dev server on `localhost:4200`

## How can I contribute

You won't be able to create branches inside the `flowbite-angular` repository. Instead, you can create a `fork` of the project, work on this fork and then create a `Pull Request`. You can see the complete documentation in the [GitHub documentation](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project)
