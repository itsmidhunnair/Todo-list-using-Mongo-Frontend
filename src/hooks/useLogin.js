import { useDispatch } from 'react-redux';

import { authLogin } from '../store/action/authAction';

/**
 * Custom Hook for all User Login Functionality
 *
 * @async checkToken()
 * @async loginUser()
 * @async logoutUser()
 */
const useLogin = () => {
  const dispatch = useDispatch();

  /**
   * To Login User by validating Email & Password
   *
   * @param {Object} inputs
   */
  const loginUser = ({ email, password }) => {
    dispatch(authLogin({ email, password }));
  };

  return { loginUser };
};

export default useLogin;
