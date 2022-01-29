import { ADD_TODO, COMPLETE_TODO } from "../actions";

export default function todos(previousState, action) {

  if (previousState === undefined) {
    return []; 
  }

  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];
  }

  if (action.type === COMPLETE_TODO) {
    const newTodos = [...previousState];
    newTodos[action.index].done = true;
    return newTodos;
  }

  return previousState;
}