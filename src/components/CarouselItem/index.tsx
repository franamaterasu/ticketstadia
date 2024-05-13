import { Fest } from '../../types';

type CarouselItemProps = {
  fest: Fest;
};

const CarouselItem = ({ fest }: CarouselItemProps) => {
  return (
    <div className='relative bg-gray-600 hover:opacity-80 rounded-md'>
      <img
        src={fest.imagen}
        alt={fest.nombre}
        className='rounded-md'
        style={{ height: '524px' }}
      />
      <div className='absolute p-15 left-0 bottom-14 w-full text-center px-5 xl:text-left xl:left-10'>
        <h4 className='text-white font-bold text-5xl lg:mb-5 xl:text-6xl'>
          {fest.nombre}
        </h4>
        <p className='hidden lg:text-white lg:w-1/2 xl:block'>
          {fest.descripcion}
        </p>
      </div>
    </div>
  );
};

export default CarouselItem;
