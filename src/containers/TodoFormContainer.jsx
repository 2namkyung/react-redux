import React from 'react'
import { useDispatch } from "react-redux";

import Form from "../components/Form";
import { addTodo } from '../redux/modules/todos';

const TodoFormContainer = () => {
  const dispatch = useDispatch();
  function add(todo) {
    dispatch(addTodo(todo));
  }
  return <Form add={add} />;
};

export default TodoFormContainer;