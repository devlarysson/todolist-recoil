import { useRecoilState } from 'recoil'
import { todoListState } from "../../atoms/todo"


export const TodoItem = ({item}) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const index = todoList.findIndex(todo => todo = item)

  const editItemText = ({target: {value}}) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value
    })

    setTodoList(newList)
  }

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isCompleted: !item.isCompleted
    })

    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index)
    setTodoList(newList)
  }

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input type="checkbox" checked={item.isCompleted} onChange={toggleItemCompletion}/>
      <button onClick={deleteItem}>Deletar</button>
    </div>
  )
}

const replaceItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

const removeItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}