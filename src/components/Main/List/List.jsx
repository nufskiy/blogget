import style from './List.module.css';
import Post from './Post';
import { useBestPosts } from '../../../hooks/useBestPosts';

export const List = () => {
	// eslint-disable-next-line no-unused-vars
	const { posts, status } = useBestPosts();

	return (
		<ul className={style.list}>
			{status === 'loading' &&
				<></>
			}
			{status === 'loaded' &&
				posts.map(({data}) => (
					<Post key={data.id} postData={data} />
				))
			}
		</ul>
	);
};
