import { useParams } from 'react-router-dom';
import {
  FaMusic,
  FaMoneyBillWave,
  FaMountainCity,
  FaCalendarDays,
} from 'react-icons/fa6';
import useFetch from '../../components/hooks/useFetch';

const EventDetail = () => {
  const { eventId } = useParams();

  const fest = useFetch(`http://localhost:3000/festivales/${eventId}`);

  const { imagen, nombre, categoria, precio, ciudad, fecha } = fest.data;

  return (
    <>
      <section className='container mx-auto py-10'>
        <h3 className='text-5xl mb-10 font-bold'>{nombre}</h3>
        <section className='lg:flex gap-10'>
          <img
            src={imagen}
            className='rounded-md mb-10 lg:w-1/2 lg:max-w-2xl'
          />
          <section>
            <div className='mb-20'>
              <h4 className='text-2xl font-bold mb-3'>Descripcion:</h4>
              <p className='font-light'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                officiis dolorum, error assumenda iste optio commodi
                reprehenderit odio hic repellendus tempora, incidunt quod
                corrupti maxime tenetur quia, veritatis et? Veniam dolorem hic
                vel cupiditate voluptatum necessitatibus debitis, dolores
                recusandae amet placeat consequatur a saepe excepturi quasi,
                esse error quo modi vitae totam iste enim. Quos libero, officiis
                expedita ea corrupti impedit a adipisci, rem iste error,
                consectetur dolorem fuga nostrum ut odit earum assumenda! Quas
                error in eligendi quis impedit consequatur incidunt natus hic
                cupiditate totam.
              </p>
            </div>
          </section>
        </section>
      </section>
      <section className='bg-gray-700 py-10'>
        <div className='flex justify-center gap-32'>
          <div>
            <FaMusic className='mx-auto text-5xl text-white mb-3' />
            <p className='font-light text-2xl text-white'>{categoria}</p>
          </div>
          <div>
            <FaMoneyBillWave className='mx-auto text-5xl text-white mb-3' />
            <p className='font-light text-2xl text-white'>{precio}€</p>
          </div>
          <div>
            <FaMountainCity className='mx-auto text-5xl text-white mb-3' />
            <p className='font-light text-2xl text-white'>{ciudad}</p>
          </div>
          <div>
            <FaCalendarDays className='mx-auto text-5xl text-white mb-3' />
            <p className='font-light text-2xl text-white'>{fecha}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetail;
