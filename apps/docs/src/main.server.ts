import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
