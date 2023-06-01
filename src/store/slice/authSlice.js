import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { toastConfig } from '../../constants/toastConfig';
import { authLogin, authSignup, authToken, logout } from '../action/authAction';

const initialState = {
  message: null,
  user: null,
  isAuthenticated: -1,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducer: {
    clearState: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //* For Login
      .addCase(authLogin.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = 1;
        toast.success('User Loggedin Successfully!', toastConfig);
      })

      //* For Signup
      .addCase(authSignup.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(authSignup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(authSignup.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        toast.success(state.message, toastConfig);
      })

      //* For AuthToken Validation
      .addCase(authToken.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(authToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = 0;
        toast.error(action.payload);
      })
      .addCase(authToken.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = 1;
        state.user = action.payload?.email;
      })

      //* For Logging Out User
      .addCase(logout.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload);
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = 0;
      });
  },
});

export default authSlice.reducer;
