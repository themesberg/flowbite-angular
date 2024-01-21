import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';
import { provideServerRendering } from '@angular/platform-server';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
