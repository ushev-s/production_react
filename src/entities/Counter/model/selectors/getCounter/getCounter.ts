import { StateSchema } from 'app/providers/StoreProvider';

export const getCounter = (state: StateSchema) => state.counter;
