import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { toastConfig } from '../../constants/toastConfig';
import {
  addTaskToServer,
  updateStatusApi,
} from '../../services/api/taskApiServices';
import { createTask, getTask } from '../../store/action/taskAction';
import taskSlice from '../../store/slice/taskSlice';
import { Info } from '@mui/icons-material';
import { useForm } from 'react-hook-form';

const useTask = (reset) => {
  const dispatch = useDispatch();
 
  const [taskStatus, setTaskStatus] = useState()

  const { error, message, task } = useSelector((state) => state.task);

  useEffect(() => {
    if (error) {
      console.info(error)
      // toast.error(error.response.data, toastConfig);
    }
  }, [error]);

  const addTask = (inputs) => {
    dispatch(createTask(inputs));
    reset()
  };

  const updateStatus = async (id, e) => {
    try {
      const { data } = await updateStatusApi(id, { completed: e.target.value });
      console.log('data--------------------------', data);
      setTaskStatus(e.target.value);
    } catch (error) {
      console.log(error);
    }
  };

  return { addTask, updateStatus, taskStatus, setTaskStatus };
};

export default useTask;
