import { StateSchema } from 'app/providers/StoreProvider';

export const getUserAuthData = (state: StateSchema) => state.user.authData;
