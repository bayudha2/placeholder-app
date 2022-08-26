import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';
import showToast from 'src/utils/useToast';

export const rtkQueryErrorHandler: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action.payload.error) showToast(action.payload.error, 'error');
  }

  return next(action);
};
