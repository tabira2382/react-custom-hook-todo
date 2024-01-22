// TodoTemplate/index.jsx
import React from 'react';
import { InputForm } from '../../atoms/inputForm'
import {AddTodo} from '../../organisms/AddTodo'

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
    <div>
      <InputForm
        inputValue="" // テスト用の初期値
        placeholder="ここに入力" // テスト用のプレースホルダー
        handleChangeValue={handleInputChange} // 値が変更されたときのハンドラー
      />
      {/* AddTodo */}
      <AddTodo
        addInputValue=""
        onChangeTodo={handleInputChange}
        handleAddTodo={handleAddTodo}
      />
    </div>
  );
};

