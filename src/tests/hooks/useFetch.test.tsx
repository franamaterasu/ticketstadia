import { describe, test, expect, beforeEach, afterEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import useFetch from '../../hooks/useFetch';

describe('useFetch', () => {
  let axiosMock: AxiosMockAdapter;

  beforeEach(() => {
    axiosMock = new AxiosMockAdapter(axios);
  });

  afterEach(() => {
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

    axiosMock.onGet('https://fakeUrl.com/data').reply(200, mockData);

    const { result } = renderHook(() => useFetch('https://fakeUrl.com/data'));

    await waitFor(() => expect(result.current.data).toEqual(mockData));
  });

  test('should return empty data when request is not OK', () => {
    axiosMock.onGet('https://example.com/data').reply(500);

    const { result } = renderHook(() => useFetch('https://fakeUrl.com/data'));

    expect(result.current.data).toEqual([]);
  });
});
