import style from './Comments.module.css';
import PropTypes from 'prop-types';
import formatDate from '../../../utils/formatDate';

export const Comments = ({comments}) => (
  <div className={style.list}>
    {comments.length === 0 && <p>Нет комментариев</p>}
    {comments.length !== 0 &&
    comments.map(comment => (
      <div key={comment.id} className={style.item}>
        <div className={style.author}>{comment.author}</div>
        <div className={style.comment}>{comment.body}</div>
        <div className={style.date}>
          {formatDate(comment.created)}
        </div>
      </div>
    ))
    }
  </div>
);

Comments.propTypes = {
  comments: PropTypes.array,
};
