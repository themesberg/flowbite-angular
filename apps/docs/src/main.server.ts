import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

import { bootstrapApplication } from '@angular/platform-browser';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
