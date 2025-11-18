import axios from 'axios';
import { URL_API } from '../../api/const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postsRequestAsync = createAsyncThunk(
	'posts/fetch',
	(newPage, { dispatch, getState }) => {
		const page = newPage || getState().postsReducer.page;
		const token = getState().tokenReducer.token;
		const after = getState().postsReducer.after;
		const isLast = getState().postsReducer.isLast;
		const oldPosts = getState().postsReducer.posts;

		if (!token || isLast) return getState().posts;

		return axios(
			`${URL_API}/${page}?limit=10${after ? `&after=${after}` : ''}`,
			{
				headers: {
					Authorization: `bearer ${token}`
				},
			}
		)
			.then(({ data }) => {
				let newPosts;
				if (after) {
					newPosts = [...oldPosts, ...data.data.children];
				}
				else {
					newPosts = data.data.children;
				}
				return { posts: newPosts, after: data.data.after, page };
			})
			.catch((error) => {
				console.error(error.toString());
				return error.toString();
			});
	}
);
