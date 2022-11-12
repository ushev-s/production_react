import { DeepPartial } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

// test
export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => {
    return (
      <StoreProvider initialState={state}>
        <StoryComponent />
      </StoreProvider>
    );
  };
