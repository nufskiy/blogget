import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import {createPortal} from 'react-dom';
import {useRef, useEffect} from 'react';

export const Modal = ({markdown, title, author, closeModal}) => {
  const overlayRef = useRef(null);
  const closeRef = useRef(null);

  const handleClick = ({target}) => {
    if (target === overlayRef.current || target === closeRef.current) {
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
  });

  return createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>{title}</h2>

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
            {markdown}
          </Markdown>
        </div>

        <p className={style.author}>{author}</p>

        <button className={style.close} ref={closeRef}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal_root'),
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func
};
