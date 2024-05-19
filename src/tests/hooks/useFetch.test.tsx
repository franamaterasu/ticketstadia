import { describe, test, expect, beforeEach, afterEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import useFetch from '../../hooks/useFetch';

describe('useFetch', () => {
  // Variable para simular request
  let axiosMock: AxiosMockAdapter;

  beforeEach(() => {
    // Antes de cada test se hace la simulacion del request
    axiosMock = new AxiosMockAdapter(axios);
  });

  afterEach(() => {
    // Despues de cada test se limpian las peticiones
    axiosMock.reset();
  });

  test('should return data when request is OK', async () => {
    const mockData = [
      {
        id: 1,
        nombre: 'Jane Doe',
        email: 'jane.doe@email.com',
      },
    ];

    // Se simula una peticion correcta 'get' con un resultado 200
    axiosMock.onGet('https://fakeUrl.com/data').reply(200, mockData);

    // Se utiliza el hook para hacer uan peticion
    const { result } = renderHook(() => useFetch('https://fakeUrl.com/data'));

    // Se espera que el resultado de la simulacion y el resultado de utilizar el hook useFetch sea el mismo, que contenga data
    await waitFor(() => expect(result.current.data).toEqual(mockData));
  });

  test('should return empty data when request is not OK', () => {
    // Se simula una peticion incorrecta 'get' con un resultado 500
    axiosMock.onGet('https://example.com/data').reply(500);

    // Se utiliza el hook para hacer uan peticion
    const { result } = renderHook(() => useFetch('https://fakeUrl.com/data'));

    // Se espera que el resultado de la simulacion y el resultado de utilizar el hook useFetch sea el mismo, que NO contenga data
    expect(result.current.data).toEqual([]);
  });
});
