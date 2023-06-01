import React, { useEffect } from 'react';

import { Box, FormControl, IconButton, MenuItem, Select } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import useTask from '../../../hooks/task/useTask';

import style from '../../../assets/css/task.module.css';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../store/action/taskAction';

const Task = ({ task }) => {
  const { updateStatus, taskStatus, setTaskStatus } = useTask();

  useEffect(() => {
    setTaskStatus(task.completed);
  },[])

  const dispatch = useDispatch();

  return (
    <Box component="div" className={style.card}>
      <div className={style.title}>
        <h2 className={style.taskname}>{task.name}</h2>
        <FormControl sx={{ minWidth: 100, marginTop: "10px" }}>
          <Select
            defaultValue={task.completed}
            sx={
              taskStatus
                ? { border: "1px solid #1976d2" }
                : { border: "1px solid #FFE900" }
            }
            onChange={(e) => updateStatus(task._id, e)}
          >
            <MenuItem value={true}>Completed</MenuItem>
            <MenuItem value={false}>Pending</MenuItem>
          </Select>
        </FormControl>
      </div>
      <p>{task.description}</p>
      <IconButton onClick={() => dispatch(deleteTask(task._id))}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default Task;
