import React from 'react';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import style from '../../../assets/css/home.module.css';
import useTask from '../../../hooks/task/useTask';

const TaskForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const { addTask } = useTask(reset);

  return (
    <form onSubmit={handleSubmit(addTask)}>
      <h1 className={style.head}>ToDo</h1>
      <TextField
        label="Task Name"
        fullWidth
        margin="normal"
        size="small"
        {...register('name', { required: true })}
      />
      <TextField
        label="Task Description"
        fullWidth
        multiline
        rows={3}
        margin="normal"
        size="small"
        {...register('desc', { required: true })}
      />
      <Button type="submit" variant="contained" fullWidth={true} sx={{ mt: 1 }}>
        Add Task
      </Button>
    </form>
  );
};

export default TaskForm;
