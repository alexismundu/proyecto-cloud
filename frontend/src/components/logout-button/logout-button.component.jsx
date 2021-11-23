import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import CustomButton from '../custom-button';

const LoginButton = () => {
  const { logout } = useAuth0();

  return <CustomButton onClick={() => logout()}>Log out</CustomButton>;
};

export default LoginButton;
