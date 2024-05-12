import { Link, Outlet } from 'react-router-dom';
import ImageProfile from '../../ImageProfile';
import useFetch from '../../hooks/useFetch';

const Profile = () => {
  const user = useFetch('http://localhost:3000/usuario');

  const userInfo = user.data;

  const { imagen, nombre } = userInfo;

  return (
    <>
      <section className='container mx-auto pt-10 text-center'>
        <ImageProfile
          image={imagen}
          size={127}
          classNames='mx-auto mb-5'
        />

        <h3 className='text-2xl font-bold'>{nombre}</h3>
      </section>

      <Link to='/profile/events'>Events</Link>
      <Link
        to='friends'
        className='tab-btn'>
        Friends
      </Link>
      <section className='bg-white'>
        <section className='container mx-auto py-10'>
          <Outlet />
        </section>
      </section>
    </>
  );
};

export default Profile;
