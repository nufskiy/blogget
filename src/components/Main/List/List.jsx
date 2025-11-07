import style from './List.module.css';
import Post from './Post';
import { useBestPosts } from '../../../hooks/useBestPosts';
import Loader from '../../../UI/Loader';

export const List = () => {
	const { posts, status } = useBestPosts();

	return (
		<ul className={style.list}>
			{status === 'loading' &&
				<Loader purpose='posts'/>
			}
			{status === 'loaded' &&
				posts.map(({data}) => (
					<Post key={data.id} postData={data} />
				))
			}
		</ul>
	);
};
