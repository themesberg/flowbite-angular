import type { Tree } from '@nx/devkit';
import { getWorkspaceLayout } from '@nx/devkit';

export function getPrimitivePath(tree: Tree, component: string): string {
  const { libsDir } = getWorkspaceLayout(tree);
  return `${libsDir}/flowbite-angular/${component}`;
}

export function getPrimitiveSourceRoot(tree: Tree, component: string): string {
  return `${getPrimitivePath(tree, component)}/src`;
}

export function getPrimitiveIndex(tree: Tree, component: string): string {
  return `${getPrimitiveSourceRoot(tree, component)}/index.ts`;
}

export function addExportToIndex(tree: Tree, component: string, exportStatement: string) {
  const indexPath = getPrimitiveIndex(tree, component);
  const indexContent = tree.read(indexPath)?.toString('utf-8') ?? '';

  if (indexContent.includes(exportStatement)) {
    return;
  }

  const newContent = `${indexContent.trim()}\n${exportStatement}`;
  tree.write(indexPath, newContent);
}
