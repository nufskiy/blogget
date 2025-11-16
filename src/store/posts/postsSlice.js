import { createSlice } from '@reduxjs/toolkit';
// import { postsRequestAsync } from './postsAction';

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
		postsRequest: (state) => {
			state.error = '';
			state.loading = true;
		},
		postsRequestSuccess: (state, action) => {
			state.posts = action.payload.children;
			state.error = '';
			state.loading = false;
			state.after = action.payload.after;
			state.isLast = !action.payload.after;
		},
		postsRequestSuccessAfter: (state, action) => {
			state.posts = [...state.posts, ...action.payload.children];
			state.error = '';
			state.loading = false;
			state.after = action.payload.after;
			state.isLast = !action.payload.after;
		},
		postsRequestError: (state, action) => {
			state.loadingc = false;
			state.error = action.error;
		},
		changePage: (state, action) => {
			state.page = action.payload.page;
			state.after = '';
			state.isLast = false;
		},
	},
	/* extraReducers: builder => {
		builder
			.addCase(postsRequestAsync.pending, (state) => {
				state.error = '';
				state.status = 'loading';
			})
			.addCase(postsRequestAsync.fulfilled, (state, action) => {
				state.post = action.payload.post;
				state.comments = action.payload.comments;
				state.error = '';
				state.status = 'loaded';
			})
			.addCase(postsRequestAsync.rejected, (state, action) => {
				state.error = action.error;
				state.status = 'error';
			});
	} */
});

export default postsSlice.reducer;
