import ImageProfile from '../ImageProfile';

const Header = () => {
  return (
    <header className='bg-gray-900 text-white py-4 px-5'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <span className='text-xl font-bold'>Ticketstadia</span>
        </div>
        <ImageProfile />
      </div>
    </header>
  );
};

export default Header;
