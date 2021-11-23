import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import CustomButton from '../custom-button';

import routes from '../../routes';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <CustomButton
      onClick={() =>
        loginWithRedirect({
          returnTo: `${process.env.REACT_APP_FRONTEND_URL}${routes.homePage}`,
        })
      }
    >
      Login
    </CustomButton>
  );
};

export default LoginButton;
