import React from 'react'
import FormContainer from "./containers/FormContainer";
import TodoListContainer from "./containers/TodoListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoListContainer />
        <FormContainer />
      </header>
    </div>
  );
}

export default App;