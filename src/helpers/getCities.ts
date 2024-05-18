import useFetch from '../hooks/useFetch';
import { Fest } from '../types';

export const getCities = () => {
  const fests = useFetch('http://localhost:3000/festivales');

  const ciudadesData = fests.data.map((fest: Fest) => fest.ciudad);

  const ciudades = Array.from(new Set(ciudadesData));

  return { ciudades };
};
