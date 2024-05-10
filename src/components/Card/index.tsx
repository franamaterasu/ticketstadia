import { MdFavorite } from 'react-icons/md';

const Card = ({ info }) => {
  const { id, imagen, nombre, descripcion, categoria } = info;

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

          <MdFavorite className='text-red-500 text-3xl' />
        </div>
      </section>
    </div>
  );
};

export default Card;
