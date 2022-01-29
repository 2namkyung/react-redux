import React from 'react'
import FormContainer from "./containers/FormContainer";
import TodoListContainer from "./containers/TodoListContainer";
import UserListContainer from './containers/UserListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserListContainer/>
        <TodoListContainer />
        <FormContainer />
      </header>
    </div>
  );
}

export default App;