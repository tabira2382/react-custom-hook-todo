// TodoTemplate/index.jsx
import React, {useState} from 'react';
import { InputForm } from '../../atoms/inputForm'
import {AddTodo} from '../../organisms/AddTodo'
import {TodoList} from '../../organisms/TodoList'
import styles from "./styles.module.css";

export const TodoTemplate = () => {
  const[todoItems, setTodoItems] = useState([{ id: 1, title: "Todo1" }, { id: 2, title: "Todo2" }]);
  const [newTodoTitle, setNewTodoTitle] = useState("")
  const [maxId, setMaxId] = useState(2)


  // 削除ハンドラー関数
  const handleDeleteTodo = (id => {
    // 確認ダイアログ
    const confirmDelete = window.confirm("このTodoを削除してもよろしいですか?")
    if (confirmDelete) {
      const newTodoItems = todoItems.filter(item => item.id !== id);
      setTodoItems(newTodoItems);  
    }
  });

  // Todo追加処理
  const handleAddTodo = () => {
    if (newTodoTitle) { // 新しいTodoタイトルが空でない場合
      const newId = maxId + 1 // 新しいIDを生成
      const newTodo = { id: newId , title: newTodoTitle }; //新しいTodo項目
      setTodoItems([...todoItems, newTodo]); //Todoリストに新しい項目を追加
      setMaxId(newId); // 最大IDを更新
      setNewTodoTitle("")// 入力値をクリア
    }
  };
  

  // 入力値の変更処理
  const handleInputChange = (e) => {
    setNewTodoTitle(e.target.value) // 新しいTodoタイトルを設定
  };
  

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/* AddTodo */}
      <section className={styles.common}>
        <AddTodo
          addInputValue={newTodoTitle}
          onChangeTodo={handleInputChange}
          handleAddTodo={handleAddTodo}
        />
      </section>
      {/* TodoList */}
      <section className={styles.common}>
        <TodoList todoItems={todoItems} onDeleteTodo={handleDeleteTodo} />
      </section>
    </div>
  );
};

