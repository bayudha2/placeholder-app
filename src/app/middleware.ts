import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';

export const rtkQueryErrorHandler: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    if (action.payload.error) throw new Error(action.payload.error);
  }

  return next(action);
};
