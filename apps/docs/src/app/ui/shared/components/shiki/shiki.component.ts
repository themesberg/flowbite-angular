import type { ThemeState } from 'flowbite-angular';
import { GlobalSignalStoreService, SanitizeHtmlPipe } from 'flowbite-angular';
import { codeToHtml, type BundledLanguage, type ShikiTransformer } from 'shiki/bundle-web.mjs';

import { AsyncPipe, NgIf } from '@angular/common';
import { Component, computed, HostBinding, inject, input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, AsyncPipe, SanitizeHtmlPipe],
  selector: 'flowbite-shiki',
  templateUrl: './shiki.component.html',
})
export class ShikiComponent {
  @HostBinding('class')
  protected get hostClass() {
    return 'overflow-x-auto';
  }

  protected readonly themeSignalService = inject<GlobalSignalStoreService<ThemeState>>(
    GlobalSignalStoreService<ThemeState>,
  );

  public code = input.required<string>();
  public language = input.required<BundledLanguage>();

  static shikiTransformers: ShikiTransformer[] = [
    {
      pre(node) {
        this.addClassToHast(node, 'p-4');
        this.addClassToHast(node, 'rounded-md');
        this.addClassToHast(node, 'overflow-x-auto');
      },
    },
  ];

  public displayCode = computed<Promise<string>>(() => {
    return codeToHtml(this.code().trim(), {
      lang: this.language(),
      theme: this.themeSignalService.select('theme')() === 'light' ? 'material-theme-lighter' : 'material-theme',
      transformers: ShikiComponent.shikiTransformers,
    });
  });
}
