import axios from 'axios';
import { put, select, takeLatest } from 'redux-saga/effects';
import { URL_API } from '../../api/const';
import { postsSlice } from './postsSlice';

function* fetchPosts({ newPage = '', newQuery = '' }) {
	const token = yield select(state => state.tokenReducer.token);

	const query = yield newQuery || select(state => state.postsReducer.query) ||
		'';
	yield newQuery && put(postsSlice.actions.setQuery(newQuery));

	const page = yield newPage || select(state => state.postsReducer.page) || '';
	yield newPage && put(postsSlice.actions.changePage(newPage));

	try {
		const response = yield axios(
			`${URL_API}/${page}${query ? `?q=${query}` : ''}`,
			{
				headers: {
					Authorization: `bearer ${token}`,
				},
			}
		);

		yield put(postsSlice.actions.requestSuccess(response.data.data));
	}
	catch (error) {
		yield put(postsSlice.actions.requestError(error));
	}
}

export function* watchPosts() {
	// TODO: засунуть в postsAction определения для posts/request
	yield takeLatest('posts/request', fetchPosts);
}
