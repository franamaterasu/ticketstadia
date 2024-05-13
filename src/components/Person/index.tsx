import { useDispatch } from 'react-redux';
import { Profile } from '../../types';
import { deleteFriend } from '../../store/reducers/friendsSlice';

type PersonProps = {
  info: Profile;
};

const Person = ({ info }: PersonProps) => {
  const { imagen, nombre, email } = info;

  const dispatch = useDispatch();

  const handleDeleteClick = (id: number) => {
    dispatch(deleteFriend(id));
  };

  return (
    <div className='w-full bg-white shadow-lg rounded-b-lg'>
      <div className='bg-gray-900 py-5 rounded-t-lg'>
        <img
          className='w-24 h-24 mx-auto rounded-full boder-t'
          src={imagen}
          alt='Imagen de perfil'
        />
      </div>
      <div className='text-center py-10'>
        <h3 className='text-xl font-semibold'>{nombre}</h3>
        <p className='font-light mb-2'>{email}</p>
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4'
          onClick={() => handleDeleteClick(info.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Person;
