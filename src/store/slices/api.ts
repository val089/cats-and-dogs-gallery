import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Dog } from '../../models';

const API_KEY = 'live_lnZB5pTdeGYxVuGjzpQJSb0VFRvxaFsxed9ErShXcz2zoSOF5gHZRvXtFJUPGZQK';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.thedogapi.com/v1',
  prepareHeaders: (headers, api) => {
    headers.set('X-API-KEY', API_KEY);
  },
});

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({
    fetchDogs: builder.query<Dog[], number>({
      query: (limit) => `/images/search?limit=${limit}`,
    }),
  }),
});

export const { useFetchDogsQuery } = apiSlice;
