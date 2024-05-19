import useFetch from '../hooks/useFetch';
import { Fest } from '../types';

export const getCities = () => {
  // fetch a la url de festivales
  const fests = useFetch('http://localhost:3000/festivales');

  // se obtienen las ciudades
  const ciudadesData = fests.data.map((fest: Fest) => fest.ciudad);

  // se eliminan las ciudades repetidas, para que cada ciudad sea unica
  const ciudades = Array.from(new Set(ciudadesData));

  return { ciudades };
};
