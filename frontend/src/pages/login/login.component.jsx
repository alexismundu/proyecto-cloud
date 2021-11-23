import React from 'react';

import LoginButton from '../../components/login-button';

import './login.styles.scss';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1 className="login-page__title">Kasas</h1>
      <LoginButton />
    </div>
  );
};

export default LoginPage;
