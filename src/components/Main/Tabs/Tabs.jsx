import style from './Tabs.module.css';
import PropTypes from 'prop-types';

export const Tabs = ({list, setList, addItem}) => {
  const handleClick = id => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <>
      <button onClick={addItem}>add item</button>

      <ul className={style.list}>
        {list.map(({value, id}) => (
          <li key={id}>
            <button onClick={() => handleClick(id)}>{value}</button>
          </li>))}
      </ul>
    </>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func
};
