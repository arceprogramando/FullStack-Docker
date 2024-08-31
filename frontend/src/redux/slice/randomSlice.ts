import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RandomState } from '../../types/redux/randomTypes';

const initialState: RandomState = {
  randomBoolean: null,
  error: null,
};

const randomSlice = createSlice({
  name: 'random',
  initialState,
  reducers: {
    setRandomBoolean(state, action: PayloadAction<boolean>) {
      state.randomBoolean = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { setRandomBoolean, setError } = randomSlice.actions;
export default randomSlice.reducer;
