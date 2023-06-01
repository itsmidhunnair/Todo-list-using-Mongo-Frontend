import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  userLogin,
  userLogout,
  userSignUp,
  verifyToken,
} from '../../services/api/userApiServices';

/**
 * For Login Authentication
 */
const authLogin = createAsyncThunk(
  'auth/login',
  async (userDetails, { rejectWithValue }) => {
    try {
      const { data } = await userLogin(userDetails);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**
 * For Signup Authentication
 */
const authSignup = createAsyncThunk(
  'auth/signup',
  async (userDetails, { rejectWithValue }) => {
    try {
      const { data } = await userSignUp(userDetails);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**
 * For Auth Token Validation
 */
const authToken = createAsyncThunk(
  'auth/token',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await verifyToken();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**
 * For Auth Token Validation
 */
const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userLogout();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { authLogin, authSignup, authToken, logout };
