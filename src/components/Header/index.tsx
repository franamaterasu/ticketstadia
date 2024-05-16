import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link, useLocation } from 'react-router-dom';
import ImageProfile from '../ImageProfile';
import { getCategories } from '../../helpers/getCategories';

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  const { user } = useAuth0();

  const picture = user?.picture;

  const { categorias } = getCategories();

  const location = useLocation();

  return (
    <header className='bg-gray-900 text-white py-4 px-5'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link
          to='/'
          className='text-xl font-bold'
          onClick={() => setIsOpened(false)}>
          Ticketstadia
        </Link>

        <nav className='flex gap-10 items-center'>
          <Link
            to='/'
            className={` text-md ${
              location.pathname === '/' ? 'text-red-500' : 'text-white'
            }`}
            onClick={() => setIsOpened(false)}>
            Home
          </Link>
          <div className='relative'>
            <span
              className={`text-white text-md cursor-pointer`}
              onClick={() => setIsOpened(!isOpened)}>
              Categorias
            </span>
            {isOpened && (
              <section className='flex flex-col bg-white rounded-md absolute left-0 top-10 z-10 shadow-md border border-slate-500'>
                <Link
                  to='/events'
                  onClick={() => setIsOpened(false)}
                  className={`px-3 py-2 hover:text-white hover:bg-slate-300 ${
                    location.pathname === '/events'
                      ? 'bg-slate-300 text-white'
                      : 'text-black'
                  }`}>
                  All
                </Link>
                {categorias.map((categoria) => {
                  return (
                    <Link
                      key={categoria}
                      className={`px-3 py-2 hover:text-white hover:bg-slate-300 ${
                        location.pathname ===
                        `/category/${categoria}`.toLowerCase()
                          ? 'bg-slate-300 text-white'
                          : 'text-black'
                      }`}
                      to={`/category/${categoria}`.toLowerCase()}
                      onClick={() => setIsOpened(false)}>
                      {categoria}
                    </Link>
                  );
                })}
              </section>
            )}
          </div>
          <Link
            to='/profile/events'
            onClick={() => setIsOpened(false)}>
            <ImageProfile
              image={picture}
              size={40}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
