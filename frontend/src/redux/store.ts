import { configureStore } from '@reduxjs/toolkit';
import randomReducer from './slice/randomSlice';
import { RandomState } from '../types/redux/randomTypes';

export interface RootState {
  random: RandomState;
}

const store = configureStore({
  reducer: {
    random: randomReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;
