import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Events from './pages/Events';
import { Provider } from 'react-redux';
import store from './store/';
import EventDetail from './pages/EventDetail';
import FavoriteEvents from './pages/FavoriteEvents';
import Friends from './pages/Friends';
import AuthenticationGuard from './components/AuthenticationGuard';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <BrowserRouter>
      <Provider store={store}>
        {isAuthenticated && <Header />}
        <section className='bg-slate-100'>
          <Routes>
            <Route
              path='/'
              element={!isAuthenticated ? <Login /> : <Home />}
            />
            <Route
              path='/profile'
              element={<AuthenticationGuard component={Profile} />}>
              <Route
                path='events'
                element={<AuthenticationGuard component={FavoriteEvents} />}
              />
              <Route
                path='friends'
                element={<AuthenticationGuard component={Friends} />}
              />
            </Route>
            <Route
              path='/events'
              element={<AuthenticationGuard component={Events} />}
            />
            <Route
              path='/event/:eventId'
              element={<AuthenticationGuard component={EventDetail} />}
            />
          </Routes>
        </section>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
