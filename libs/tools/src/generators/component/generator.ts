import { addExportToIndex } from '../../utils';
import storybookGenerator from '../storybook/generator';
import type { ComponentGeneratorSchema } from './schema';

import { librarySecondaryEntryPointGenerator } from '@nx/angular/generators';
import type { Tree } from '@nx/devkit';
import { formatFiles, generateFiles, joinPathFragments, names } from '@nx/devkit';

export async function componentGenerator(tree: Tree, options: ComponentGeneratorSchema) {
  try {
    await librarySecondaryEntryPointGenerator(tree, {
      library: 'flowbite-angular',
      name: options.directoryName,
      skipFormat: true,
      skipModule: true,
    });
  } catch (err) {
    console.log('Secondary entrypoint cannot be created.\n\rMaybe it was created before.');
  }

  if (options.type === 'component') {
    generateFiles(
      tree,
      joinPathFragments(__dirname, './files', 'component'),
      joinPathFragments('libs', 'flowbite-angular'),
      {
        ...options,
        ...names(options.name),
      }
    );
  } else if (options.type === 'directive') {
    generateFiles(
      tree,
      joinPathFragments(__dirname, './files', 'directive'),
      joinPathFragments('libs', 'flowbite-angular'),
      {
        ...options,
        ...names(options.name),
      }
    );
  }

  {
    const nameFormats = names(options.name);

    addExportToIndex(
      tree,
      options.directoryName,
      `
  /* ${nameFormats.className} */
  ${options.type === 'component' ? `export * from './${nameFormats.fileName}/${nameFormats.fileName}.component';` : `export * from './${nameFormats.fileName}/${nameFormats.fileName}.directive';`}
  export * from './${nameFormats.fileName}/${nameFormats.fileName}-state';
  export * from './${nameFormats.fileName}/theme';
  /* Config */
  export * from './config/${nameFormats.fileName}-config';
      `
    );
  }

  if (options.addStorybook) {
    await storybookGenerator(tree, {
      name: options.name,
      directoryName: options.directoryName,
    });
  }

  await formatFiles(tree);
}

export default componentGenerator;
