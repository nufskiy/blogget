import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	posts: [],
	error: '',
	after: '',
	isLast: false,
	page: '',
	query: '',
};

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		changePage: (state, action) => {
			state.page = action.payload;
			if (action.payload !== 'search') {
				state.query = '';
			}
			state.after = '';
			state.isLast = false;
			state.posts = [];
		},
		request: (state, action) => {
			if (typeof action.payload !== 'undefined') {
				state.query = action.payload.query;
				state.posts = [];
				state.after = '',
				state.isLast = false;
			}
			state.loading = true;
			state.error = '';
		},
		requestSuccess: (state, action) => {
			state.loading = false;
			state.posts = action.payload.children;
			state.error = '';
			state.after = action.payload.after;
			state.isLast = !action.payload.after;
		},
		requestError: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		},
	},
});

export default postsSlice.reducer;
