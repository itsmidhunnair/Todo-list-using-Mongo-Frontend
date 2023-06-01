import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from './Task';

import style from '../../../assets/css/task.module.css';
import { getTask } from '../../../store/action/taskAction';

const TaskContainer = () => {
  const { task: tasks } = useSelector((state) => state.task);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask());
  }, []);

  return (
    <>
      {tasks && tasks?.length > 0 ? (
        <div className={style.container}>
          {tasks.map((task) => (
            <Task task={task} key={task._id} />
          ))}
        </div>
      ) : (
        <h1 style={{ textAlign: 'center' }}>Go ahead with your first Task!!</h1>
      )}
    </>
  );
};

export default TaskContainer;
