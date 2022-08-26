import {
  useGetPostsQuery,
  useDeletePostMutation,
  useUpdatePostMutation,
  useAddPostMutation
} from './services/postExtend';

import FormPost from './components/FormPost';
import PostList from './components/PostList';

import type { PostyType } from './services/types';

export {
  useGetPostsQuery,
  useDeletePostMutation,
  PostList,
  useUpdatePostMutation,
  useAddPostMutation,
  FormPost
};

export type { PostyType };
