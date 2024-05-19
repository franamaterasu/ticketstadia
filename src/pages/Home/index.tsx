import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import useFetch from '../../hooks/useFetch';
import { Fest, Profile } from '../../types';
import CarouselEvents from '../../components/Carousel';
import Grid from '../../components/Grid';
import Person from '../../components/Person';
import Carousel from 'react-multi-carousel';
import { responsive } from '../../helpers/getCarouselResponsive';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
  const fests = useFetch('http://localhost:3000/festivales');

  const users = useFetch('http://localhost:3000/listaDePersonas');

  return (
    <>
      <section className='banner p-10'>
        <div className='container mx-auto'>
          <CarouselEvents />
        </div>
      </section>
      <div className=' bg-white p-10'>
        <section className='container mx-auto'>
          <header className='mb-10'>
            <h3 className='text-slate-600 font-bold'>
              Evento destacados para ti
            </h3>
          </header>
          <Grid>
            {fests.data.slice(0, 8).map((fest: Fest) => (
              <li key={fest.id}>
                <Card info={fest} />
              </li>
            ))}
          </Grid>
        </section>
      </div>
      <section className='bg-gray-900 p-10'>
        <div className='container mx-auto'>
          <h3 className='text-white font-bold mb-10'>
            Gente con las que compartir conciertos:
          </h3>
        </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          itemClass='mr-5 last:mr-0'>
          {users.data.map((friend: Profile) => (
            <div key={friend.id}>
              <Person info={friend} />
            </div>
          ))}
        </Carousel>
      </section>
      <section className=' bg-white p-10'>
        <div className='container mx-auto'>
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
          <Grid>
            {fests.data.slice(8, 16).map((fest: Fest) => (
              <li key={fest.id}>
                <Card info={fest} />
              </li>
            ))}
          </Grid>
        </div>
      </section>
    </>
  );
};

export default Home;
