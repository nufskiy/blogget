import { useState } from 'react';
import style from './Auth.module.css';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { urlAuth } from '../../../api/auth';
import { Text } from '../../../UI/Text';
import { deleteToken } from '../../../store/tokenReducer';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../hooks/useAuth';
import AuthLoader from './AuthLoader';

export const Auth = () => {
	const [auth, loading, clearAuth] = useAuth();
	const [isLogoutButtonShown, setIsLogoutButtonShown] = useState(false);
	const dispatch = useDispatch();

	const handleClick = () => {
		setIsLogoutButtonShown(!isLogoutButtonShown);
	};

	const logout = () => {
		dispatch(deleteToken());
		clearAuth();
	};

	return (
		<div className={style.container}>
			{loading ? (
				<AuthLoader/>
			) : auth.name ? (
				<>
					<button className={style.btn} onClick={handleClick}>
						<img className={style.img} src={auth.img}
							title={auth.name} alt={`Аватар ${auth.name}`} />
						<Text>{auth.name}</Text>
					</button>
					{isLogoutButtonShown && (
						<button className={style.logout} onClick={logout}>Выйти</button>
					)}
				</>
			) : (
				<Text className={style.authLink} As='a' href={urlAuth}>
					<LoginIcon className={style.svg} />
				</Text>
			)}
		</div>
	);
};
