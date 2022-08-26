import {
  useGetPostsQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
  useAddPostMutation
} from './services/postExtend';

import PostList from './components/PostList';

import type { PostyType } from './services/types';

export {
  useGetPostsQuery,
  useDeletePostMutation,
  PostList,
  useUpdatePostMutation,
  useAddPostMutation
};

export type { PostyType };
