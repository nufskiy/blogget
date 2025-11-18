import axios from 'axios';
import { URL_API } from '../../api/const';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_SUCCESS_AFTER = 'POSTS_REQUEST_SUCCESS_AFTER';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';
export const CHANGE_PAGE = 'CHANGE_PAGE';

export const postsRequest = () => ({
	type: POSTS_REQUEST,
});

export const postsRequestSuccess = (data) => ({
	type: POSTS_REQUEST_SUCCESS,
	posts: data.children,
	after: data.after,
});

export const postsRequestSuccessAfter = (data) => ({
	type: POSTS_REQUEST_SUCCESS_AFTER,
	posts: data.children,
	after: data.after,
});

export const postsRequestError = (error) => ({
	type: POSTS_REQUEST_ERROR,
	error,
});

export const changePage = (page) => ({
	type: CHANGE_PAGE,
	page,
});

export const postsRequestAsync = (newPage) => (dispatch, getState) => {
	let page = getState().postsReducer.page;
	if (newPage) {
		page = newPage;
		dispatch(changePage(page));
	}
	const token = getState().tokenReducer.token;
	const after = getState().postsReducer.after;
	const loading = getState().postsReducer.loading;
	const isLast = getState().postsReducer.isLast;

	if (!token || loading || isLast) return;

	dispatch(postsRequest());

	axios(`${URL_API}/${page}?limit=10${after ? `&after=${after}` : ''}`, {
		headers: {
			Authorization: `bearer ${token}`
		},
	})
		.then(({ data }) => {
			if (after) {
				dispatch(postsRequestSuccessAfter(data.data));
			}
			else {
				dispatch(postsRequestSuccess(data.data));
			}
		})
		.catch((err) => {
			console.error(err);
			dispatch(postsRequestError(err.toString()));
		});
};
