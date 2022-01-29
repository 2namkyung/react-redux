import React from "react";

export default function TodoList({ todos, complete }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          function click() {
            complete(index);
          }
          if (todo.done) {
            return (
              <li key={index} style={{ textDecoration: "line-through" }}>{todo.text}</li>
            );
          }
          return (
            <li key={index}>
              {todo.text} <button onClick={click}>done</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}