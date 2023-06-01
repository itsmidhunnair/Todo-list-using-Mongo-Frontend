import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SignupForm from '../components/loginSignup/SignupForm';
import LoginForm from '../components/loginSignup/LoginForm';
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import { path } from '../constants/path';
import ProtectedComp from '../components/protectedComp/ProtectedComp';

const RouterComp = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === path.login || location.pathname === path.signup ? (
        <></>
      ) : (
        <Header />
      )}
      <Routes>
        <Route element={<ProtectedComp />}>
          <Route path={path.root} element={<Home />} />
        </Route>
        <Route path={path.signup} element={<SignupForm />} />
        <Route path={path.login} element={<LoginForm />} />
      </Routes>
    </>
  );
};

export default RouterComp;
