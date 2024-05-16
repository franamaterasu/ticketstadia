import { useAuth0 } from '@auth0/auth0-react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { IoMdLogOut } from 'react-icons/io';
import ImageProfile from '../../components/ImageProfile';

const Profile = () => {
  const location = useLocation();

  const { user, logout } = useAuth0();

  const { picture, name, email } = user;

  return (
    <>
      <section className='py-10 text-center bg-white'>
        <ImageProfile
          image={picture}
          size={127}
          classNames='mx-auto mb-5'
        />
        <h3 className='text-2xl font-bold mb-2'>{name}</h3>
        <p className='text-md font-light'>{email}</p>
        <button
          className='bg-red-500 mx-auto mt-5 rounded-md p-2'
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }>
          <IoMdLogOut className='text-3xl  text-white' />
        </button>
      </section>
      <section>
        <section className='container mx-auto py-10'>
          <div className='mb-10 border-b-2 py-5 space-x-3'>
            <Link
              to='/profile/events'
              className={`font-light ${
                location.pathname === '/profile/events' ? 'text-blue-500' : null
              }`}>
              Eventos Favoritos
            </Link>
            <Link
              to='friends'
              className={`font-light ${
                location.pathname === '/profile/friends'
                  ? 'text-blue-500'
                  : null
              }`}>
              Amigos
            </Link>
            <Link
              to='cart'
              className={`font-light ${
                location.pathname === '/profile/cart' ? 'text-blue-500' : null
              }`}>
              Carrito
            </Link>
          </div>

          <Outlet />
        </section>
      </section>
    </>
  );
};

export default Profile;
