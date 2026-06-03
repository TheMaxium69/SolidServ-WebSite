import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import { TYRO_RELAY_URL, TYRO_RELAY_PAGE_URL } from 'tyrolium-ui';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes,
        withInMemoryScrolling({
          scrollPositionRestoration: 'enabled',
          anchorScrolling: 'enabled'
        })),
    {
      provide: TYRO_RELAY_URL,
      useValue: isDevMode()
        ? 'http://localhost:9001/relay.html'  // port de tyrolium-website en dev
        : TYRO_RELAY_PAGE_URL,
    },
  ],
};
