import { path } from '../../constants/path';
import Api from '../instances/axiosInstance';

/**
 * TO Register User & save data in DB
 *
 * @param Object data
 */
export const userSignUp = (data) => {
  return Api.post({ url: path.signupApi, data: data });
};

/**
 * To Login user to app (by checking credentials)
 *
 * @param Object data
 */
export const userLogin = (data) => {
  return Api.post({ url: path.loginApi, data: data });
};

/**
 * To validate Token stored in cookie
 */
export const verifyToken = () => {
  return Api.get({ url: path.verifyApi });
};

/**
 * To get Users Data
 */
export const getUserDataCall = () => {
  return Api.get({ url: path.getDataApi });
};

/**
 * to remove cookie from browser
 */
export const userLogout = () => {
  return Api.post({ url: path.logoutApi });
};
