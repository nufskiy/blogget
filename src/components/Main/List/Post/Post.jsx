import style from './Post.module.css';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import Content from './Content';
import Rating from './Rating';
import Date from './Date';
import DeleteButton from './DeleteButton';

export const Post = ({postData}) => {
	const {
		id,
		title,
		author,
		ups,
		created: date,
		preview,
		thumbnail,
	} = postData;

	// const url = preview.images[0].resolutions[0].url;
	let imgSrc;

	if (!preview) {
		imgSrc = ' http://placebeard.it/100/100';
	}
	else if (thumbnail !== 'default') {
		imgSrc = thumbnail;
	}
	else {
		imgSrc = preview.images[0].resolutions[0].url;
	}

	return (
		<li className={style.post}>
			<Avatar title={title} src={imgSrc} />

			<Content title={title} author={author} id={id} />

			<Rating ups={ups} />

			<Date date={date}/>

			<DeleteButton />
		</li>
	);
};

Post.propTypes = {
	postData: PropTypes.object,
};
