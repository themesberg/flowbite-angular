import type { Tree } from '@nx/devkit';
import { getWorkspaceLayout } from '@nx/devkit';

export function getComponentPath(tree: Tree, component: string): string {
  const { libsDir } = getWorkspaceLayout(tree);
  return `${libsDir}/flowbite-angular/${component}`;
}

export function getComponentSourceRoot(tree: Tree, component: string): string {
  return `${getComponentPath(tree, component)}/src`;
}

export function getComponentIndex(tree: Tree, component: string): string {
  return `${getComponentSourceRoot(tree, component)}/index.ts`;
}

export function addExportToIndex(tree: Tree, component: string, exportStatement: string) {
  const indexPath = getComponentIndex(tree, component);
  const indexContent = tree.read(indexPath)?.toString('utf-8') ?? '';

  if (indexContent.includes(exportStatement)) {
    return;
  }

  const newContent = `${indexContent.trim()}\n${exportStatement}`;
  tree.write(indexPath, newContent);
}
