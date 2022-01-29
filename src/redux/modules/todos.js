// 액션 타입 정의
const ADD_TODO = "redux/todos/ADD_TODO";
const COMPLETE_TODO = "redux/todos/COMPLETE_TODO";

// 액션 생성 함수
export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export const completeTodo = (index) => ({
  type: COMPLETE_TODO,
  index,
});

// reducer
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