import { createSlice } from '@reduxjs/toolkit';
import { createTask, deleteTask, getTask } from '../action/taskAction';

const initialState = {
  task: [],
  message: null,
  loading: false,
  error: null,
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducer: {
    clearState: (state) => {
      state.task = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //* For adding tasks
      .addCase(createTask.pending, (state, action) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(createTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.loading = false;
        state.message = 'Product Added Successfully';
        state.task.push(action.payload);
      })
      //* For fetching tasks
      .addCase(getTask.pending, (state, action) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(getTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.task = action.payload?.length > 0 ? action.payload[0].todos : [];
      })
      //* For Deleting tasks
      .addCase(deleteTask.pending, (state, action) => {
        state.loading = true;
        state.message = null;
        state.error = null;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.task = state.task.filter(
          (task) => task._id !== action.payload.id
        );
        // state.task = action.payload[0].todos;
      });
  },
});

export default taskSlice.reducer;
