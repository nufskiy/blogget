import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './Search.module.css';

import {ReactComponent as SearchIcon} from './img/search.svg';
import { postsSlice } from '../../../store/posts/postsSlice';

export const Search = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [query, setQuery] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(postsSlice.actions.request({ query }));
		navigate(`/category/search`);
		setQuery('');
	};


	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<input
				className={style.search}
				type='search'
				onChange={(e) => setQuery(e.target.value)}
				value={query}
			/>
			<button className={style.button}>
				<SearchIcon className={style.svg} />
			</button>
		</form>
	);
};
