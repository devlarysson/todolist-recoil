import { useRecoilValue } from 'recoil';
import { TodoItemCreator } from '../TodoItemCreate';
import { TodoItem } from '../TodoItem';
import { todoListState } from '../../atoms/todo'


export const TodoList = () => {
  const todoList = useRecoilValue(todoListState)

  return (
    <>
      <TodoItemCreator />
      {todoList.map(todo => <TodoItem item={todo}/>)}
    </>
  )
}