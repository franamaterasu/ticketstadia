import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const EventDetail = () => {
  const { eventId } = useParams();

  const fest = useFetch(`http://localhost:3000/festivales/${eventId}`);

  const { imagen, nombre } = fest.data;

  return (
    <>
      <section className='container mx-auto py-10 lg:flex gap-10 h-[calc(100vh-72px)]'>
        <img
          src={imagen}
          className='rounded-md mb-10 lg:w-1/2'
        />
        <div>
          <h3 className='text-5xl mb-5 font-bold'>{nombre}</h3>
          <p className='font-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            officiis dolorum, error assumenda iste optio commodi reprehenderit
            odio hic repellendus tempora, incidunt quod corrupti maxime tenetur
            quia, veritatis et? Veniam dolorem hic vel cupiditate voluptatum
            necessitatibus debitis, dolores recusandae amet placeat consequatur
            a saepe excepturi quasi, esse error quo modi vitae totam iste enim.
            Quos libero, officiis expedita ea corrupti impedit a adipisci, rem
            iste error, consectetur dolorem fuga nostrum ut odit earum
            assumenda! Quas error in eligendi quis impedit consequatur incidunt
            natus hic cupiditate totam, architecto quisquam, voluptatibus modi
            ullam perferendis rem, quae odio rerum ipsam magnam. Sunt, corporis.
            Aliquam, incidunt voluptate eius vel modi distinctio quo debitis,
            quae voluptatibus expedita blanditiis, eligendi sapiente magnam
            facere sequi tenetur quisquam quod nisi eaque iusto omnis error
            temporibus! Culpa explicabo, cupiditate veniam quibusdam error a
            suscipit labore odio reiciendis eius, ipsam natus assumenda ducimus
            obcaecati et aliquam esse nesciunt, quasi aut dolorem perferendis
            ratione asperiores. Cupiditate, nulla esse voluptatem aperiam
            deserunt ipsa pariatur, voluptate officiis rem at incidunt fugiat
            aliquid sint ducimus. Voluptatum cumque modi quasi quisquam eos
            delectus placeat corrupti temporibus consequatur cupiditate, id
            officiis alias incidunt eveniet non earum molestiae voluptate nemo
            illum beatae debitis nisi. Maxime, quas labore.
          </p>
        </div>
      </section>
    </>
  );
};

export default EventDetail;
