import { appRoutes } from './app.routes';

import { initFlowbite } from 'flowbite-angular';

import { provideHttpClient, withFetch } from '@angular/common/http';
import type { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideRouter(appRoutes), provideHttpClient(withFetch()), initFlowbite()],
};
