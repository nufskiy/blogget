import { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './Search.module.css';

import {ReactComponent as SearchIcon} from './img/search.svg';
import { searchRequest } from '../../../store/search/searchAction';

export const Search = () => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(searchRequest(search));
	};


	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<input
				className={style.search}
				type="search"
				onChange={(e) => setSearch(e.target.value)}
				value={search}
			/>
			<button className={style.button}>
				<SearchIcon className={style.svg} />
			</button>
		</form>
	);
};
