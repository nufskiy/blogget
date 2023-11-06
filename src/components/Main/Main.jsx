import Layout from '../Layout';
import style from './Main.module.css';
import Tabs from './Tabs';
import List from './List';
import {useState} from 'react';
import {assignId} from '../../utils/generateRandomId';

const LIST = [
  {value: 'Главная'},
  {value: 'Просмотренные'},
  {value: 'Сохраненные'},
  {value: 'Мои посты'},
].map(assignId);

export const Main = () => {
  const [list, setList] = useState(LIST);

  const addItem = () => {
    setList([...list, assignId({value: 'Новый пост'})]);
  };

  return (
    <main className={style.main}>
      <Layout>
        <Tabs list={list} setList={setList} addItem={addItem} />
        <List />
      </Layout>
    </main>
  );
};
