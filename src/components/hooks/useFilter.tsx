import { useState } from 'react';
import { Data, Fest } from '../../types';

const useFilter = (array: Data) => {
  const [search, setSearch] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const arrayFiltered = () => {
    return array
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
