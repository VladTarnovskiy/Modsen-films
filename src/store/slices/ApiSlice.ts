import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ott-details.p.rapidapi.com/advancedsearch',
  }),
  endpoints: (builder) => ({
    getCharactersInfo: builder.query<{ searchValue: string; page: number }>({
      query: ({ searchValue, page }) =>
        `/character/?type=${searchValue}&page=${page}`,
    }),
    getCharacterInfo: builder.query({
      query: (id) => `/details/${id}`,
    }),
  }),
});

export const { useGetCharactersInfoQuery, useGetCharacterInfoQuery } = apiSlice;
