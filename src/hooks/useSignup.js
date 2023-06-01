import { useDispatch } from 'react-redux';
import { authSignup } from '../store/action/authAction';

const useSignup = () => {
  const dispatch = useDispatch();

  const userSignup = (inputs) => {
    dispatch(authSignup(inputs));
  };

  return { userSignup };
};

export default useSignup;
