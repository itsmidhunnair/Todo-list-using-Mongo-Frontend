import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { toastConfig } from '../../constants/toastConfig';
import {
  addTaskToServer,
  updateStatusApi,
} from '../../services/api/taskApiServices';
import { createTask, getTask } from '../../store/action/taskAction';
import taskSlice from '../../store/slice/taskSlice';

const useTask = () => {
  const dispatch = useDispatch();

  const { error, message, task } = useSelector((state) => state.task);

  useEffect(() => {
    if (error) {
      toast.error(error.response.data, toastConfig);
    }
  }, [error]);

  const addTask = (inputs) => {
    dispatch(createTask(inputs));
  };

  const updateStatus = async (id, e) => {
    try {
      const { data } = await updateStatusApi(id, { completed: e.target.value });
    } catch (error) {
      console.log(error);
    }
  };

  return { addTask, updateStatus };
};

export default useTask;
