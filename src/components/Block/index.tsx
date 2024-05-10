import { RiHeartAddFill } from 'react-icons/ri';
import ImageProfile from '../ImageProfile';

const Block = () => {
  return (
    <div className='flex items-center justify-between bg-gray-100 rounded-lg shadow-md p-4 mb-4'>
      <div className='flex items-center'>
        <div className='flex-shrink-0 mr-4'>
          <ImageProfile />
        </div>
        <p className='text-gray-700'>Jane Doe</p>
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
