import { apiSlice } from 'src/features/apiSlice';

import type { PostyType } from './types';

export const extendedPostSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPost: builder.mutation<PostyType, Partial<PostyType>>({
      invalidatesTags: [{ id: 'LIST', type: 'Post' }],
      query: (body) => ({
        body,
        method: 'POST',
        url: '/posts'
      })
    }),
    deletePost: builder.mutation<void, number | string>({
      invalidatesTags: [{ id: 'LIST', type: 'Post' }],
      query: (id) => ({
        method: 'DELETE',
        url: `/posts/${id}`
      })
    }),
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
    updatePost: builder.mutation<PostyType, PostyType>({
      invalidatesTags: (_, __, arg) => [{ id: arg.id, type: 'Post' }],
      query: (body) => ({
        body,
        method: 'PUT',
        url: `/posts/${body.id}`
      })
    })
  })
});

export const {
  useGetPostsQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
  useAddPostMutation
} = extendedPostSlice;
