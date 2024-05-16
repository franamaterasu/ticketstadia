import useFetch from '../components/hooks/useFetch';
import { Fest } from '../types';

export const getCategories = () => {
  const fests = useFetch('http://localhost:3000/festivales');

  const categoriasData = fests.data.map((item: Fest) => item.categoria);

  const categorias = Array.from(new Set(categoriasData));

  return { categorias };
};
