import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-f6nczkhlkbo6hgns.us.auth0.com'
      clientId='uIer28WPuweRBQN7NREPwgq90xusdLjW'
      authorizationParams={{ redirect_uri: window.location.origin }}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
