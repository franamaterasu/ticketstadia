import { useSelector } from 'react-redux';
import { Profile } from '../../types';
import Person from '../../components/Person';
import Alert from '../../components/Alert';

const FavoriteFriends = () => {
  const { friends } = useSelector((state) => state.friends);

  return (
    <section>
      {friends.length > 0 ? (
        <ul className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {friends.map((friend: Profile) => (
            <li key={friend.id}>
              <Person info={friend} />
            </li>
          ))}
        </ul>
      ) : (
        <Alert message='No tienes amigos en tu lista.' />
      )}
    </section>
  );
};

export default FavoriteFriends;
