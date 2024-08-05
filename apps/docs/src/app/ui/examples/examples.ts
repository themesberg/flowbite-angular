import type { BundledLanguage } from 'shiki/bundle-web.mjs';

import type { Observable } from 'rxjs';

export type Example = { language: BundledLanguage; code: Observable<string> };
