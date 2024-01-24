// components/organisms/TodoList/index.jsx
import React from 'react';
import styles from './style.module.css';

export const TodoList = (props) => {
  const todoItems = props.todoItems;
  return (
    <ul className={styles.list}>
      {todoItems.map((item) => (
        <li key={item.id} className={styles.todo}>
          <span className={styles.task}>{item.title}</span>
          </li>
      ))}
    </ul>
  );
};
