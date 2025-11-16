import {
	UPDATE_COMMENT,
} from './commentAction';

const initialState = {
	newComment: '',
};

export const commentReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_COMMENT:
			return {
				...state,
				newComment: action.comment,
			};
		default:
			return state;
	}
};
