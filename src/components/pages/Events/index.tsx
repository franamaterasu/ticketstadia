import { useEffect, useState } from 'react';
import { Fest } from '../../../types';
import Card from '../../Card';
import useFetch from '../../hooks/useFetch';

const Events = () => {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [sortValue, setSortValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const festsData = useFetch('http://localhost:3000/festivales');

  const categoriesMap = festsData.data.map((fest: Fest) => fest.categoria);

  const festsfilter = () => {
    return festsData.data
      .sort(
        (a: { [value: string]: number }, b: { [value: string]: number }) => {
          if (a[sortValue] > b[sortValue]) {
            return 1;
          } else {
            return -1;
          }
        }
      )
      .filter((fest: Fest) => {
        return (
          fest.nombre.toLowerCase().includes(search.toLowerCase()) &&
          (selectedCategory === 'all' || fest.categoria === selectedCategory)
        );
      });
  };

  useEffect(() => {
    setCategories(categoriesMap);
  }, [festsData.data]);

  return (
    <>
      <section className='bg-gray-700 py-5 mb-10'>
        <section className='container mx-auto flex justify-between items-center'>
          <input
            type='text'
            placeholder='Busca tu concierto...'
            className='w-1/3 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className='flex gap-5'>
            <select
              className='w-1/2 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              onChange={(e) => setSortValue(e.target.value)}>
              <option value='all'>Ordernar por:</option>
              <option value='nombre'>Nombre</option>
              <option value='precio'>Precio</option>
            </select>
            <select
              className='w-1/2 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value='all'>Selecciona un genero de musica</option>
              {categories.map((category) => {
                return (
                  <option
                    key={category}
                    value={category}>
                    {category}
                  </option>
                );
              })}
            </select>
          </div>
        </section>
      </section>
      <section className='container mx-auto pb-5'>
        <ul className='grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {festsfilter().map((fest: Fest) => (
            <li key={fest.id}>
              <Card info={fest} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Events;
