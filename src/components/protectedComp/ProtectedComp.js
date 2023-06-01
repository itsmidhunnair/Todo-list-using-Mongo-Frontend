import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import { authToken } from '../../store/action/authAction';
import Loader from '../common/loader/Loader';

const ProtectedComp = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  console.log('Auuth state', isAuthenticated);

  useEffect(() => {
    dispatch(authToken());
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (isAuthenticated !== -1) {
    if (isAuthenticated === 0) {
      navigate('/login');
    } else {
      return <Outlet />;
    }
  } else {
    return <Outlet />;
  }
};

export default ProtectedComp;
