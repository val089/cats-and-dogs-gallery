import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import { Dog, Cat, Filter, FavouritePhoto } from '../../models';

const DOGS_API_KEY = 'live_7z5l7VjCWmIDFL585QqoogQwGo9uElBvMeFmIaOjY6nRVLwSxOVKgKGjyKL8meQK';
const CATS_API_KEY = 'live_gcMN7tzYHFW7uYkfgaCdoJEWMkAmiISf9YxvJHqeQk2EH71BmqWuZ7KKNE4SasKM';

const DOGS_URL = 'api.thedogapi.com/v1';
const CATS_URL = 'api.thecatapi.com/v1';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://',
  prepareHeaders: (headers) => {
    headers.set('Access-Control-Allow-Origin', '*');
    return headers;
  },
});

interface FetchPhotosParams {
  limit?: number;
  page?: number;
  filter?: Filter;
}

interface FetchFavouritesParams {
  userId: string;
  filter: Filter;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Favourites'],
  endpoints: (builder) => ({
    fetchPhotos: builder.query<Dog[] | Cat[], FetchPhotosParams>({
      query: ({ limit = 10, page = 0, filter = 'dogs' }) => ({
        url: `${
          filter === 'dogs' ? DOGS_URL : CATS_URL
        }/images/search?page=${page}&limit=${limit}&mime_types=jpg,png`,
        headers: {
          'x-api-key': filter === 'dogs' ? DOGS_API_KEY : CATS_API_KEY,
        },
      }),
    }),
    fetchFavourites: builder.query<FavouritePhoto[], FetchFavouritesParams>({
      query: ({ filter, userId }) => ({
        url: `${filter === 'dogs' ? DOGS_URL : CATS_URL}/favourites?sub_id=${userId}`,
        headers: {
          'x-api-key': filter === 'dogs' ? DOGS_API_KEY : CATS_API_KEY,
        },
      }),
      providesTags: ['Favourites'],
    }),
    addToFavourites: builder.mutation({
      query: ({ filter = 'dogs', sub_id, image_id }) => ({
        url: `${filter === 'dogs' ? DOGS_URL : CATS_URL}/favourites?sub_id=${sub_id}`,
        headers: {
          'x-api-key': filter === 'dogs' ? DOGS_API_KEY : CATS_API_KEY,
        },
        method: 'POST',
        body: {
          image_id,
          sub_id,
        },
      }),
      transformResponse: () => toast.success('Photo was added.'),
      transformErrorResponse: () => toast.error('You had already added this photo.'),
      invalidatesTags: ['Favourites'],
    }),
    removeFromFavourites: builder.mutation({
      query: ({ filter = 'dogs', id }) => ({
        url: `${filter === 'dogs' ? DOGS_URL : CATS_URL}/favourites/${id}`,
        method: 'DELETE',
        headers: {
          'x-api-key': filter === 'dogs' ? DOGS_API_KEY : CATS_API_KEY,
        },
      }),
      transformResponse: () => toast.success('Photo was removed.'),
      transformErrorResponse: () => toast.error('An error has occurred.'),
      invalidatesTags: ['Favourites'],
    }),
  }),
});

export const {
  useFetchPhotosQuery,
  useFetchFavouritesQuery,
  useAddToFavouritesMutation,
  useRemoveFromFavouritesMutation,
} = apiSlice;
