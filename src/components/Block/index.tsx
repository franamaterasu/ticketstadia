import { RiHeartAddFill } from 'react-icons/ri';
import ImageProfile from '../ImageProfile';
import { Profile } from '../../types';

type UserProps = {
  user: Profile;
};

const Block = ({ user }: UserProps) => {
  const { imagen, nombre } = user;

  return (
    <div className='flex items-center justify-between bg-gray-100 rounded-lg shadow-md p-4'>
      <div className='flex items-center'>
        <div className='flex-shrink-0 mr-4'>
          <ImageProfile
            image={imagen}
            size={50}
          />
        </div>
        <p className='text-gray-700'>{nombre}</p>
      </div>
      <div>
        <button className='text-gray-900 text-3xl'>
          <RiHeartAddFill />
        </button>
      </div>
    </div>
  );
};

export default Block;
