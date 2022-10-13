import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);
  
  const nextTodo = () => setTodoId(todoId + 1);
  const prevTodo = () => {
    if ( todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>TodoApp - RTK Query</h1>
      <hr />
      {
        isLoading && <h4>Loading...</h4>
      }

      <pre>{ JSON.stringify( todo )}</pre>

      <button onClick={ prevTodo}>Prev Todo</button>
      <button onClick={ nextTodo }>Next Todo</button>
      
      {/* <ul>
        {
          todos.map(todo => (
            <li key={todo.id} style={{ textDecoration: todo.completed? 'line-through' : 'none' }}>
              {todo.title}
            </li>
          ))
        }
      </ul> */}

    </>
  )
}
