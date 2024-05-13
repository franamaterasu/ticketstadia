import { Profile } from '../../types';
import Block from '../Block';
import useFetch from '../hooks/useFetch';

const BlockList = () => {
  const users = useFetch('http://localhost:3000/listaDePersonas');

  return (
    <div
      className='overflow-y-scroll'
      style={{ maxHeight: '380px' }}>
      <div className='md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-1 lg:gap-0'>
        {users.data.map((user: Profile) => {
          return (
            <Block
              user={user}
              key={user.id}
              className='mb-4'
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlockList;
