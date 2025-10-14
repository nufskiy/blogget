import style from './FormComment.module.css';
import {authContext} from '../../../context/authContext';
import {useRef, useEffect, useContext} from 'react';
import {Text} from '../../../UI/Text';

export const FormComment = () => {
	const {auth} = useContext(authContext);
	const textareaRef = useRef(null);

	useEffect(() => {
		if (textareaRef && textareaRef.current) {
			textareaRef.current.focus();
		}
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(textareaRef.current.value);
	};

	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<Text
				As='h3'
				size={14}
				tsize={18}
			>
				{auth.name}
			</Text>
			<textarea
				name=""
				id=""
				cols="30"
				rows="10"
				className={style.textarea}
				ref={textareaRef}
			/>
			<button className={style.btn}>Отправить</button>
		</form>
	);
};
