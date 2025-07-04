import type { DocumentationGeneratorSchema } from './schema';

import type { Tree } from '@nx/devkit';
import { generateFiles, joinPathFragments, names } from '@nx/devkit';

export async function componentGenerator(tree: Tree, options: DocumentationGeneratorSchema) {
  generateFiles(
    tree,
    joinPathFragments(__dirname, './files'),
    joinPathFragments('apps', 'docs', 'docs', 'components'),
    {
      ...options,
      ...names(options.componentName),
    }
  );
}

export default componentGenerator;
