import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from './api';

const initialState: State = {
  users: [],
  error: undefined,
};

export const usersLoad = createAsyncThunk('users/load', () => api.fetchUsers());

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(usersLoad.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(usersLoad.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { removeUser } = usersSlice.actions;

export default usersSlice.reducer;
