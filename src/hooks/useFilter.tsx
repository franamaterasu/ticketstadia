import { useState } from 'react';
import { Data, Fest } from '../types';

const useFilter = (array: Data) => {
  const [search, setSearch] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const arrayFiltered = () => {
    // Ordenacion del array
    return (
      array
        .sort(
          // tipado de la key y el value
          (a: { [value: string]: number }, b: { [value: string]: number }) => {
            if (a[sortValue] > b[sortValue]) {
              return 1;
            } else {
              return -1;
            }
          }
        )
        // Filtro por categoria
        .filter((fest: Fest) => {
          return (
            selectedCategory === 'all' || fest.categoria === selectedCategory
          );
        })
        // Filtro por nombre
        .filter((fest: Fest) => {
          return fest.nombre.toLowerCase().includes(search.toLowerCase());
        })
        // Filtro por ciudad
        .filter((fest: Fest) => {
          return selectedCity === 'all' || fest.ciudad === selectedCity;
        })
        // Filtro por fecha
        .filter((fest: Fest) => {
          return selectedDate === '' || fest.fecha === selectedDate;
        })
    );
  };

  // Numero de eventos por pagina
  const eventsPerPage = 8;

  /*

    === indexOfLastItem ===

    Calculo del ultimo evento que se muestra en la pagina actual:

    currentPage es 1 y eventsPerPage es 8, indexOfLastItem es 8 - Ultimo evento que se muestra es el de la posicion 8

    currentPage es 2 y eventsPerPage es 8, indexOfLastItem es 16 - Ultimo evento que se muestra es el de la posicion 16
  */
  const indexOfLastItem = currentPage * eventsPerPage;

  /*
  
    === indexOfFirstItem ===

    Calculo del primer evento que se muestra en la pagina actual

    Si indexOfLastItem es 8, indexOfFirstItem será 0, ya que, 8 - 8 = 0

    Si indexOfLastItem es 16, indexOfFirstItem sera 8, ya que 16 - 8 = 8
  */

  const indexOfFirstItem = indexOfLastItem - eventsPerPage;

  /*

    === currentItems ===

    Extraccion con '.slice' de una porcion del array.

    Los argumentos indexOfFirstItem y indexOfLastItem son el primer elemento y el ultimo de todos los items que se muestran en cada pagina

  */

  const currentItems = arrayFiltered().slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return {
    setSearch,
    setSelectedDate,
    setSortValue,
    setSelectedCategory,
    setSelectedCity,
    setCurrentPage,
    currentItems,
    handlePageChange,
    selectedCategory,
    currentPage,
    eventsPerPage,
    arrayFiltered,
  };
};

export default useFilter;
