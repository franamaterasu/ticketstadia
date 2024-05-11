import { Link } from 'react-router-dom';
import Card from '../../Card';
import BlockList from '../../BlockList';
import useFetch from '../../hooks/useFetch';
import { Fest } from '../../../types';
import CarouselEvents from '../../Carousel';

const Home = () => {
  const fests = useFetch('http://localhost:3000/festivales');

  return (
    <section className='container mx-auto py-10 lg:grid lg:grid-rows-2'>
      <div className='bg-white rounded-md mb-10 lg:mr-10 lg:col-span-3 lg:row-span-2'>
        <CarouselEvents />
      </div>
      <div className='bg-white p-10 rounded-md mb-10 lg:row-span-2 lg:col-start-4'>
        <h3 className='text-slate-600 font-bold mb-10'>
          Amigos para compartir conciertos
        </h3>
        <BlockList />
      </div>
      <div className=' bg-white p-10 rounded-md lg:col-span-4 lg:row-start-3'>
        <header className='flex mb-10 justify-between items-center'>
          <h3 className='text-slate-600 font-bold'>
            Evento que podrian interesarte
          </h3>
          <Link
            to='/events'
            className='text-slate-600 text-sm'>
            Ver todos los eventos
          </Link>
        </header>
        <ul className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '>
          {fests.data.slice(0, 8).map((fest: Fest) => (
            <li key={fest.id}>
              <Card info={fest} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
