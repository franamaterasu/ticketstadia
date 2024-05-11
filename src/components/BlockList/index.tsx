import { Profile } from '../../types';
import Block from '../Block';
import useFetch from '../hooks/useFetch';

const BlockList = () => {
  const users = useFetch('http://localhost:3000/listaDePersonas');

  return (
    <>
      <div
        className='overflow-y-scroll'
        style={{ maxHeight: '300px' }}>
        <ul className='md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-1 lg:gap-0'>
          {users.data.slice(0, 6).map((user: Profile) => (
            <li
              key={user.id}
              className='mb-4 last:mb-0'>
              <Block user={user} />
            </li>
          ))}
        </ul>
      </div>

      <button className='bg-blue-500 w-1/2  mx-auto text-white font-bold py-2 px-4 rounded block mt-10 lg:w-full'>
        Busca nuevos amigos
      </button>
    </>
  );
};

export default BlockList;
