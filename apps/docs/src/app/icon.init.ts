import * as iconListJson from '../assets/icons/icon.list.json';

import type { IconRegistry } from 'flowbite-angular/icon';

import type { DomSanitizer } from '@angular/platform-browser';

export function initIcons(iconRegistry: IconRegistry, sanitizer: DomSanitizer) {
  return () => {
    const iconList = (iconListJson as any).default as [
      { namespace: string; name: string; path: string },
    ];

    iconList.forEach((iconData) =>
      iconRegistry.addSvgIconInNamespace(
        iconData.namespace,
        iconData.name,
        sanitizer.bypassSecurityTrustResourceUrl(iconData.path)
      )
    );

    iconRegistry.addSvgIcon(
      'flowbite-angular-logo',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/flowbite-angular-logo.svg')
    );
  };
}
