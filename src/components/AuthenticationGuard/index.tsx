import { withAuthenticationRequired } from '@auth0/auth0-react';
import Login from '../../pages/Login';
import { ComponentType } from 'react';

type LoginProps = {
  component: ComponentType<object>;
};

const AuthenticationGuard = ({ component }: LoginProps) => {
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
