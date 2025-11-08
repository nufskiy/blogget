import { useDispatch } from 'react-redux';
import { updateToken } from '../store/token/tokenAction';

export const setToken = (token) => {
	localStorage.setItem('bearer', token);
};

export const getToken = () => {
	const dispatch = useDispatch();

	let token = '';
	// eslint-disable-next-line max-len
	if (location.pathname.includes('/auth') && location.hash !== '') { // на странице после сервера авторизации reddit
		token = new URLSearchParams(location.hash.substring(1))
			.get('access_token');// забираем token из url
		dispatch(updateToken(token));// кладем его в стейт и ls
		history.replaceState({}, '', '/');// уходим от хэша
	}

	if (localStorage.getItem('bearer')) {
		token = localStorage.getItem('bearer');
	}

	return token;
};
