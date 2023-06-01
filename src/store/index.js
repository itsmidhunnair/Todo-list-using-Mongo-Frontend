import authReducer from './slice/authSlice';
import taskReducer from './slice/taskSlice';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

const reducer = {
  auth: authReducer,
  task: taskReducer,
};

const store = configureStore({
  reducer: reducer,
  middleware: [thunk],
});

export default store;
