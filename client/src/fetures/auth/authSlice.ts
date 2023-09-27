import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/State';
import * as api from '../users/api';
import { AuthUser } from './types/types';

const initialState: State = {
  authUser: undefined,
  error: undefined,
};

export const signUp = createAsyncThunk('auth/sign-up', (user: AuthUser) =>
  api.fetchSignUp(user)
);

export const checkAuto = createAsyncThunk('auth/sign-in', (user: AuthUser) =>
  api.fetchSignIn(user)
);

export const authcheckUser = createAsyncThunk('auth/check', () =>
  api.fetchCheckUser()
);

export const logOut = createAsyncThunk('auth/logout', () => api.fetchLogOut());
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Sign Up
      .addCase(signUp.fulfilled, (state, action) => {
        state.authUser = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // Check Auto
      .addCase(checkAuto.fulfilled, (state, action) => {
        state.authUser = action.payload;
      })
      .addCase(checkAuto.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // Auth check user
      .addCase(authcheckUser.fulfilled, (state, action) => {
        state.authUser = action.payload;
      })
      .addCase(authcheckUser.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // Log Out
      .addCase(logOut.fulfilled, (state) => {
        state.authUser = undefined;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
