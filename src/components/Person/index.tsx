import { useDispatch, useSelector } from 'react-redux';
import { Profile } from '../../types';
import { useLocation } from 'react-router-dom';
import { addFriend, deleteFriend } from '../../store/reducers/friendsSlice';

type PersonProps = {
  info: Profile;
};

const Person = ({ info }: PersonProps) => {
  const { friends } = useSelector((state) => state.friends);

  const friendExist = friends.some(
    (existFriend: Profile) => existFriend.id === info.id
  );

  const { imagen, nombre, email } = info;

  const dispatch = useDispatch();

  const handleAddClick = (friend: Profile) => {
    dispatch(addFriend(friend));
  };

  const handleDeleteClick = (id: number) => {
    dispatch(deleteFriend(id));
  };

  const location = useLocation();

  return (
    <div className='w-full'>
      <div className='bg-slate-500 py-5 rounded-t-lg'>
        <img
          className='w-24 h-24 mx-auto rounded-full boder-t'
          src={imagen}
          alt={nombre}
        />
      </div>
      <div className='text-center bg-white py-10 rounded-b-lg'>
        <h3 className='text-xl font-semibold'>{nombre}</h3>
        <p className='font-light mb-5'>{email}</p>

        {location.pathname === '/' && (
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-blue-300'
            disabled={friendExist}
            onClick={() => handleAddClick(info)}>
            {friendExist ? 'Amigo agregado' : 'Agregar amigo'}
          </button>
        )}

        {location.pathname !== '/' && (
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => handleDeleteClick(info.id)}>
            Eliminar amigo
          </button>
        )}
      </div>
    </div>
  );
};

export default Person;
