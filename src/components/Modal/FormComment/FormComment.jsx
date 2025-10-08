import style from './FormComment.module.css';
import {useRef, useState, useEffect} from 'react';

export const FormComment = () => {
	const [isFormShown, setIsFormShown] = useState(false);
	const textareaRef = useRef(null);

	useEffect(() => {
		if (textareaRef && textareaRef.current) {
			textareaRef.current.focus();
		}
	});

	const handleShow = e => {
		e.preventDefault();
		setIsFormShown(true);
	};

	const handleClick = e => {
		e.preventDefault();
		console.log(textareaRef.current.value);
	};

	return (
		<>
			{!isFormShown &&
        <button className={style['btn-send']} onClick={handleShow}>Написать
          комментарий</button>
			}
			{isFormShown && (
				<form className={style.form}>
					<textarea
						name=""
						id=""
						cols="30"
						rows="10"
						className={style.textarea}
						ref={textareaRef}
					/>
					<button className={style.btn} onClick={handleClick}>Отправить</button>
				</form>
			)
			}
		</>
	);
};
