import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { completeTodo } from "../actions";
import TodoList from "../components/TodoList";

const TodoListContainer = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function complete(index) {
    dispatch(completeTodo(index));
  }

  return <TodoList todos={todos} complete={complete} />;
};

export default TodoListContainer;