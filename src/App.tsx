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
import FavoriteFriends from './pages/FavoriteFriends';
import Error from './pages/Error';
import Category from './pages/Category';
import AuthenticationGuard from './components/AuthenticationGuard';
import { useAuth0 } from '@auth0/auth0-react';
import Cart from './pages/Cart';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <BrowserRouter>
      <Provider store={store}>
        {isAuthenticated && <Header />}
        <section>
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
                element={<AuthenticationGuard component={FavoriteFriends} />}
              />
              <Route
                path='cart'
                element={<AuthenticationGuard component={Cart} />}
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
            <Route
              path='/category/:category'
              element={<AuthenticationGuard component={Category} />}
            />
            <Route
              path='*'
              element={<AuthenticationGuard component={Error} />}
            />
          </Routes>
        </section>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
