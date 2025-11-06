import { RingLoader } from 'react-spinners';

export const AuthLoader = () => (
	<RingLoader
		color='#cc6633'
		css={{display: 'block'}}
		size={30}
		aria-label="Loading Spinner"
		data-testid="loader"
	/>
);
