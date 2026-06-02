import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TYRO_RELAY_URL, TYRO_THEME_RELAY_URL } from 'tyrolium-ui';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: TYRO_RELAY_URL,
      useValue: isDevMode()
        ? 'http://localhost:9001/theme-relay.html'  // tyrolium-website doit tourner sur :9001mai
        : TYRO_THEME_RELAY_URL,
    },
  ],
};
