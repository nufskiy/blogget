import style from './Post.module.css';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import Content from './Content';
import Rating from './Rating';
import Date from './Date';
import DeleteButton from './DeleteButton';

export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <Avatar title={title} />

      <Content title={title} author={author} />

      <Rating ups={ups} />

      <Date date={date}/>

      <DeleteButton />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
