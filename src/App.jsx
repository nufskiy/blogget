import Header from './components/Header';
import Main from './components/Main';
import {TokenContextProvider} from './context/tokenContext';
import {AuthContextProvider} from './context/authContext';
import {PostsContextProvider} from './context/postsContext';
import {CommentContextProvider} from './context/commentContext';

function App() {
	return (
		<TokenContextProvider>
			<AuthContextProvider>
				<PostsContextProvider>
					<CommentContextProvider>
						<Header />
						<Main />
					</CommentContextProvider>
				</PostsContextProvider>
			</AuthContextProvider>
		</TokenContextProvider>
	);
}

export default App;
