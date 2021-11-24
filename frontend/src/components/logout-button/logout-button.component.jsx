import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutIcon from '@mui/icons-material/Logout';

import routes from '../../routes';

const LoginButton = () => {
  const { logout } = useAuth0();

  return (
    <LogoutIcon
      onClick={() =>
        logout({
          returnTo: `${process.env.REACT_APP_FRONTEND_URL}${routes.login}`,
        })
      }
    >
      Log out
    </LogoutIcon>
  );
};

export default LoginButton;
