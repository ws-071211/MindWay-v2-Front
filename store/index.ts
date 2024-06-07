import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import userSlice from './user';

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

const reducer = (state: RootState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default:
      return rootReducer(state, action);
  }
};

const makeStore = () => {
  return configureStore({
    reducer,
    devTools: process.env.NODE_ENV === 'development',
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export const store = makeStore();

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});
export default wrapper;
