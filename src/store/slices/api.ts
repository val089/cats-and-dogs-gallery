import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Dog, Cat } from '../../models';

const DOGS_API_KEY = 'live_lnZB5pTdeGYxVuGjzpQJSb0VFRvxaFsxed9ErShXcz2zoSOF5gHZRvXtFJUPGZQK';
const CATS_API_KEY = 'live_gcMN7tzYHFW7uYkfgaCdoJEWMkAmiISf9YxvJHqeQk2EH71BmqWuZ7KKNE4SasKM';

const DOGS_URL = 'api.thedogapi.com/v1';
const CATS_URL = 'api.thecatapi.com/v1';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://',
});

interface QueryParams {
  limit?: number;
  page?: number;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({
    fetchDogs: builder.query<Dog[], QueryParams>({
      query: ({ limit = 10, page = 0 }) => ({
        url: `${DOGS_URL}/images/search?page=${page}&limit=${limit}`,
        headers: {
          'x-api-key': DOGS_API_KEY,
        },
      }),
    }),
    fetchCats: builder.query<Cat[], number>({
      query: (limit) => ({
        url: `${CATS_URL}/images/search?limit=${limit}`,
        headers: {
          'x-api-key': CATS_API_KEY,
        },
      }),
    }),
  }),
});

export const { useFetchDogsQuery, useFetchCatsQuery } = apiSlice;
