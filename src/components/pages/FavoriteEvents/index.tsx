import { useSelector } from 'react-redux';
import { Fest } from '../../../types';
import Card from '../../Card';
import Alert from '../../Alert';

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
        <Alert />
      )}
    </section>
  );
};

export default FavoriteEvents;
