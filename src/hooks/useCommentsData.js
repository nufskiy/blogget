import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { commentsRequestAsync } from '../store/comments/commentsAction';

export const useCommentsData = (id) => {
	const token = useSelector(state => state.tokenReducer.token);
	const post = useSelector(state => state.commentsReducer.post);
	const comments = useSelector(state => state.commentsReducer.comments);
	const status = useSelector(state => state.commentsReducer.status);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(commentsRequestAsync(id));
	}, [token]);

	return { post, comments, status };
};
