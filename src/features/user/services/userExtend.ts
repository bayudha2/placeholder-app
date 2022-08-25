import { apiSlice } from '../../apiSlice';

import type { UserType } from './types';
export const extendedUserSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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

export const { useGetUsersQuery } = extendedUserSlice;
