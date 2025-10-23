import { useState, useEffect } from 'react';
import { URL_API } from '../api/const';
import { deleteToken } from '../store/tokenReducer';
import { useDispatch } from 'react-redux';
import { getToken } from '../api/token';

export const useAuth = () => {
	const [auth, setAuth] = useState({});
	const token = getToken();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!token) return;

		fetch(`${URL_API}/api/v1/me`, {
			headers: {
				Authorization: `bearer ${token}`
			},
		})
			.then(response => {
				if (response.status === 401) {
					throw new Error(response.status.toString());
				}
				return response.json();
			})
			.then(({name, icon_img: iconImg}) => {
				const img = iconImg.replace(/\?.*$/, '');
				setAuth({name, img});
			})
			.catch((err) => {
				console.error(err);
				dispatch(deleteToken());
				setAuth({});
			});
	}, [token]);

	const clearAuth = () => setAuth({});

	return [auth, clearAuth];
};
