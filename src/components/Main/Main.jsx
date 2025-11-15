import Layout from '../Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';
import Modal from '../Modal';
import { Text } from '../../UI/Text';
import { Route, Routes } from 'react-router-dom';

export const Main = () => (
	<main className={style.main}>
		<Layout>
			<Tabs />
			<Routes>
				<Route path='/' element={
					<>
						<Text
							As='h2'
							size={22}
							tsize={26}
							center
						>Стартовая страница</Text>
						<Text
							As='p'
							size={16}
							tsize={22}
							center
							className={style.text}
						>Добро пожаловать!</Text>
						<Text
							As='p'
							size={14}
							tsize={18}
							center
							className={style.text}
						>Выберите категорию</Text>
					</>
				}/>
				<Route path='/category/:page' element={<List />}>
					<Route path='post/:id' element={<Modal />}/>
				</Route>
				<Route path='*' element={
					<>
						<Text
							As='h2'
							size={22}
							tsize={26}
							center
							className={style.warning}
						>404</Text>
					</>
				}/>
			</Routes>
		</Layout>
	</main>
);
