import { lazy } from 'react';

export const MainPageAsync = lazy(async () => await import('./MainPage'));
