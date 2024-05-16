import { useSelector, useDispatch } from 'react-redux';
import { Fest } from '../../types';
import CartItem from '../../components/CartItem';
import Modal from '../../components/Modal';
import {
  confirmBuyEvent,
  disconfirmBuyEvent,
} from '../../store/reducers/cartSlice';
import Alert from '../../components/Alert';

const Cart = () => {
  const dispatch = useDispatch();

  const { cart, selectedEvent, isSelectedEvent } = useSelector(
    (state) => state.cart
  );

  const handleBuyClick = (id: number) => {
    dispatch(confirmBuyEvent(id));
  };

  return (
    <section>
      {cart.length >= 1 ? (
        <>
          <div className='w-full overflow-x-scroll xl:overflow-x-hidden'>
            <table className='w-full'>
              <thead className='bg-gray-900'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-white'>
                    Imagen
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-white'>
                    Nombre
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-white'>
                    Descripcion
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-white'>
                    Ciudad
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-white'>
                    Precio
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-white'>
                    Cantidad
                  </th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {cart.map((item: Fest) => {
                  return (
                    <CartItem
                      key={item.id}
                      cartItem={item}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          {isSelectedEvent && (
            <Modal>
              <>
                <img
                  src={selectedEvent.imagen}
                  alt={selectedEvent.nombre}
                  className='rounded-lg mx-auto mb-5'
                  width='500'
                />
                <h1 className='text-2xl mb-1 font-bold'>
                  {selectedEvent.nombre}
                </h1>
                <p className='text-light mb-6'>
                  Estas seguro de comprar tickets para el evento?
                </p>
                <section>
                  <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5'
                    onClick={() => handleBuyClick(selectedEvent.id)}>
                    Comprar
                  </button>
                  <button
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                    onClick={() => dispatch(disconfirmBuyEvent())}>
                    Descartar
                  </button>
                </section>
              </>
            </Modal>
          )}
        </>
      ) : (
        <Alert message='No existen eventos en tu carrito' />
      )}
    </section>
  );
};

export default Cart;
