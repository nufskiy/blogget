import style from './FormComment.module.css';
import {authContext} from '../../../context/authContext';
import {useRef, useEffect, useContext} from 'react';
import {Text} from '../../../UI/Text';
import {commentContext} from '../../../context/commentContext';

export const FormComment = () => {
	const {auth} = useContext(authContext);
	const textareaRef = useRef(null);
	const {value, setValue} = useContext(commentContext);

	useEffect(() => {
		if (textareaRef && textareaRef.current) {
			textareaRef.current.focus();
		}
	});

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(value);
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
				value={value}
				onChange={handleChange}
			/>
			<button className={style.btn}>Отправить</button>
		</form>
	);
};
