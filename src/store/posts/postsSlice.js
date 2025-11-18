import { createSlice } from '@reduxjs/toolkit';
import { postsRequestAsync } from './postsAction';

const initialState = {
	loading: false,
	posts: [],
	error: '',
	after: '',
	isLast: false,
	page: '',
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
		},
	},
	extraReducers: builder => {
		builder
			.addCase(postsRequestAsync.pending, (state) => {
				state.loading = true;
				state.error = '';
			})
			.addCase(postsRequestAsync.fulfilled, (state, action) => {
				state.loading = false;
				state.posts = action.payload.posts;
				state.error = '';
				state.after = action.payload.after;
				state.isLast = !action.payload.after;
			})
			.addCase(postsRequestAsync.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.error;
			});
	}
});

export default postsSlice.reducer;
