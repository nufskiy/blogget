import style from './Comments.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../UI/Text';
import Date from '../../Main/List/Post/Date';

export const Comments = ({comments}) => (
	<ul className={style.list}>
		{comments.length ? (
			comments.map(comment => comment.body && (
				<li key={comment.id} className={style.item}>
					<Text className={style.author} As='h3'>{comment.author}</Text>
					<Text className={style.comment} As='p'>{comment.body}</Text>
					<Date date={comment.created}/>
				</li>
			))
		) : (
			<p>Нет комментариев</p>
		)}
	</ul>
);

Comments.propTypes = {
	comments: PropTypes.array,
};
