import { apiSlice } from '../../apiSlice';

import type { CommentType } from './types';

export const extendedCommentSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addComment: builder.mutation<CommentType, Partial<CommentType>>({
      invalidatesTags: [{ id: 'LIST', type: 'Comment' }],
      query: (body) => ({
        body,
        method: 'POST',
        url: '/comments'
      })
    }),
    deleteComment: builder.mutation<void, number | string>({
      invalidatesTags: [{ id: 'LIST', type: 'Comment' }],
      query: (id) => ({
        method: 'DELETE',
        url: `/comments/${id}`
      })
    }),
    getComments: builder.query<CommentType[], string | number>({
      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ id }) => ({ id, type: 'Comment' as const })),
              { id: 'LIST', type: 'Comment' }
            ]
          : [{ id: 'LIST', type: 'Comment' }];
      },
      query: (id) => ({
        method: 'GET',
        url: `/posts/${id}/comments`
      })
    }),
    updateComment: builder.mutation<CommentType, CommentType>({
      invalidatesTags: (_, __, arg) => [{ id: arg.id, type: 'Comment' }],
      query: (body) => ({
        body,
        method: 'PUT',
        url: `/comments/${body.id}`
      })
    })
  })
});

export const {
  useGetCommentsQuery,
  useDeleteCommentMutation,
  useAddCommentMutation,
  useUpdateCommentMutation
} = extendedCommentSlice;
