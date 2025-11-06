import { useState, useEffect } from 'react';
import { URL_API } from '../api/const';
import { deleteToken } from '../store/tokenReducer';
import { useSelector, useDispatch } from 'react-redux';
import {
	authRequest,
	authRequestError,
	authRequestSuccess
} from '../store/auth/action';

export const useAuth = () => {
	const [auth, setAuth] = useState({});
	const token = useSelector(state => state.tokenReducer.token);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!token) return;

		dispatch(authRequest());

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
				const data = { name, img };
				setAuth(data);

				dispatch(authRequestSuccess(data));
			})
			.catch((err) => {
				console.error(err);
				dispatch(deleteToken());
				setAuth({});

				dispatch(authRequestError(err));
			});
	}, [token]);

	const clearAuth = () => setAuth({});

	return [auth, clearAuth];
};
