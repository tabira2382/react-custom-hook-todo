// TodoTemplate/index.jsx
import React from 'react';
import { InputForm } from '../../atoms/inputForm'
import {AddTodo} from '../../organisms/AddTodo'
import styles from "./styles.module.css";

// TodoTemplate/index.jsx
export const TodoTemplate = () => {
  // テスト用のハンドラー関数
  const handleInputChange = (e) => {
    console.log(e.target.value); // 入力値をコンソールに表示
  };

  // テスト用のTodo追加ハンドラー（実際のロジックに置き換える）
  const handleAddTodo = () => {
    console.log("Add Todo");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/* AddTodo */}
      <section className={styles.common}>
      <AddTodo
        addInputValue=""
        onChangeTodo={handleInputChange}
        handleAddTodo={handleAddTodo}
      />
      </section>
    </div>
  );
};

