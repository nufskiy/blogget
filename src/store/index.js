import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import { tokenMiddleware, tokenReducer } from './token/tokenReducer';
import { authReducer } from './auth/authReducer';
import { postsReducer } from './posts/postsReducer';
import { commentsReducer } from './comments/commentsReducer';

const rootReducer = combineReducers({
	tokenReducer,
	authReducer,
	postsReducer,
	commentsReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(tokenMiddleware, thunk))
);
