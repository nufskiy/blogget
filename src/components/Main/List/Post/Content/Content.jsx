import style from './Content.module.css';
import PropTypes from 'prop-types';
import Title from './Title';

export const Content = ({title, author}) => (
  <div className={style.content}>
    <Title title={title}/>
    <a className={style.linkAuthor} href="#author">{author}</a>
  </div>
);

Content.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
