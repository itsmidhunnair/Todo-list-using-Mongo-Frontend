import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addTaskToServer,
  deleteTaskApi,
  getTaskfromServer,
} from '../../services/api/taskApiServices';

/**
 * For Adding Task in server
 */
const createTask = createAsyncThunk(
  'task/add',
  async (task, { rejectWithValue }) => {
    try {
      const { data } = await addTaskToServer(task);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

/**
 * For Fetching Task
 */
const getTask = createAsyncThunk('task/get', async (_, { rejectWithValue }) => {
  try {
    const { data } = await getTaskfromServer();
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

/**
 * For Deleting Task
 */
const deleteTask = createAsyncThunk(
  'task/delete',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await deleteTaskApi(id);
      return {data:data, id: id};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export { createTask, getTask, deleteTask };
