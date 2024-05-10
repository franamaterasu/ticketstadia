import { Link } from 'react-router-dom';
import ImageProfile from '../ImageProfile';
import useFetch from '../hooks/useFetch';

const Header = () => {
  const user = useFetch('http://localhost:3000/usuario');

  const userImage = user.data?.imagen;

  return (
    <header className='bg-gray-900 text-white py-4 px-5'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <Link
            to='/'
            className='text-xl font-bold'>
            Ticketstadia
          </Link>
        </div>
        <Link to='/profile'>
          <ImageProfile image={userImage} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
