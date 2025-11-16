import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	post: {},
	comments: [],
	error: '',
	status: '',
};

export const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {
		commentsRequest: (state) => {
			state.error = '';
			state.status = 'loading';
		},
		commentsRequestSuccess: (state, action) => {
			state.post = action.payload.post;
			state.comments = action.payload.comments;
			state.error = '';
			state.status = 'loaded';
		},
		commentsRequestError: (state, action) => {
			state.error = action.error;
			state.status = 'error';
		},
	},
});

export default commentsSlice.reducer;
