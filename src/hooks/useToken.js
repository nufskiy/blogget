import {useState, useEffect} from 'react';


export const useToken = () => {
	const [token, setToken] = useState('');

	useEffect(() => {
		// eslint-disable-next-line max-len
		if (location.pathname.includes('/auth') && location.hash !== '') { // на странице после сервера авторизации reddit
			const token = new URLSearchParams(location.hash.substring(1))
				.get('access_token');// забираем token из url
			setToken(token);// кладем его в стейт
			history.replaceState({}, '', '/');// уходим от хэша
		}

		if (localStorage.getItem('bearer')) {
			// eslint-disable-next-line max-len
			setToken(localStorage.getItem('bearer'));// зайдя на любую страницу - забираем token из ls и кладем его в стейт
		}
	}, []);

	useEffect(() => {
		if (token) {
			// eslint-disable-next-line max-len
			localStorage.setItem('bearer', token);// как только на любой странице в стейте появился токен - кладем его в ls
			console.log('token положен');
		}
	}, [token]);

	const delToken = () => localStorage.setItem('bearer', '');

	return [token, delToken];
};
