import { Link, Outlet, useLocation } from 'react-router-dom';
import ImageProfile from '../../ImageProfile';
import useFetch from '../../hooks/useFetch';

const Profile = () => {
  const user = useFetch('http://localhost:3000/usuario');

  const location = useLocation();

  const userInfo = user.data;

  const { imagen, nombre } = userInfo;

  return (
    <>
      <section className='container mx-auto py-10 text-center'>
        <ImageProfile
          image={imagen}
          size={127}
          classNames='mx-auto mb-5'
        />
        <h3 className='text-2xl font-bold'>{nombre}</h3>
      </section>
      <section className='bg-white min-h-[calc(100vh-300px)]'>
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
          </div>

          <Outlet />
        </section>
      </section>
    </>
  );
};

export default Profile;
