import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { addEvent, deleteEvent } from '../../store/reducers/eventsSlice';
import { Fest } from '../../types';

type CardProps = {
  info: Fest;
};

const Card = ({ info }: CardProps) => {
  const location = useLocation();

  const { imagen, nombre, descripcion, categoria, precio } = info;

  const { events } = useSelector((state) => state.events);

  const eventExist = events.some(
    (favoriteEvent: Fest) => favoriteEvent.id === info.id
  );

  const dispatch = useDispatch();

  const handleAddClick = (info: Fest) => {
    dispatch(addEvent(info));
  };

  const handleDeleteClick = (id: number) => {
    dispatch(deleteEvent(id));
  };

  return (
    <div className='rounded shadow-lg w-full relative'>
      <Link to={`/event/${info.id}`}>
        <img
          className='w-full rounded-t-md'
          src={imagen}
          alt={nombre}
          style={{ maxHeight: '180px' }}
        />
      </Link>
      <span className='bg-blue-500 text-white text-md px-5 py-1 font-semibold rounded-full absolute left-5 top-5'>
        {categoria}
      </span>
      <span className='bg-blue-500 text-white text-md px-5 py-1 font-semibold rounded-full absolute right-5 top-5'>
        {precio}€
      </span>
      <section className='p-6 bg-white rounded-b-md'>
        <div className='mb-4'>
          <h4 className='font-bold text-xl mb-3'>{nombre}</h4>
          <p className='font-light'>{descripcion}</p>
        </div>
        {!eventExist && (
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => handleAddClick(info)}>
            Quiero asistir
          </button>
        )}
        {eventExist && location.pathname === '/profile/events' && (
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => handleDeleteClick(info.id)}>
            Eliminar evento
          </button>
        )}
      </section>
    </div>
  );
};

export default Card;
