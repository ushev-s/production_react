import { lazy } from 'react';

export const ProfilePageAsync = lazy(async () => await import('./ProfilePage'));
