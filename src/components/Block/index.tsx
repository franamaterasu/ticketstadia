import { RiHeartAddFill } from 'react-icons/ri';
import ImageProfile from '../ImageProfile';
import { Profile } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { addFriend } from '../../store/reducers/friendsSlice';

type UserProps = {
  user: Profile;
  className?: string;
};

const Block = ({ user, className }: UserProps) => {
  const { imagen, nombre } = user;

  const dispatch = useDispatch();

  const handleAddClick = (user: Profile) => {
    dispatch(addFriend(user));
  };

  return (
    <div className={`flex items-center bg-gray-100 shadow-md ${className} `}>
      <div className='flex items-center'>
        <div className='flex-shrink-0 bg-gray-900 p-4 rounded-tl-lg rounded-bl-lg'>
          <ImageProfile
            image={imagen}
            size={50}
          />
        </div>
      </div>
      <div className='flex justify-between items-center gap-2 p-5'>
        <span className='text-gray-700'>{nombre}</span>
        <button className='text-gray-900 text-3xl'>
          <RiHeartAddFill
            className='text-red-500'
            onClick={() => handleAddClick(user)}
          />
        </button>
      </div>
    </div>
  );
};

export default Block;
