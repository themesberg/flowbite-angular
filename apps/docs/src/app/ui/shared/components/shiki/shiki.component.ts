import type { ThemeState } from 'flowbite-angular';
import { GlobalSignalStoreService, SanitizeHtmlPipe } from 'flowbite-angular';
import { codeToHtml } from 'shiki/bundle-web.mjs';
import type { BundledLanguage, ShikiTransformer } from 'shiki/bundle-web.mjs';

import { AsyncPipe, NgIf } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component, computed, effect, HostBinding, inject, Injector, input, signal } from '@angular/core';
import { of } from 'rxjs';
import type { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [NgIf, AsyncPipe, SanitizeHtmlPipe],
  selector: 'flowbite-shiki',
  templateUrl: './shiki.component.html',
})
export class ShikiComponent implements OnInit {
  @HostBinding('class') get hostClass() {
    return 'overflow-x-auto';
  }

  protected readonly themeSignalService = inject<GlobalSignalStoreService<ThemeState>>(
    GlobalSignalStoreService<ThemeState>,
  );
  protected readonly injector = inject(Injector);

  public codeAsync = input.required<Observable<string>, Observable<string> | string>({
    transform: (value: Observable<string> | string) => (typeof value === 'string' ? of(value) : value),
  });
  public language = input.required<BundledLanguage>();

  private code = signal<string>('');

  static shikiTransformers: ShikiTransformer[] = [
    {
      pre(node) {
        this.addClassToHast(node, 'p-4');
        this.addClassToHast(node, 'rounded-md');
        this.addClassToHast(node, 'overflow-x-auto');
      },
    },
  ];

  public displayCode = computed(() =>
    codeToHtml(this.code(), {
      lang: this.language(),
      theme: this.themeSignalService.select('theme')() === 'light' ? 'material-theme-lighter' : 'material-theme',
      transformers: ShikiComponent.shikiTransformers,
    }),
  );

  public ngOnInit(): void {
    effect(
      () => {
        this.codeAsync().subscribe((value) => this.code.set(value));
      },
      { allowSignalWrites: true, injector: this.injector },
    );
  }
}
