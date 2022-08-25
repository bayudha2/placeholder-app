import {
  useGetPostsQuery,
  useDeletePostMutation,
  useUpdatePostMutation
} from './services/postExtend';

import PostList from './components/PostList';

import type { PostyType } from './services/types';

export { useGetPostsQuery, useDeletePostMutation, PostList, useUpdatePostMutation };

export type { PostyType };
