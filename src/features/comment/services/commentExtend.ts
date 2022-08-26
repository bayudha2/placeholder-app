import { apiSlice } from '../../apiSlice';

import type { CommentType } from './types';
export const extendedCommentSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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
    })
  })
});

export const { useGetCommentsQuery } = extendedCommentSlice;
