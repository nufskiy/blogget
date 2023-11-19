import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import {createPortal} from 'react-dom';
import {useRef, useEffect} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import FormComment from './FormComment';
import Comments from './Comments';

export const Modal = ({id, closeModal}) => {
  const data = useCommentsData(id);
  const post = data.length !== 0 ? data[0] : {};
  const comments = data.length !== 0 ? data[1] : [];

  const overlayRef = useRef(null);
  const closeRef = useRef(null);

  const handleClick = ({target}) => {
    if (target === overlayRef.current ||
      target.closest('button') === closeRef.current) {
      closeModal();
    }
  };
  const handleKeydown = ({keyCode}) => {
    if (keyCode === 27) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>

        {data.length === 0 && <p>Загрузка...</p>}

        {data.length !== 0 && (
          <>
            <h2 className={style.title}>{post.title}</h2>

            <div className={style.content}>
              <Markdown options={{
                overrides: {
                  a: {
                    props: {
                      target: '_blank'
                    },
                  },
                },
              }}>
                {post.selftext}
              </Markdown>
            </div>

            <p className={style.author}>{post.author}</p>

            <FormComment />

            <Comments comments={comments} />
          </>)
        }

        <button className={style.close} ref={closeRef}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal_root'),
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  closeModal: PropTypes.func
};
