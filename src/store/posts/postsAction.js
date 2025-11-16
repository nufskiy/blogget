import axios from 'axios';
import { URL_API } from '../../api/const';
import { postsSlice } from './postsSlice';

/* export const postsRequestAsync2 = (newPage) => (dispatch, getState) => {
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
}; */

export const postsRequestAsync = (newPage) => (dispatch, getState) => {
	let page = getState().postsReducer.page;
	if (newPage) {
		page = newPage;
		dispatch(postsSlice.actions.changePage(page));
	}
	const token = getState().tokenReducer.token;
	const after = getState().postsReducer.after;
	const loading = getState().postsReducer.loading;
	const isLast = getState().postsReducer.isLast;

	if (!token || loading || isLast) return;

	dispatch(postsSlice.actions.postsRequest());

	axios(`${URL_API}/${page}?limit=10${after ? `&after=${after}` : ''}`, {
		headers: {
			Authorization: `bearer ${token}`
		},
	})
		.then(({ data }) => {
			if (after) {
				dispatch(postsSlice.actions.postsRequestSuccessAfter(data.data));
			}
			else {
				dispatch(postsSlice.actions.postsRequestSuccess(data.data));
			}
		})
		.catch((error) => {
			console.error(error);
			dispatch(
				postsSlice.actions.postsRequestError({ error: error.toString() })
			);
		});
};
