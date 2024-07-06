import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Filter() {
  const [todo, setTodo] = useState({});
  useEffect(() => {
    const fetchTodos = async () => {
      const todoData = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const response = todoData.data;
      const newTodo = response.filter((value) => value.completed === true);
      setTodo(newTodo);
    };
    fetchTodos();
  }, []);
  return <div>
    <h1>Completed</h1>
    {
    todo.length>0?todo.map(todo=><li key={todo.id}>{todo.title}</li>):<p>LoadingData.....</p>
    }</div>;
}
