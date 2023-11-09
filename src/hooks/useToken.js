import {useState, useEffect} from 'react';

export const useToken = (state) => {
  const [token, setToken] = useState(state);

  useEffect(() => {
    if (location.pathname.includes('/auth') && location.hash !== '') {
      const token = new URLSearchParams(location.hash.substring(1))
        .get('access_token');
      setToken(token);
      location.replace('/');
    }

    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer'));
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  const delToken = () => localStorage.removeItem('bearer');

  return [token, delToken];
};
