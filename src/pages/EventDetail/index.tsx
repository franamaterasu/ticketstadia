import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addEvent } from '../../store/reducers/cartSlice';
import {
  FaMusic,
  FaMoneyBillWave,
  FaMountainCity,
  FaCalendarDays,
} from 'react-icons/fa6';
import useFetch from '../../hooks/useFetch';
import PayButton from '../../components/PayButton';
import { Fest } from '../../types';

const EventDetail = () => {
  const { eventId } = useParams();

  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  const eventExist = cart.some(
    (cartItem: Fest) => cartItem.id.toString() === eventId
  );

  console.log(eventExist);

  const fest = useFetch(`http://localhost:3000/festivales/${eventId}`);

  const { imagen, nombre, categoria, precio, ciudad, fecha } = fest.data;

  const handleAddClick = (fest: Fest) => {
    dispatch(addEvent(fest));
  };

  return (
    <>
      <section className='p-10'>
        <div className='container mx-auto'>
          <h3 className='text-5xl mb-10 font-bold'>{nombre}</h3>
          <section className='lg:flex gap-10'>
            <img
              src={imagen}
              className='rounded-md mb-10 lg:w-1/2 lg:max-w-2xl'
            />
            <section>
              <div>
                <h4 className='text-2xl font-bold mb-3'>Descripcion:</h4>
                <p className='font-light'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  officiis dolorum, error assumenda iste optio commodi
                  reprehenderit odio hic repellendus tempora, incidunt quod
                  corrupti maxime tenetur quia, veritatis et? Veniam dolorem hic
                  vel cupiditate voluptatum necessitatibus debitis, dolores
                  recusandae amet placeat consequatur a saepe excepturi quasi,
                  esse error quo modi vitae totam iste enim. Quos libero,
                  officiis expedita ea corrupti impedit a adipisci, rem iste
                  error, consectetur dolorem fuga nostrum ut odit earum
                  assumenda! Quas error in eligendi quis impedit consequatur
                  incidunt natus hic cupiditate totam.
                </p>
                <section className='bg-gray-700 py-10 my-10 rounded-md'>
                  <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-14 xl:flex xl:justify-center lg:gap-24'>
                    <div>
                      <FaMusic className='mx-auto text-4xl text-white mb-3' />
                      <p className='font-light text-1xl text-white text-center'>
                        {categoria}
                      </p>
                    </div>
                    <div>
                      <FaMoneyBillWave className='mx-auto text-4xl text-white mb-3' />
                      <p className='font-light text-1xl text-white text-center'>
                        {precio}€
                      </p>
                    </div>
                    <div>
                      <FaMountainCity className='mx-auto text-4xl text-white mb-3' />
                      <p className='font-light text-1xl text-white text-center'>
                        {ciudad}
                      </p>
                    </div>
                    <div>
                      <FaCalendarDays className='mx-auto text-4xl text-white mb-3' />
                      <p className='font-light text-1xl text-white text-center'>
                        {fecha}
                      </p>
                    </div>
                  </div>
                </section>
                <section className='flex gap-5 mt-10'>
                  <PayButton
                    value={precio}
                    invoice={`Compra de ticker para ${nombre}`}
                  />
                  <button
                    style={{ maxHeight: '46px' }}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-blue-300'
                    onClick={() => handleAddClick(fest.data)}
                    disabled={eventExist}>
                    {eventExist ? 'Agregado al carrito' : 'Agregar al carrito'}
                  </button>
                </section>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};

export default EventDetail;
