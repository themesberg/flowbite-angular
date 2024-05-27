import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideServerRendering } from '@angular/platform-server';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideClientHydration(),
    provideRouter(appRoutes),
    provideHttpClient(withFetch()),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
