import { useState } from 'react';
import { Fest } from '../../types';
import Card from '../../components/Card';
import useFetch from '../../components/hooks/useFetch';
import Pagination from '../../components/Pagination';
import Alert from '../../components/Alert';
import { FaMusic } from 'react-icons/fa6';
import Grid from '../../components/Grid';
import { getCategories } from '../../helpers/getCategories';
import { getCities } from '../../helpers/getCities';

const Events = () => {
  const [search, setSearch] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const festsData = useFetch('http://localhost:3000/festivales');

  const { categorias } = getCategories();

  const { ciudades } = getCities();

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
          selectedCategory === 'all' || fest.categoria === selectedCategory
        );
      })
      .filter((fest: Fest) => {
        return fest.nombre.toLowerCase().includes(search.toLowerCase());
      })
      .filter((fest: Fest) => {
        return selectedCity === 'all' || fest.ciudad === selectedCity;
      })
      .filter((fest: Fest) => {
        return selectedDate === '' || fest.fecha === selectedDate;
      });
  };

  const eventsPerPage = 8;

  const indexOfLastItem = currentPage * eventsPerPage;

  const indexOfFirstItem = indexOfLastItem - eventsPerPage;

  const currentItems = festsfilter().slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className='bg-gray-700 py-10 mb-10 xl:mb-0'>
        <section className='container mx-auto grid gap-8 md:grid md:grid-cols-2 lg:grid-cols-4'>
          <input
            type='text'
            placeholder='Busca tu concierto...'
            className='w-full border font-light rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
          <select
            className='w-full border font-light rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent xl:hidden'
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setCurrentPage(1);
            }}>
            <option value='all'>Selecciona un genero de musica</option>
            {categorias.map((category) => {
              return (
                <option
                  key={category}
                  value={category}>
                  {category}
                </option>
              );
            })}
          </select>
          <select
            className='w-full border font-light rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            onChange={(e) => {
              setSelectedCity(e.target.value);
              setCurrentPage(1);
            }}>
            <option value='all'>Selecciona una ciudad</option>
            {ciudades.map((city) => {
              return (
                <option
                  key={city}
                  value={city}>
                  {city}
                </option>
              );
            })}
          </select>
          <input
            type='date'
            className='w-full border font-light rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            onChange={(e) => setSelectedDate(e.target.value)}
          />
          <select
            className='w-full border font-light rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent xl:w-full'
            onChange={(e) => setSortValue(e.target.value)}>
            <option value='all'>Ordernar por:</option>
            <option value='nombre'>Nombre</option>
            <option value='precio'>Precio</option>
          </select>
        </section>
      </section>
      <section className='hidden bg-gray-900 py-5 mb-5 xl:block'>
        <section className='container mx-auto flex gap-14 justify-around content-center'>
          <button
            className={`font-light hover:text-red-500 ${
              selectedCategory === 'all' ? 'text-red-500' : 'text-white'
            }`}
            onClick={() => {
              setSelectedCategory('all');
              setCurrentPage(1);
            }}>
            <FaMusic className='mx-auto text-3xl mb-3' />
            All
          </button>
          {categorias.map((category) => {
            return (
              <button
                key={category}
                className={` font-light hover:text-red-500 ${
                  selectedCategory === category ? 'text-red-500' : 'text-white'
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}>
                <FaMusic className='mx-auto text-3xl mb-3' />
                {category}
              </button>
            );
          })}
        </section>
      </section>
      <section className='container mx-auto pb-5'>
        {currentItems.length > 0 ? (
          <>
            <Grid>
              {currentItems.map((fest: Fest) => (
                <li key={fest.id}>
                  <Card info={fest} />
                </li>
              ))}
            </Grid>
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(festsfilter().length / eventsPerPage)}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <Alert message='No existen eventos con tus condiciones de busqueda' />
        )}
      </section>
    </>
  );
};

export default Events;
