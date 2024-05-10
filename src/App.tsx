import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Events from './components/pages/Events';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <section className='bg-slate-100'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/profile'
              element={<Profile />}
            />
            <Route
              path='/events'
              element={<Events />}
            />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
