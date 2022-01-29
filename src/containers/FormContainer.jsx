import React from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";
import Form from "../components/Form";

const FormContainer = () => {
  const dispatch = useDispatch();
  function add(todo) {
    dispatch(addTodo(todo));
  }
  return <Form add={add} />;
};

export default FormContainer;