import { useState } from 'react';

import { useSetRecoilState } from "recoil";
import { todoListState } from "../../atoms/todo";

export const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');

  const setTodoList = useSetRecoilState(todoListState)

  const addItem = () => {
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false
      }
    ])
    setInputValue('');
  }

  const onChange = ({target: {value}}) => {
    setInputValue(value)
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add Item</button>
    </div>
  )
}

let id = 0
export const getId = () => {
  return id++
}