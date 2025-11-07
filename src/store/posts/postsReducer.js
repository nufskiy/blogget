import {
	POSTS_REQUEST,
	POSTS_REQUEST_ERROR,
	POSTS_REQUEST_SUCCESS
} from './postsAction';

const initialState = {
	data: [],
	error: '',
	status: '',
};

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case POSTS_REQUEST:
			return {
				...state,
				error: '',
				status: 'loading',
			};
		case POSTS_REQUEST_SUCCESS:
			return {
				...state,
				data: action.data,
				error: '',
				status: 'loaded',
			};
		case POSTS_REQUEST_ERROR:
			return {
				...state,
				error: action.error,
				status: 'error',
			};
		default:
			return state;
	}
};
