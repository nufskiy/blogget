import axios from 'axios';
import { put, select, takeLatest } from 'redux-saga/effects';
import { URL_API } from '../../api/const';
import { postsSlice } from './postsSlice';

function* fetchPosts({ newPage = '', newQuery = '' }) {
	const token = yield select(state => state.tokenReducer.token);

	const query = yield newQuery || select(state => state.postsReducer.query) ||
		'';

	const page = yield newPage || select(state => state.postsReducer.page) || '';
	yield newPage && put(postsSlice.actions.changePage(newPage));

	const {
		posts: oldPosts,
		isLast,
		after: oldAfter,
	} = yield select((store) => store.postsReducer);

	if (!token || isLast) return;

	try {
		const queryString = new URLSearchParams();
		if (oldAfter) {
			queryString.append('after', oldAfter);
		}
		if (query) {
			queryString.append('q', query);
		}

		const response = yield axios(
			// eslint-disable-next-line max-len
			`${URL_API}/${page}?${queryString.toString()}`, // TODO: как будто бы q используется только при search
			{
				headers: {
					Authorization: `bearer ${token}`,
				},
			}
		);

		let newPosts;
		if (oldAfter) {
			newPosts = [...oldPosts, ...response.data.data.children];
		}
		else {
			newPosts = response.data.data.children;
		}

		yield put(postsSlice.actions.requestSuccess({
			children: newPosts,
			after: response.data.data.after,
		}));
	}
	catch (error) {
		yield put(postsSlice.actions.requestError(error));
	}
}

export function* watchPosts() {
	yield takeLatest('posts/request', fetchPosts);
}
