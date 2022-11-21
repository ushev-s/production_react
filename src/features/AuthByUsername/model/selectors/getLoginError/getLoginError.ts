import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
