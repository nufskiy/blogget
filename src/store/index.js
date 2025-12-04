import { tokenMiddleware, tokenReducer } from './token/tokenReducer';
import { authReducer } from './auth/authReducer';
import postsReducer from './posts/postsSlice';
import commentsReducer from './comments/commentsSlice';
import { commentReducer } from './comment/commentReducer';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		tokenReducer,
		authReducer,
		postsReducer,
		commentsReducer,
		commentReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(tokenMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
