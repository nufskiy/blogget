import { tokenMiddleware, tokenReducer } from './token/tokenReducer';
import { authReducer } from './auth/authReducer';
import { postsReducer } from './posts/postsReducer';
import commentsReducer from './comments/commentsSlice';
import { commentReducer } from './comment/commentReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		tokenReducer,
		authReducer,
		postsReducer,
		commentsReducer,
		commentReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(tokenMiddleware)
});
