import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';

import FormTextField from './FormTextField';
import ErrorMsgComp from '../common/formElements/ErrorMsgComp';

// To serve the data of necessary Form Fields
import { loginFormFields } from '../../constants/formFieldObject';

import { loginSchema } from '../../constants/schema/schema';
import useLogin from '../../hooks/useLogin';
import Loader from '../common/loader/Loader';

import style from '../../assets/css/login.module.css';

// Login And Signup Form with all input Fields
const LoginForm = () => {
  const { loginUser } = useLogin();
  const navigate = useNavigate();

  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated === 1) {
      navigate('/');
    }
  }, [isAuthenticated]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // useEffect(()=>{
  //   setFocus("email")
  //   checkToken()
  // },[auth])

  return (
    <>
      <div className={style.formContainer}>
        <h2 className={style.head}>Log In</h2>
        {/* <form> */}
        <form onSubmit={handleSubmit(loginUser)}>
          {
            // Form Fields are generated based on object 'loginFormFields' from constant Directory > *formFieldsObject
          }
          {loginFormFields.map((field) => (
            <div key={field.name}>
              <FormTextField
                field={field}
                register={register}
                // showPass={showPass}
                // setShowPass={setShowPass}
              />
              <ErrorMsgComp errors={errors} name={field.name} />
            </div>
          ))}
          <Button
            type="submit"
            disabled={loading}
            margin="normal"
            variant="contained"
          >
            {loading ? <Loader /> : "Submit"}
          </Button>
        </form>
        <div className={style.linkPart}>
          New to this site?
          <Link to="/signup">Signup Here</Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
