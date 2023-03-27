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
  filter: 'dogs' | 'cats';
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (builder) => ({
    fetchPhotos: builder.query<Dog[] | Cat[], QueryParams>({
      query: ({ limit = 10, page = 0, filter = 'dogs' }) => ({
        url: `${
          filter === 'dogs' ? DOGS_URL : CATS_URL
        }/images/search?page=${page}&limit=${limit}&mime_types=jpg,png`,
        headers: {
          'x-api-key': filter === 'dogs' ? DOGS_API_KEY : CATS_API_KEY,
        },
      }),
    }),
  }),
});

export const { useFetchPhotosQuery } = apiSlice;
