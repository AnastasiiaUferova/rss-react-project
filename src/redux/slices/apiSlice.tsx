import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../../constants/constants';

export const showApi = createApi({
  reducerPath: 'showApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getAllCards: builder.query({
      query: () => 'api/most-popular?page=1',
    }),
    getCard: builder.query({
      query: (selectedCardId) => `api/show-details?q=${selectedCardId}`,
    }),
    getFilteredCards: builder.query({
      query: (query: string) => `api/search?q=${query}`,
    }),
  }),
});

export const { useGetAllCardsQuery, useGetCardQuery, useGetFilteredCardsQuery } = showApi;
