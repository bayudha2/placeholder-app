import {
  useGetCommentsQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
  useUpdateCommentMutation
} from '../comment/services/commentExtend';
import type { CommentType } from '../comment/services/types';

import CommentList from './components/CommentList';
import FormComment from './components/FormComment';

export {
  useGetCommentsQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
  CommentList,
  FormComment
};
export { CommentType };
