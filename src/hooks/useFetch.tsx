import { useState, useEffect } from 'react';
import { Data } from '../types';
import axios from 'axios';

const useFetch = (url: string) => {
  const [data, setData] = useState<Data>([]);

  useEffect(() => {
    axios
      .get(url) // Petición 'get' a la URL
      .then((res) => setData(res.data)) // Si la peticion es OK, guardamos la data en el estado
      .catch((error) => console.log(error)); //Si la peticion no es OK, se maneja el error y se muestra por consola
  }, []);

  return { data };
};

export default useFetch;
