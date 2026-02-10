import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, Query } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'
import {
  provideAngularQuery,
  provideQueryClient,
  provideTanStackQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { withDevtools } from '@tanstack/angular-query-experimental/devtools';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideZonelessChangeDetection(),
    provideHttpClient(),
    provideTanStackQuery(new QueryClient(), withDevtools())
  ]
};
