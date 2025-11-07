import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';
import { tokenMiddleware, tokenReducer } from './tokenReducer';
import { commentReducer } from './commentReducer';
import { authReducer } from './auth/authReducer';
import { postsReducer } from './posts/postsReducer';

const rootReducer = combineReducers({
	authReducer,
	tokenReducer,
	postsReducer,
	commentReducer,
});

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(tokenMiddleware, thunk))
);
