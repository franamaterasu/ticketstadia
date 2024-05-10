import { Profile } from '../../types';
import Block from '../Block';
import useFetch from '../hooks/useFetch';

const BlockList = () => {
  const users = useFetch('http://localhost:3000/listaDePersonas');

  return (
    <ul
      className='md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-1 lg:gap-0'
      style={{ height: '400px', overflowY: 'scroll' }}>
      {users.data?.map((user: Profile) => (
        <li
          key={user.id}
          className='mb-4'>
          <Block user={user} />
        </li>
      ))}
    </ul>
  );
};

export default BlockList;
