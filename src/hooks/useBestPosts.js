import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';


export const useBestPosts = () => {
	const [bestPosts, setBestPosts] = useState([]);
	const {token} = useContext(tokenContext);

	useEffect(() => {
		if (!token) return;

		fetch(`${URL_API}/best`, {
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
			.then(data => {
				setBestPosts(data.data.children);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [token]);

	return bestPosts;
};
