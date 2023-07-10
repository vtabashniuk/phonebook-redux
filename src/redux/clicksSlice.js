import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const clicksSlice = createSlice({
  name: 'clicks',
  initialState,
  reducers: {
    increment(state, action) {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
    reset: state => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = clicksSlice.actions;

export const clicksReducer = clicksSlice.reducer;

