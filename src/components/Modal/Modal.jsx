import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import {createPortal} from 'react-dom';
import {useRef, useEffect, useState} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import FormComment from './FormComment';
import Comments from './Comments';
import Loader from '../../UI/Loader';
import { useParams, useNavigate } from 'react-router-dom';

export const Modal = () => {
	const { id, page } = useParams();
	const navigate = useNavigate();
	const [isFormShown, setIsFormShown] = useState(false);

	const { post, comments, status } = useCommentsData(id);

	const overlayRef = useRef(null);
	const closeRef = useRef(null);

	const handleClick = ({target}) => {
		if (target === overlayRef.current ||
			target.closest('button') === closeRef.current
		) {
			navigate(`/category/${page}`);
		}
	};
	const handleKeydown = ({keyCode}) => {
		if (keyCode === 27) {
			navigate(`/category/${page}`);
		}
	};

	const handleShow = (e) => {
		e.preventDefault();
		setIsFormShown(true);
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

				{status === 'loading' && <Loader purpose="comments"/>}

				{status === 'loaded' && (
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

						{!isFormShown &&
							<button
								className={style['btn-send']}
								onClick={handleShow}>
							Написать комментарий</button>
						}
						{isFormShown && (
							<FormComment />
						)}

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
