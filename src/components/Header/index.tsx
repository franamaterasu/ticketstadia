import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import ImageProfile from '../ImageProfile';

const Header = () => {
  const { user } = useAuth0();

  const { picture } = user;

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
        <Link to='/profile/events'>
          <ImageProfile
            image={picture}
            size={40}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
