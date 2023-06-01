import { path } from '../../constants/path';
import Api from '../instances/axiosInstance';

/**
 * TO add task in DB
 *
 * @param Object data
 */
export const addTaskToServer = (data) => {
  return Api.post({ url: path.addTask, data: data });
};

/**
 * To get all task of user from DB
 */
export const getTaskfromServer = () => {
  return Api.get({ url: path.getTask });
};

/**
 * To update status of task
 */
export const updateStatusApi = (id, data) => {
  return Api.put({ url: `${path.setStatus}/${id}`, data: data });
};

/**
 * To Delete Task
 */
export const deleteTaskApi = (id) => {
  return Api.delete({ url: `${path.deleteTask}/${id}` });
};
