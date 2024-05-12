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
              element={<Profile />}>
              <Route
                path='events'
                element={<FavoriteEvents />}
              />
              <Route
                path='friends'
                element={<Friends />}
              />
            </Route>
            <Route
              path='/events'
              element={<Events />}
            />
            <Route
              path='/event/:eventId'
              element={<EventDetail />}
            />
          </Routes>
        </section>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
