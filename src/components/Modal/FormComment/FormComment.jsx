import style from './FormComment.module.css';
import { useRef, useEffect } from 'react';
import { Text } from '../../../UI/Text';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../store/comment/commentAction';
import { useAuth } from '../../../hooks/useAuth';

export const FormComment = () => {
	const value = useSelector(state => state.commentsReducer.comment);
	const dispatch = useDispatch();

	const [auth] = useAuth();
	const textareaRef = useRef(null);

	useEffect(() => {
		if (textareaRef && textareaRef.current) {
			textareaRef.current.focus();
		}
	});

	const handleChange = (e) => {
		dispatch(updateComment(e.target.value));
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
