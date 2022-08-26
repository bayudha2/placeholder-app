import { apiSlice } from '../../apiSlice';

import type { UserType } from './types';
export const extendedUserSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<UserType, string | number | unknown>({
      providesTags: (result) => [{ id: result.id, type: 'User' }],
      query: (id) => ({
        method: 'GET',
        url: `/users/${id}`
      })
    }),
    getUsers: builder.query<UserType[], void>({
      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ id }) => ({ id, type: 'User' as const })),
              { id: 'LIST', type: 'User' }
            ]
          : [{ id: 'LIST', type: 'User' }];
      },
      query: () => ({
        method: 'GET',
        url: '/users'
      })
    })
  })
});

export const { useGetUsersQuery, useGetUserQuery } = extendedUserSlice;
