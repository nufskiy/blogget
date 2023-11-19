import style from './Post.module.css';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import Content from './Content';
import Rating from './Rating';
import Date from './Date';
import DeleteButton from './DeleteButton';

export const Post = ({postData}) => {
  const {
    id,
    title,
    author,
    ups,
    created: date,
    thumbnail,
  } = postData;

  return (
    <li className={style.post}>
      <Avatar title={title} src={thumbnail} />

      <Content title={title} author={author} id={id} />

      <Rating ups={ups} />

      <Date date={date}/>

      <DeleteButton />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
