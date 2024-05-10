const Card = () => {
  return (
    <div className='rounded shadow-lg w-full'>
      <img
        className='w-full'
        src='https://images.pexels.com/photos/442540/pexels-photo-442540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='Imagen'
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>Título del Card</div>
        <p className='text-gray-700 text-base'>
          Descripción corta del card. Puedes agregar aquí información adicional
          sobre el contenido del card.
        </p>
      </div>
      <div className='px-6 py-4'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Botón
        </button>
      </div>
    </div>
  );
};

export default Card;
