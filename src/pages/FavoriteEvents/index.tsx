import { useSelector } from 'react-redux';
import { Fest } from '../../types';
import Card from '../../components/Card';
import Alert from '../../components/Alert';

const FavoriteEvents = () => {
  const { events } = useSelector((state) => state.events);

  return (
    <section>
      {events.length > 0 ? (
        <ul className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {events.map((fest: Fest) => (
            <li key={fest.id}>
              <Card info={fest} />
            </li>
          ))}
        </ul>
      ) : (
        <Alert message='No existen eventos en la lista de favoritos' />
      )}
    </section>
  );
};

export default FavoriteEvents;