import style from './List.module.css';
import Post from './Post';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Outlet } from 'react-router-dom';
import { postsSlice } from '../../../store/posts/postsSlice';

export const List = () => {
	const posts = useSelector(state => state.postsReducer.posts);
	const endList = useRef(null);
	const dispatch = useDispatch();
	const { page } = useParams();

	useEffect(() => {
		dispatch(postsSlice.actions.changePage(page));
		dispatch(postsSlice.actions.request());
	}, [page]);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				dispatch(postsSlice.actions.request());
			}
		}, {
			rootMargin: '100px',
		});

		observer.observe(endList.current);

		return () => {
			if (endList.current) {
				observer.unobserve(endList.current);
			}
		};
	}, [endList.current]);

	return (
		<>
			<ul className={style.list}>
				{
					posts.map(({data}) => (
						<Post key={data.id} postData={data} />
					))
				}
				<li ref={endList} className={style.end}/>
			</ul>
			<Outlet />
		</>
	);
};
