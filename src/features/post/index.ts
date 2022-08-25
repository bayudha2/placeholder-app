import { useGetPostsQuery, useDeletePostMutation } from './services/postExtend';

import PostList from './components/PostList';

import type { PostyType } from './services/types';

export { useGetPostsQuery, useDeletePostMutation, PostList };

export type { PostyType };
