import { takeLatest, put, select } from 'redux-saga/effects';
import { URL_API } from '../../api/const';
import axios from 'axios';
import {
	searchRequestSuccess,
	searchRequestError,
	SEARCH_REQUEST,
} from './searchAction';

function* fetchSearch({ search }) {
	const token = yield select(state => state.tokenReducer.token);

	try {
		const response = yield axios(`${URL_API}/search?q=${search}`, {
			headers: {
				Authorization: `bearer ${token}`,
			},
		});

		console.log(response.data.data);

		yield put(searchRequestSuccess(response.data.data));
	}
	catch (error) {
		yield put(searchRequestError(error));
	}
};

export function* watchSearch() {
	yield takeLatest(SEARCH_REQUEST, fetchSearch);
};
