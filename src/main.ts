import { provideRouter } from '@angular/router';
import aaa from './app/routes';
/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {App} from './app/app';

bootstrapApplication(App, {providers: [provideProtractorTestingSupport(), provideRouter(aaa)]})
.catch((err) =>
  console.error(err),
);
