import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Grid from '../../components/Grid';
import Card from '../../components/Card';
import { Fest } from '../../types';
import Alert from '../../components/Alert';

const Categories = () => {
  const { category } = useParams();

  const fest = useFetch('http://localhost:3000/festivales/');

  const categoryItems = fest.data.filter(
    (item: Fest) => item.categoria.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className='p-10'>
      <section className='container mx-auto'>
        <h1 className='text-2xl font-light text-gray-900 border-b border-b-slate-900 pb-5 mb-10'>
          Eventos con la categoria:{' '}
          <span className='font-bold capitalize'>{category}</span>
        </h1>
        {categoryItems.length > 0 ? (
          <>
            <Grid>
              {categoryItems.map((fest: Fest) => (
                <li key={fest.id}>
                  <Card info={fest} />
                </li>
              ))}
            </Grid>
          </>
        ) : (
          <Alert message='No existen eventos con esta categoria' />
        )}
      </section>
    </div>
  );
};

export default Categories;
