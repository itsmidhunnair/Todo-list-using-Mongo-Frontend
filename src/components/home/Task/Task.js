import React from 'react';

import { FormControl, IconButton, MenuItem, Select } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import useTask from '../../../hooks/task/useTask';

import style from '../../../assets/css/task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../store/action/taskAction';

const Task = ({ task }) => {
  const { updateStatus } = useTask();

  const dispatch = useDispatch();

  return (
    <div className={style.card}>
      <div className={style.title}>
        <h2>{task.name}</h2>
        <FormControl sx={{ minWidth: 100, marginTop: '10px' }}>
          <Select
            defaultValue={task.completed}
            onChange={(e) => updateStatus(task._id, e)}
          >
            <MenuItem value={true}>Completed</MenuItem>
            <MenuItem value={false}>Pending</MenuItem>
          </Select>
        </FormControl>
      </div>
      <p>{task.description}</p>
      <IconButton
      onClick={() => dispatch(deleteTask(task._id))}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Task;
