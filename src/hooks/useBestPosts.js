import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postsRequestAsync } from '../store/posts/postsAction';

export const useBestPosts = () => {
	const posts = useSelector(state => state.postsReducer.data);
	const status = useSelector(state => state.postsReducer.status);
	const token = useSelector(state => state.tokenReducer.token);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(postsRequestAsync());
	}, [token]);

	return { posts, status };
};
