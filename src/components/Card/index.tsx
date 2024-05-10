import { useDispatch } from 'react-redux';
import { MdFavorite } from 'react-icons/md';
import { addEvent } from '../../store/reducers/eventsSlice';
import { Fest } from '../../types';

const Card = ({ info }) => {
  const { imagen, nombre, descripcion, categoria } = info;

  const dispatch = useDispatch();

  const handleClick = (info: Fest) => {
    dispatch(addEvent(info));
  };

  return (
    <div className='rounded shadow-lg w-full'>
      <img
        className='w-full'
        src={imagen}
        alt={nombre}
        style={{ maxHeight: '180px' }}
      />
      <section className='p-6'>
        <div className='mb-6'>
          <h4 className='font-bold text-xl mb-3'>{nombre}</h4>
          <p>{descripcion}</p>
        </div>
        <div className='flex items-center justify-between'>
          <span className='bg-blue-500 text-white font-bold py-2 px-4 rounded'>
            {categoria}
          </span>

          <MdFavorite
            className='text-red-500 text-3xl'
            onClick={() => handleClick(info)}
          />
        </div>
      </section>
    </div>
  );
};

export default Card;
