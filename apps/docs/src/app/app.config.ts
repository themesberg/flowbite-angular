import { ApplicationConfig } from '@angular/core';
import { appRoutes } from './app.routes';
import { initFlowbite } from 'flowbite-angular';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
    initFlowbite(),
  ],
};
