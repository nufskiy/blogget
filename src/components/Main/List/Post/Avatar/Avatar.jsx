import style from './Avatar.module.css';
import PropTypes from 'prop-types';
// import notphoto from './../img/notphoto.jpg';

export const Avatar = ({title, src}) => (
  <img className={style.img} src={src} title={title} alt={title} />
);

Avatar.propTypes = {
  title: PropTypes.string,
  src: PropTypes.string,
};
