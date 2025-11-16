import {
	COMMENTS_REQUEST,
	COMMENTS_REQUEST_SUCCESS,
	COMMENTS_REQUEST_ERROR,
} from './commentsAction';

const initialState = {
	post: {},
	comments: [],
	error: '',
	status: '',
};

export const commentsReducer = (state = initialState, action) => {
	switch (action.type) {
		case COMMENTS_REQUEST:
			return {
				...state,
				error: '',
				status: 'loading',
			};
		case COMMENTS_REQUEST_SUCCESS:
			return {
				...state,
				post: action.data.post,
				comments: action.data.comments,
				error: '',
				status: 'loaded',
			};
		case COMMENTS_REQUEST_ERROR:
			return {
				...state,
				error: action.error,
				status: 'error',
			};
		default:
			return state;
	}
};
