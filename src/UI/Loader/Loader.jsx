import { RingLoader } from 'react-spinners';
import { PropTypes } from 'prop-types';

export const Loader = ({ purpose }) => {
	let color;
	let size;

	switch (purpose) {
		case 'auth':
			color = '#cc6633';
			size = 30;
			break;
		case 'posts':
			color = '#454646';
			size = 60;
			break;
		case 'comments':
			color = '#454646';
			size = 100;
			break;
		default:
			color = '#000';
			size = 30;
	}

	return (
		<RingLoader
			color={ color }
			css={{ display: 'block' }}
			size={ size }
			aria-label="Loading Spinner"
			data-testid="loader"
		/>
	);
};

Loader.propTypes = {
	purpose: PropTypes.string,
};
