import Header from './components/Header';
import Main from './components/Main';

import { useDispatch } from 'react-redux';
import { AuthContextProvider } from './context/authContext';
import { PostsContextProvider } from './context/postsContext';
import { updateToken } from './store/tokenReducer';
import { getToken } from './api/token';
import { store } from './store';

const time = () => (dispatch) => {
	dispatch({ type: 'START' });

	setTimeout(() => {
		dispatch({ type: 'END' });
	}, 3000);
};

function App() {
	const dispatch = useDispatch();
	dispatch(updateToken(getToken()));
	store.dispatch(time());

	return (
		<AuthContextProvider>
			<PostsContextProvider>
				<Header />
				<Main />
			</PostsContextProvider>
		</AuthContextProvider>
	);
}

export default App;
