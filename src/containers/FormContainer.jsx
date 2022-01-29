import React from 'react'
import { useDispatch } from "react-redux";

import Form from "../components/Form";
import { addTodo } from '../redux/actions';

const FormContainer = () => {
  const dispatch = useDispatch();
  function add(todo) {
    dispatch(addTodo(todo));
  }
  return <Form add={add} />;
};

export default FormContainer;