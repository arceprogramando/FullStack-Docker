import { RootState } from '../store';

export const selectRandomBoolean = (state: RootState) => state.random.randomBoolean;

export const selectError = (state: RootState) => state.random.error;
