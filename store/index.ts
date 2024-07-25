import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import {
  Persistor,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userSlice from './user';

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const reducer = (state: RootState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    if (state._persist) {
      nextState._persist = state._persist;
    }
    return nextState;
  } else {
    return persistedReducer(state, action);
  }
};

let persistor:Persistor;

const makeStore = () => {
  const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      }),
  });
  persistor = persistStore(store);
  return store;
};

export { persistor };

export type RootState = ReturnType<typeof rootReducer> & { _persist: any };

const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
