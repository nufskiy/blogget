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
			state.after = '';
			state.isLast = false;
			state.posts = [];
			state.query = '';
		},
		setQuery: (state, action) => {
			state.page = 'search';
			state.query = action.payload;
			state.posts = [];
			state.error = '';
			state.after = '',
			state.isLast = false;
		},
		request: (state) => {
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
