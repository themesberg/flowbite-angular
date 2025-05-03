import { addExportToIndex } from '../utils';
import type { ComponentGeneratorSchema } from './schema';

import { librarySecondaryEntryPointGenerator } from '@nx/angular/generators';
import type { Tree } from '@nx/devkit';
import { formatFiles, generateFiles, joinPathFragments, names } from '@nx/devkit';

export async function componentGenerator(tree: Tree, options: ComponentGeneratorSchema) {
  await librarySecondaryEntryPointGenerator(tree, {
    library: 'flowbite-angular',
    name: options.name,
    skipFormat: true,
    skipModule: true,
  });

  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    joinPathFragments('libs', 'flowbite-angular'),
    {
      ...options,
      ...names(options.name),
    }
  );

  {
    const nameFormats = names(options.name);

    addExportToIndex(
      tree,
      options.directoryName,
      `
  /* ${nameFormats.className} */
  export { Flowbite${nameFormats.className}Component } from './${nameFormats.fileName}/${nameFormats.fileName}.component';
  export {
    Flowbite${nameFormats.className}StateToken,
    flowbite${nameFormats.className}State,
    injectFlowbite${nameFormats.className}State,
    provideFlowbite${nameFormats.className}State,
  } from './${nameFormats.fileName}/${nameFormats.fileName}-state';
  export {
    Flowbite${nameFormats.className}HostTheme,
    Flowbite${nameFormats.className}Theme,
    flowbite${nameFormats.className}Theme,
  } from './${nameFormats.fileName}/theme';
  /* Config */
  export {
    Flowbite${nameFormats.className}Config,
    Flowbite${nameFormats.className}ConfigToken,
    defaultFlowbite${nameFormats.className}Config,
    injectFlowbite${nameFormats.className}Config,
    provideFlowbite${nameFormats.className}Config,
  } from './config/${nameFormats.fileName}-config';
      `
    );
  }

  await formatFiles(tree);
}

export default componentGenerator;
