// userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchUserInfo } from '../Pages/IsLogged'; // Assurez-vous que le chemin est correct

const initialState = {
  user: null,
  token: null,
  error: null,
  status: 'idle', // Ajout d'un état pour suivre le statut de la requête
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.body; // Extrayez les informations utilisateur de la réponse
        state.token = localStorage.getItem('token'); // Assurez-vous que le token est stocké dans le localStorage
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setUser, setToken, setError, clearUser } = userSlice.actions;

export default userSlice.reducer;
