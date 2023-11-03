import style from './Avatar.module.css';
import PropTypes from 'prop-types';
import notphoto from './../img/notphoto.jpg';

export const Avatar = (title) => (
  <img className={style.img} src={notphoto} title={title} />
);

Avatar.propTypes = {
  title: PropTypes.string,
};
