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

  // const { isAuthenticated } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (isAuthenticated === 1) {
  //     navigate('/');
  //   } else {
  //     navigate('/login');
  //   }
  // }, [isAuthenticated]);

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
