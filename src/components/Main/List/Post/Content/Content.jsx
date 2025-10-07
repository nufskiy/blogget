import style from './Content.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import {useState} from 'react';
import Modal from '../../../../Modal';

export const Content = ({title, author, id}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className={style.content}>
			<Text As='h2'>
				<Text
					As='a'
					size={18}
					tsize={24}
					bold
					className={style.linkPost}
					onClick={() => {
						setIsModalOpen(true);
					}}
				>
					{title}
				</Text>
			</Text>
			<Text
				As='a'
				color='orange'
				medium
				size={12}
				tsize={14}
				className={style.linkAuthor}
				href='#author'
			>
				{author}
			</Text>
			{
				isModalOpen &&
				<Modal
					id={id}
					closeModal={() => {
						setIsModalOpen(false);
					}}
				/>
			}
		</div>
	);
};

Content.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	id: PropTypes.string,
};
