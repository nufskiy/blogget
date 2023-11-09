import {useState, useEffect} from 'react';
import {URL_API} from '../../../api/const';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [isLogoutButtonShown, setIsLogoutButtonShown] = useState(false);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    })
      .then(response => {
        if (response.status !== 401) {
          return response.json();
        }
        delToken();
        throw new Error(response.status);
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch((err) => {
        console.error(err);
        setAuth({});
      });
  }, [token]);

  const handleClick = () => {
    setIsLogoutButtonShown(!isLogoutButtonShown);
  };

  const logout = () => {
    delToken();
    setAuth({});
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

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
