import { IconComponent } from 'flowbite-angular';

import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'flowbite-copy-package-input',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="relative">
      <input
        #inputElement
        [value]="value"
        readonly
        disabled
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-80 h-12 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-400" />
      <span
        (click)="copyToClipboard()"
        class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
        [ngClass]="{ 'text-gray-500': !isJustCopied, 'text-primary-700': isJustCopied }">
        @if (!isJustCopied) {
          <flowbite-icon
            svgIcon="solid:clipboard"
            class="h-5 w-5 block text-primary-700" />
        } @else {
          <flowbite-icon
            svgIcon="outline:check"
            class="h-5 w-5 block text-primary-700" />
        }
        <div
          class="absolute left-1/2 -translate-x-1/2 -top-8 bg-gray-800 text-white px-2 py-1 rounded text-xs"
          [ngClass]="{ 'opacity-0': !isJustCopied, 'opacity-100': isJustCopied }">
          {{ isJustCopied ? 'Copied!' : 'Copy to clipboard' }}
        </div>
      </span>
    </div>
  `,
})
export class CopyPackageInputComponent {
  value: string = 'npm i flowbite flowbite-angular';
  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;
  isJustCopied: boolean = false;

  copyToClipboard(): void {
    const textToCopy = this.inputElement.nativeElement.value;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        this.showCopiedFeedback();
      });
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        this.showCopiedFeedback();
      } catch (err) {
        console.error('Unable to copy to clipboard', err);
      }
      document.body.removeChild(textArea);
    }
  }

  private showCopiedFeedback(): void {
    this.isJustCopied = true;
    setTimeout(() => (this.isJustCopied = false), 2000);
  }
}
