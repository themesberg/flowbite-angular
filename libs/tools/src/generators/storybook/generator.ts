import type { StorybookGeneratorSchema } from './schema';

import type { Tree } from '@nx/devkit';
import { formatFiles, generateFiles, joinPathFragments, names } from '@nx/devkit';

export async function storybookGenerator(tree: Tree, options: StorybookGeneratorSchema) {
  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    joinPathFragments('apps', 'storybook', 'src'),
    {
      ...options,
      ...names(options.name),
    }
  );

  await formatFiles(tree);
}

export default storybookGenerator;
