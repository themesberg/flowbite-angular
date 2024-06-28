import { AsyncPipe, NgIf } from '@angular/common';
import { BundledLanguage, ShikiTransformer, codeToHtml } from 'shiki';
import { Component, computed, inject, input } from '@angular/core';
import {
  GlobalSignalStoreService,
  SanitizeHtmlPipe,
  ThemeState,
} from 'flowbite-angular';

@Component({
  standalone: true,
  imports: [NgIf, AsyncPipe, SanitizeHtmlPipe],
  selector: 'flowbite-shiki',
  templateUrl: './shiki.component.html',
})
export class ShikiComponent {
  protected readonly themesignalService = inject<
    GlobalSignalStoreService<ThemeState>
  >(GlobalSignalStoreService<ThemeState>);

  static shikiTransformers: ShikiTransformer[] = [
    {
      pre(node) {
        this.addClassToHast(node, 'p-4');
        this.addClassToHast(node, 'overflow-x-auto');
        this.addClassToHast(node, 'rounded-md');
      },
    },
  ];

  public code = input.required<string>();
  public language = input.required<BundledLanguage>();

  public displayCode = computed<Promise<string>>(() => {
    return codeToHtml(this.code(), {
      lang: this.language(),
      theme:
        this.themesignalService.select('theme')() === 'light'
          ? 'material-theme-lighter'
          : 'material-theme',
      transformers: ShikiComponent.shikiTransformers,
    });
  });
}
