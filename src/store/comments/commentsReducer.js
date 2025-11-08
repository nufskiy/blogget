import {
	COMMENTS_REQUEST,
	COMMENTS_REQUEST_SUCCESS,
	COMMENTS_REQUEST_ERROR,
	UPDATE_COMMENT,
} from './commentsAction';

const initialState = {
	post: {},
	comments: [],
	error: '',
	status: '',
	newComment: '',
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
		case UPDATE_COMMENT:
			return {
				...state,
				newComment: action.comment,
			};
		default:
			return state;
	}
};
