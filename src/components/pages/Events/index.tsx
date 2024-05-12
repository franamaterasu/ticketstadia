import { useEffect, useState } from 'react';
import { Fest } from '../../../types';
import Card from '../../Card';
import useFetch from '../../hooks/useFetch';
import Pagination from '../../Pagination';

const Events = () => {
  const [search, setSearch] = useState('');
  const [categories, setCategories] = useState([]);
  const [sortValue, setSortValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const festsData = useFetch('http://localhost:3000/festivales');

  const categoriesMap = festsData.data.map((fest: Fest) => fest.categoria);

  const cleanedCategories = Array.from(new Set(categoriesMap));

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

  const eventsPerPage = 8;

  const indexOfLastItem = currentPage * eventsPerPage;

  const indexOfFirstItem = indexOfLastItem - eventsPerPage;

  const currentItems = festsfilter().slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCategories(cleanedCategories);
  }, [festsData.data]);

  return (
    <>
      <section className='bg-gray-700 py-5 mb-10'>
        <section className='container mx-auto flex justify-between items-center'>
          <input
            type='text'
            placeholder='Busca tu concierto...'
            className='w-1/3 border font-light rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
          <div className='flex gap-5'>
            <select
              className='w-1/2 border font-light rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              onChange={(e) => setSortValue(e.target.value)}>
              <option value='all'>Ordernar por:</option>
              <option value='nombre'>Nombre</option>
              <option value='precio'>Precio</option>
            </select>
            <select
              className='w-1/2 border font-light rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}>
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
          {currentItems.map((fest: Fest) => (
            <li key={fest.id}>
              <Card info={fest} />
            </li>
          ))}
        </ul>
      </section>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(festsfilter().length / eventsPerPage)}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Events;
