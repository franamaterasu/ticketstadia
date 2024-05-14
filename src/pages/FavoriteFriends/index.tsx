import { useSelector } from 'react-redux';
import { Profile } from '../../types';
import Person from '../../components/Person';
import Alert from '../../components/Alert';
import Grid from '../../components/Grid';

const FavoriteFriends = () => {
  const { friends } = useSelector((state) => state.friends);

  return (
    <section>
      {friends.length > 0 ? (
        <Grid>
          {friends.map((friend: Profile) => (
            <li key={friend.id}>
              <Person info={friend} />
            </li>
          ))}
        </Grid>
      ) : (
        <Alert message='No tienes amigos en tu lista.' />
      )}
    </section>
  );
};

export default FavoriteFriends;
