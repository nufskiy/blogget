import { takeLatest, put, select } from 'redux-saga/effects';
import { URL_API } from '../../api/const';
import axios from 'axios';
import { searchRequestSuccess, SEARCH_REQUEST } from './searchAction';

const fetchSearch = async (search, token) => {
	const request = await axios(`${URL_API}/search?q=${search}`, {
		headers: {
			Authorization: `bearer ${token}`,
		},
	});

	return request.data;
};

function* workerSearch(action) {
	const token = yield select(state => state.tokenReducer.token);
	const { data } = yield fetchSearch(action.search, token);
	yield put(searchRequestSuccess(data));
};

export function* watchSearch() {
	yield takeLatest(SEARCH_REQUEST, workerSearch);
};
