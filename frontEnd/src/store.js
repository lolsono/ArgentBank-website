// src/features/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action asynchrone pour la connexion
export const loginSuccess = (user) => ({
  type: 'user/loginSuccess',
  payload: user,
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginSuccess, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.token = action.payload.token;
        state.error = null;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
