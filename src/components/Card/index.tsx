import { useDispatch } from 'react-redux';
import { MdFavorite } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { addEvent } from '../../store/reducers/eventsSlice';
import { Fest } from '../../types';

type CardProps = {
  info: Fest;
};

const Card = ({ info }: CardProps) => {
  const { imagen, nombre, descripcion, categoria, precio } = info;

  const dispatch = useDispatch();

  const handleClick = (info: Fest) => {
    dispatch(addEvent(info));
  };

  return (
    <div className='rounded shadow-lg w-full relative'>
      <img
        className='w-full'
        src={imagen}
        alt={nombre}
        style={{ maxHeight: '180px' }}
      />
      <span className='inline-block bg-blue-500 text-white text-md px-5 py-1 font-semibold rounded-full absolute right-5 top-5'>
        {precio}€
      </span>
      <section className='p-6'>
        <div className='mb-6'>
          <h4 className='font-bold text-xl mb-3'>{nombre}</h4>
          <p className='font-light'>{descripcion}</p>
        </div>
        <div className='flex items-center justify-between'>
          <span className='bg-blue-500 text-white font-bold py-2 px-4 rounded'>
            {categoria}
          </span>
          <div className='flex items-center gap-3'>
            <Link to={`/event/${info.id}`}>
              <FaEye className='text-green-500 text-3xl' />
            </Link>
            <MdFavorite
              className='text-red-500 text-3xl'
              onClick={() => handleClick(info)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
