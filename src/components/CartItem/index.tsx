import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Fest } from '../../types';
import { deleteEvent, selectEvent } from '../../store/reducers/cartSlice';

type CartItemProps = {
  cartItem: Fest;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleDeleteClick = (id: number) => {
    dispatch(deleteEvent(id));
  };

  const handleSelectClick = (fest: Fest) => {
    dispatch(selectEvent(fest));
  };

  return (
    <>
      <tr>
        <td className='px-6 py-4 whitespace-nowrap'>
          <div className='text-sm text-gray-900'>
            <img
              className='rounded-md mx-auto'
              src={cartItem.imagen}
              width={80}
              alt={cartItem.nombre}
            />
          </div>
        </td>
        <td className='px-6 py-4 whitespace-nowrap'>
          <div className='text-sm text-gray-900 text-center'>
            {cartItem.nombre}
          </div>
        </td>
        <td className='px-6 py-4 whitespace-wrap'>
          <div className='text-sm text-gray-900 text-center'>
            {cartItem.descripcion}
          </div>
        </td>
        <td className='px-6 py-4 whitespace-nowrap'>
          <div className='text-sm text-gray-900 text-center'>
            {cartItem.ciudad}
          </div>
        </td>
        <td className='px-6 py-4 whitespace-nowrap'>
          <div className='text-sm text-gray-900 text-center'>
            {cartItem.precio * quantity}€
          </div>
        </td>
        <td className='px-6 py-4 whitespace-nowrap'>
          <div className='text-sm text-gray-900 text-center'>
            <input
              type='number'
              placeholder='1'
              className='border font-light rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              min={1}
              onChange={(e) => setQuantity(Number(e.target.value))}
              value={quantity}></input>
          </div>
        </td>
        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5'
            onClick={() => handleSelectClick(cartItem)}>
            Comprar tickets
          </button>
          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            onClick={() => handleDeleteClick(cartItem.id)}>
            Eliminar del carrito
          </button>
        </td>
      </tr>
    </>
  );
};
export default CartItem;
