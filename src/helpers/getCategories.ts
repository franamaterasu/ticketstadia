import useFetch from '../hooks/useFetch';
import { Fest } from '../types';

export const getCategories = () => {
  // fetch a la url de festivales
  const fests = useFetch('http://localhost:3000/festivales');

  // se obtienen las categorias
  const categoriasData = fests.data.map((item: Fest) => item.categoria);

  // se eliminan las categorias repetidas, para que cada categoria sea unica
  const categorias = Array.from(new Set(categoriasData));

  return { categorias };
};
