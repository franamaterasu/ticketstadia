import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Events from './components/pages/Events';
import { Provider } from 'react-redux';
import store from './store/';
import EventDetail from './components/pages/EventDetail';
import FavoriteEvents from './components/pages/FavoriteEvents';
import Friends from './components/pages/Friends';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <section className='bg-slate-100 min-h-[calc(100vh-72px)]'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
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
