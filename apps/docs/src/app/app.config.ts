import { ApplicationConfig } from '@angular/core';
import { appRoutes } from '@flowbite-angular-docs/app/app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)],
};
