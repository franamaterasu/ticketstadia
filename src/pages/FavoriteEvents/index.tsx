import { useSelector } from 'react-redux';
import { Fest } from '../../types';
import Card from '../../components/Card';
import Alert from '../../components/Alert';
import Grid from '../../components/Grid';

const FavoriteEvents = () => {
  const { events } = useSelector((state) => state.events);

  return (
    <section>
      {events.length > 0 ? (
        <Grid>
          {events.map((fest: Fest) => (
            <li key={fest.id}>
              <Card info={fest} />
            </li>
          ))}
        </Grid>
      ) : (
        <Alert message='No existen eventos en la lista de favoritos' />
      )}
    </section>
  );
};

export default FavoriteEvents;
