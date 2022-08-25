import { apiSlice } from 'src/features/apiSlice';

import type { PostyType } from './types';

export const extendedPostSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostyType[], string | number | unknown>({
      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ id }) => ({ id, type: 'Post' as const })),
              { id: 'LIST', type: 'Post' }
            ]
          : [{ id: 'LIST', type: 'Post' }];
      },
      query: (id = 1) => ({
        method: 'GET',
        url: `/posts?userId=${id}`
      })
    }),
    deletePost: builder.mutation<void, number | string>({
      invalidatesTags: [{ id: 'LIST', type: 'Post' }],
      query: (id) => ({
        method: 'DELETE',
        url: `/posts/${id}`
      })
    })
  })
});

export const { useGetPostsQuery, useDeletePostMutation } = extendedPostSlice;
