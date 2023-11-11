import {useState, useContext} from 'react';
import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const {auth, clearAuth} = useContext(authContext);
  const [isLogoutButtonShown, setIsLogoutButtonShown] = useState(false);


  const handleClick = () => {
    setIsLogoutButtonShown(!isLogoutButtonShown);
  };

  const logout = () => {
    delToken();
    clearAuth();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn} onClick={handleClick}>
            <img className={style.img} src={auth.img}
              title={auth.name} alt={`Аватар ${auth.name}`} />
            <Text>{auth.name}</Text>
          </button>
          {isLogoutButtonShown && (
            <button className={style.logout} onClick={logout}>
              Выйти
            </button>
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
