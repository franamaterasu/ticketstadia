import { withAuthenticationRequired } from '@auth0/auth0-react';
import Login from '../../pages/Login';

const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className='page-layout'>
        <Login />
      </div>
    ),
  });

  return <Component />;
};

export default AuthenticationGuard;
