import style from './Tabs.module.css';
import {useState} from 'react';
import {assignId} from '../../../utils/generateRandomId';

const LIST = [
  {value: 'Главная'},
  {value: 'Просмотренные'},
  {value: 'Сохраненные'},
  {value: 'Мои посты'},
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        add item
      </button>

      {isDropdownOpen && <ul className={style.list}>
        {LIST.map(({value, id}) => (
          <li key={id}>
            <button onClick={() => {}}>{value}</button>
          </li>))}
      </ul>}
    </>
  );
};
