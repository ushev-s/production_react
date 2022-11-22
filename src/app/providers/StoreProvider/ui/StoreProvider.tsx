import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject>;
}

export const StoreProvider = ({
  children,
  initialState,
  asyncReducers
}: StoreProviderProps) => {
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as DeepPartial<ReducersMapObject>
  );
  return <Provider store={store}>{children}</Provider>;
};
