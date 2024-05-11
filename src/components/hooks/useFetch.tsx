import { useState, useEffect } from 'react';
import { Data } from '../../types';
import axios from 'axios';

const useFetch = (url: string) => {
  const [data, setData] = useState<Data>([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, []);

  return { data };
};

export default useFetch;
