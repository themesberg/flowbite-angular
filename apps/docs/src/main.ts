import { enableProdMode } from '@angular/core';

import { AppComponent } from '@flowbite-angular-docs/app/app.component';
import { appConfig } from '@flowbite-angular-docs/app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from '@flowbite-angular-docs/environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig).catch((e) => console.log(e));
